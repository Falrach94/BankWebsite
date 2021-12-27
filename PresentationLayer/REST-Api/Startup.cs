using AggregateDatabase;
using AggregateDatabase.Repositories;
using ApplicationLayer;
using ApplicationLayer.Services;
using ApplicationLayer.Services.Implementations;
using DomainLayer.Repositories;
using BankAccountLib.Repositories;
using Microsoft.AspNetCore.Authentication.Certificate;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Graph;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebBackend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            /*
            services.AddAuthentication(CertificateAuthenticationDefaults.AuthenticationScheme)
                    .AddCertificate()
                    .AddCertificateCache();*/

            services.AddLogging();
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                                   builder =>
                                   {
                                       builder.AllowAnyOrigin()
                                            .AllowAnyMethod()
                                            .AllowAnyHeader();
                                   });
            });
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebBackend", Version = "v1" });
            });

            
            services.AddDbContext<DatabaseContext>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IGroupingProfileRepository, GroupingProfileRepository>();
            services.AddScoped<ITransactionsProfileRepository, TransactionsProfileRepository>();
            services.AddScoped<IUploadHistoryRepository, UploadHistoryRepository>();
            services.AddScoped<ITransactionsService, TransactionsService>();
            services.AddScoped<IGroupingService, GroupingService>();
            services.AddScoped<IAccountService, AccountService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
         //   app.UseAuthentication();

            if (env.IsDevelopment())
            {
                //app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebBackend v1"));
            }
            app.UseExceptionHandler("/error");
            
            //app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CorsPolicy");
            //app.UseCors();
            

            //app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
