﻿// <auto-generated />
using System;
using AggregateDatabase;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace PersistanceLayer.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("BankAccountLib.Data_Objects.Entities.GroupingProfile", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("char(36)");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("GroupingProfile", (string)null);
                });

            modelBuilder.Entity("BankAccountLib.TransactionGroup", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<Guid?>("GroupingProfileId")
                        .HasColumnType("char(36)");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("GroupingProfileId");

                    b.ToTable("Group", (string)null);
                });

            modelBuilder.Entity("DomainLayer.Modules.Grouping.Data_Objects.Entities.TransactionClassifier", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<string>("Extractor")
                        .HasColumnType("longtext");

                    b.Property<string>("FeatureSelection")
                        .HasColumnType("longtext");

                    b.Property<Guid?>("GroupingProfileId")
                        .HasColumnType("char(36)");

                    b.Property<DateTime>("UpdateTimestamp")
                        .HasColumnType("datetime(6)");

                    b.HasKey("Id");

                    b.HasIndex("GroupingProfileId")
                        .IsUnique();

                    b.ToTable("Classifier", (string)null);
                });

            modelBuilder.Entity("DomainLayer.Modules.Transactions.TransactionsProfile", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<Guid?>("GroupingProfileId")
                        .HasColumnType("char(36)");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("char(36)");

                    b.HasKey("Id");

                    b.HasIndex("GroupingProfileId")
                        .IsUnique();

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("TransactionsProfile", (string)null);
                });

            modelBuilder.Entity("DomainLayer.Modules.UploadSupervisor.UploadManager", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<Guid?>("TransactionsProfileId")
                        .HasColumnType("char(36)");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("char(36)");

                    b.HasKey("Id");

                    b.HasIndex("TransactionsProfileId")
                        .IsUnique();

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("UploadManager", (string)null);
                });

            modelBuilder.Entity("WebBackend.Account_Domain_Model.Data_Objects.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<string>("Email")
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.Property<string>("Password")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("User", (string)null);
                });

            modelBuilder.Entity("BankAccountLib.Data_Objects.Entities.GroupingProfile", b =>
                {
                    b.HasOne("WebBackend.Account_Domain_Model.Data_Objects.User", null)
                        .WithOne()
                        .HasForeignKey("BankAccountLib.Data_Objects.Entities.GroupingProfile", "UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("BankAccountLib.TransactionGroup", b =>
                {
                    b.HasOne("BankAccountLib.Data_Objects.Entities.GroupingProfile", null)
                        .WithMany("_groups")
                        .HasForeignKey("GroupingProfileId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.OwnsMany("BankAccountLib.TransactionData", "ExampleTransactions", b1 =>
                        {
                            b1.Property<int>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("int");

                            b1.Property<string>("AccountNumber")
                                .HasColumnType("longtext");

                            b1.Property<double>("Amount")
                                .HasColumnType("double");

                            b1.Property<string>("BankCode")
                                .HasColumnType("longtext");

                            b1.Property<DateTime>("BookingDate")
                                .HasColumnType("datetime(6)");

                            b1.Property<string>("BookingDescription")
                                .HasColumnType("longtext");

                            b1.Property<string>("Currency")
                                .HasColumnType("longtext");

                            b1.Property<string>("Info")
                                .HasColumnType("longtext");

                            b1.Property<string>("OrderAccount")
                                .HasColumnType("longtext");

                            b1.Property<string>("Purpose")
                                .HasColumnType("longtext");

                            b1.Property<string>("Target")
                                .HasColumnType("longtext");

                            b1.Property<Guid>("TransactionGroupId")
                                .HasColumnType("char(36)");

                            b1.Property<DateTime>("ValueDate")
                                .HasColumnType("datetime(6)");

                            b1.HasKey("Id");

                            b1.HasIndex("TransactionGroupId");

                            b1.ToTable("GroupExample", (string)null);

                            b1.WithOwner()
                                .HasForeignKey("TransactionGroupId");
                        });

                    b.Navigation("ExampleTransactions");
                });

            modelBuilder.Entity("DomainLayer.Modules.Grouping.Data_Objects.Entities.TransactionClassifier", b =>
                {
                    b.HasOne("BankAccountLib.Data_Objects.Entities.GroupingProfile", null)
                        .WithOne("_classifier")
                        .HasForeignKey("DomainLayer.Modules.Grouping.Data_Objects.Entities.TransactionClassifier", "GroupingProfileId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.OwnsMany("BankAccountLib.Classification.Data.TrainingSample", "TrainingSamples", b1 =>
                        {
                            b1.Property<int>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("int");

                            b1.Property<Guid>("ClassifierId")
                                .HasColumnType("char(36)");

                            b1.Property<string>("Features")
                                .HasColumnType("longtext");

                            b1.Property<Guid?>("GroupId")
                                .HasColumnType("char(36)");

                            b1.HasKey("Id");

                            b1.HasIndex("ClassifierId");

                            b1.HasIndex("GroupId");

                            b1.ToTable("ClassifierExample", (string)null);

                            b1.WithOwner()
                                .HasForeignKey("ClassifierId");

                            b1.HasOne("BankAccountLib.TransactionGroup", "Class")
                                .WithMany()
                                .HasForeignKey("GroupId")
                                .OnDelete(DeleteBehavior.Cascade);

                            b1.Navigation("Class");
                        });

                    b.Navigation("TrainingSamples");
                });

            modelBuilder.Entity("DomainLayer.Modules.Transactions.TransactionsProfile", b =>
                {
                    b.HasOne("BankAccountLib.Data_Objects.Entities.GroupingProfile", "_groupingProfile")
                        .WithOne()
                        .HasForeignKey("DomainLayer.Modules.Transactions.TransactionsProfile", "GroupingProfileId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebBackend.Account_Domain_Model.Data_Objects.User", null)
                        .WithOne()
                        .HasForeignKey("DomainLayer.Modules.Transactions.TransactionsProfile", "UserId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.OwnsMany("BankAccountLib.Transactions.Filter.ClassifiedTransaction", "_transactions", b1 =>
                        {
                            b1.Property<Guid>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("char(36)");

                            b1.Property<Guid?>("GroupId")
                                .HasColumnType("char(36)");

                            b1.Property<Guid>("TransactionsProfileId")
                                .HasColumnType("char(36)");

                            b1.Property<DateTime>("_classificationTimestamp")
                                .HasColumnType("datetime(6)")
                                .HasColumnName("Timestamp");

                            b1.HasKey("Id");

                            b1.HasIndex("GroupId");

                            b1.HasIndex("TransactionsProfileId");

                            b1.ToTable("UserTransaction", (string)null);

                            b1.HasOne("BankAccountLib.TransactionGroup", "_group")
                                .WithMany()
                                .HasForeignKey("GroupId")
                                .OnDelete(DeleteBehavior.Cascade);

                            b1.WithOwner()
                                .HasForeignKey("TransactionsProfileId");

                            b1.OwnsOne("BankAccountLib.TransactionData", "Data", b2 =>
                                {
                                    b2.Property<Guid>("ClassifiedTransactionId")
                                        .HasColumnType("char(36)");

                                    b2.Property<string>("AccountNumber")
                                        .HasColumnType("longtext");

                                    b2.Property<double>("Amount")
                                        .HasColumnType("double");

                                    b2.Property<string>("BankCode")
                                        .HasColumnType("longtext");

                                    b2.Property<DateTime>("BookingDate")
                                        .HasColumnType("datetime(6)");

                                    b2.Property<string>("BookingDescription")
                                        .HasColumnType("longtext");

                                    b2.Property<string>("Currency")
                                        .HasColumnType("longtext");

                                    b2.Property<string>("Info")
                                        .HasColumnType("longtext");

                                    b2.Property<string>("OrderAccount")
                                        .HasColumnType("longtext");

                                    b2.Property<string>("Purpose")
                                        .HasColumnType("longtext");

                                    b2.Property<string>("Target")
                                        .HasColumnType("longtext");

                                    b2.Property<DateTime>("ValueDate")
                                        .HasColumnType("datetime(6)");

                                    b2.HasKey("ClassifiedTransactionId");

                                    b2.ToTable("UserTransaction");

                                    b2.WithOwner()
                                        .HasForeignKey("ClassifiedTransactionId");
                                });

                            b1.Navigation("Data");

                            b1.Navigation("_group");
                        });

                    b.Navigation("_groupingProfile");

                    b.Navigation("_transactions");
                });

            modelBuilder.Entity("DomainLayer.Modules.UploadSupervisor.UploadManager", b =>
                {
                    b.HasOne("DomainLayer.Modules.Transactions.TransactionsProfile", "_transactionsProfile")
                        .WithOne()
                        .HasForeignKey("DomainLayer.Modules.UploadSupervisor.UploadManager", "TransactionsProfileId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebBackend.Account_Domain_Model.Data_Objects.User", null)
                        .WithOne()
                        .HasForeignKey("DomainLayer.Modules.UploadSupervisor.UploadManager", "UserId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.OwnsOne("DomainLayer.Modules.UploadSupervisor.UploadPreview", "_preview", b1 =>
                        {
                            b1.Property<Guid>("UploadManagerId")
                                .HasColumnType("char(36)");

                            b1.Property<string>("_file")
                                .HasColumnType("longtext")
                                .HasColumnName("File");

                            b1.HasKey("UploadManagerId");

                            b1.ToTable("UploadManager");

                            b1.WithOwner()
                                .HasForeignKey("UploadManagerId");
                        });

                    b.OwnsMany("DomainLayer.Modules.UploadSupervisor.VOs.UploadSummary", "History", b1 =>
                        {
                            b1.Property<Guid>("UploadManagerId")
                                .HasColumnType("char(36)");

                            b1.Property<int>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("int");

                            b1.Property<DateTime>("First")
                                .HasColumnType("datetime(6)");

                            b1.Property<DateTime>("FirstAdded")
                                .HasColumnType("datetime(6)");

                            b1.Property<DateTime>("Last")
                                .HasColumnType("datetime(6)");

                            b1.Property<DateTime>("LastAdded")
                                .HasColumnType("datetime(6)");

                            b1.Property<string>("Name")
                                .HasColumnType("longtext");

                            b1.Property<int>("Size")
                                .HasColumnType("int");

                            b1.Property<int>("UsefullCount")
                                .HasColumnType("int");

                            b1.HasKey("UploadManagerId", "Id");

                            b1.ToTable("UploadSummary");

                            b1.WithOwner()
                                .HasForeignKey("UploadManagerId");
                        });

                    b.Navigation("History");

                    b.Navigation("_preview");

                    b.Navigation("_transactionsProfile");
                });

            modelBuilder.Entity("BankAccountLib.Data_Objects.Entities.GroupingProfile", b =>
                {
                    b.Navigation("_classifier");

                    b.Navigation("_groups");
                });
#pragma warning restore 612, 618
        }
    }
}
