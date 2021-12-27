using DomainLayer.Modules.Grouping.Data_Objects.Entities;
using DomainLayer.Modules.Transactions;
using BankAccountLib;
using BankAccountLib.Classification.Data;
using BankAccountLib.Classification.Extractor;
using BankAccountLib.Data_Objects.Entities;
using BankAccountLib.Transactions.Filter;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;
using DomainLayer.Modules.UploadSupervisor;

namespace AggregateDatabase
{
    public class DatabaseContext : DbContext
    {
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var entries = ChangeTracker.Entries();
            foreach (var item in entries)
            {
                if (item.State != EntityState.Unchanged)
                {
                    Console.WriteLine("State: {0}, Type: {1}", item.State.ToString(), item.Entity.GetType().FullName);
                }
            }
            return base.SaveChangesAsync(cancellationToken);
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
          //  optionsBuilder.EnableSensitiveDataLogging();
            //string t = ConfigurationManager.ConnectionStrings["BankDBContext"].ConnectionString;
            string connectionString = "Server = 62.75.175.66; Port = 3306; Database = bankDB; Uid = bankDBUser; Pwd = bank_pw;";

            var configureNamedOptions = new ConfigureNamedOptions<ConsoleLoggerOptions>("", null);
            var optionsFactory = new OptionsFactory<ConsoleLoggerOptions>(new[] { configureNamedOptions }, Enumerable.Empty<IPostConfigureOptions<ConsoleLoggerOptions>>());
            var optionsMonitor = new OptionsMonitor<ConsoleLoggerOptions>(optionsFactory, Enumerable.Empty<IOptionsChangeTokenSource<ConsoleLoggerOptions>>(), new OptionsCache<ConsoleLoggerOptions>());
            var loggerFactory = new LoggerFactory(new[] { new ConsoleLoggerProvider(optionsMonitor) }, new LoggerFilterOptions { MinLevel = LogLevel.Information });

        //    optionsBuilder.UseLoggerFactory(loggerFactory);
            optionsBuilder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));//.EnableSensitiveDataLogging();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UsePropertyAccessMode(PropertyAccessMode.Field);

            modelBuilder.ApplyConfiguration(new UserEntityConfiguration());
            modelBuilder.ApplyConfiguration(new GroupingProfileEntityConfiguration());
            modelBuilder.ApplyConfiguration(new TransactionsProfileEntityConfiguration());
            modelBuilder.ApplyConfiguration(new UploadManagerConfiguration());

            modelBuilder.Entity<TransactionGroup>(groupBuilder =>
            {
                groupBuilder.ToTable("Group");

                //examples
                groupBuilder.OwnsMany(g => g.ExampleTransactions, transactionBuilder =>
                {
                    transactionBuilder.ToTable("GroupExample");

                    transactionBuilder.WithOwner();

                    //auto generated key
                    transactionBuilder.HasKey("Id");
                });
            });

            modelBuilder.Entity<TransactionClassifier>(classifierBuilder =>
            {
                classifierBuilder.ToTable("Classifier");

                //exctractor configuration
                classifierBuilder.Property(c => c.Extractor)
                                 .HasConversion(e => e.GetSerializedConfiguration(),
                                                txt => new WordExtractor(txt))
                                 .Metadata
                                 .SetValueComparer(new ValueComparer<WordExtractor>(
                                                    (e1, e2) => e1.GetSerializedConfiguration() == e2.GetSerializedConfiguration(),
                                                     e => e.GetSerializedConfiguration().GetHashCode(),
                                                     e => e));

                //feature selection
                classifierBuilder.Property(c => c.FeatureSelection)
                                 .HasConversion(col => string.Join(',', col.ToArray()),
                                                txt => txt.Split(',', StringSplitOptions.None).Select(v => int.Parse(v)));

                //examples
                classifierBuilder.OwnsMany(c => c.TrainingSamples, sampleBuilder =>
                {
                    sampleBuilder.ToTable("ClassifierExample");
                    sampleBuilder.WithOwner()
                                 .HasForeignKey("ClassifierId");

                    //autogenerated id
                    sampleBuilder.Property<int>("Id");
                    sampleBuilder.HasKey("Id");

                    //features as single string
                    sampleBuilder.Property(c => c.Features)
                                 .HasConversion(col => string.Join(',', col.ToArray()),
                                                  txt => txt.Split(',', StringSplitOptions.None).Select(v => float.Parse(v)).ToArray());

                    //corresponding class
                    sampleBuilder.HasOne(sp => sp.Class)
                                 .WithMany()
                                 .HasForeignKey("GroupId")
                                 .OnDelete(DeleteBehavior.Cascade);
                });

            });

        }

        class GroupingProfileEntityConfiguration : IEntityTypeConfiguration<GroupingProfile>
        {
            public void Configure(EntityTypeBuilder<GroupingProfile> profileBuilder)
            {
                profileBuilder.ToTable("GroupingProfile");

                //corresponding user foreign key
                profileBuilder.HasOne<User>()
                           .WithOne()
                           .HasForeignKey<GroupingProfile>("UserId")
                           .OnDelete(DeleteBehavior.Cascade);

                //classifier
                profileBuilder.HasOne<TransactionClassifier>("_classifier")
                              .WithOne()
                              .HasForeignKey<TransactionClassifier>("GroupingProfileId")
                              .OnDelete(DeleteBehavior.Cascade);

                //groups
                profileBuilder.HasMany<TransactionGroup>("_groups")
                              .WithOne()
                              .OnDelete(DeleteBehavior.Cascade);    
                
            }
        }
        class TransactionsProfileEntityConfiguration : IEntityTypeConfiguration<TransactionsProfile>
        {
            public void Configure(EntityTypeBuilder<TransactionsProfile> profileBuilder)
            {
                profileBuilder.ToTable("TransactionsProfile");

                //corresponding user foreign key
                profileBuilder.HasOne<User>()
                           .WithOne()
                           .HasForeignKey<TransactionsProfile>("UserId")
                           .OnDelete(DeleteBehavior.Cascade);

                //transactions
                profileBuilder.OwnsMany<ClassifiedTransaction>("_transactions", classifiedTransactionBuilder =>
                {
                    classifiedTransactionBuilder.ToTable("UserTransaction");
                    classifiedTransactionBuilder.WithOwner();
                    classifiedTransactionBuilder.HasKey("Id");

                    //timestamp
                    classifiedTransactionBuilder.Property<DateTime>("_classificationTimestamp")
                                                .HasColumnName("Timestamp");

                    //corresponding group
                    classifiedTransactionBuilder.HasOne<TransactionGroup>("_group")
                                                .WithMany()
                                                .HasForeignKey("GroupId")
                                                .OnDelete(DeleteBehavior.Cascade);
                    //transaction data
                    classifiedTransactionBuilder.OwnsOne(tr => tr.Data, dataBuilder =>
                    {
                        dataBuilder.WithOwner();
                        //put transaction data into classifiedTransaction table
                        //dataBuilder.ToTable("UserTransaction");
                    });

                });

                //corresponding grouping profile
                profileBuilder.HasOne<GroupingProfile>("_groupingProfile")
                              .WithOne()
                              .HasForeignKey<TransactionsProfile>("GroupingProfileId")
                              .OnDelete(DeleteBehavior.Cascade);
            }
        }
        class UserEntityConfiguration : IEntityTypeConfiguration<User>
        {
            public void Configure(EntityTypeBuilder<User> userBuilder)
            {
                userBuilder.ToTable("User");

            }
        }

        class UploadManagerConfiguration : IEntityTypeConfiguration<UploadManager>
        {
            public void Configure(EntityTypeBuilder<UploadManager> builder)
            {
                builder.ToTable("UploadManager");

                //corresponding user foreign key
                builder.HasOne<User>()
                        .WithOne()
                        .HasForeignKey<UploadManager>("UserId")
                        .OnDelete(DeleteBehavior.Cascade);

                //corresponding transactions profile
                builder.HasOne<TransactionsProfile>("_transactionsProfile")
                        .WithOne()
                        .HasForeignKey<UploadManager>("TransactionsProfileId")
                        .OnDelete(DeleteBehavior.Cascade);

                //preview
                builder.OwnsOne<UploadPreview>("_preview", previewBuilder =>
                {
                    previewBuilder.WithOwner();
                    previewBuilder.Property<RawCSVFile>("_file")
                                  .HasColumnName("File")
                                  .HasConversion(file => file.Serialize(),
                                                 txt => RawCSVFile.Deserialize(txt));
                });

                //entries
                builder.OwnsMany(b => b.History, summary =>
                {
                    summary.WithOwner();
                    summary.Property(s => s.Name);
                    summary.Property(s => s.First);
                    summary.Property(s => s.Last);
                    summary.Property(s => s.Size);
                    summary.Property(s => s.UsefullCount);
                    summary.Property(s => s.FirstAdded);
                    summary.Property(s => s.LastAdded);
                });
                        

            }
        }

        public DbSet<User> Users { get; set; }
        public DbSet<TransactionsProfile> TransactionProfiles { get; set; }
        public DbSet<GroupingProfile> GroupingProfiles { get; set; }
        public DbSet<UploadManager> UploadHistories { get; set; }

    }
}
