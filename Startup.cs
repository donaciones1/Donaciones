using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Donaciones.Models;
using Microsoft.EntityFrameworkCore;
using Donaciones.Repository;

namespace Donaciones
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
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                });
            });

            services.AddDbContext<DonacionDbContex>
            (
                o => o.UseSqlServer(
                    Configuration.GetConnectionString("DonacionesConnectionString")
                )
            );

            services.AddScoped<DonacionRepository<DonacionDbContex>, DonacionRepository<DonacionDbContex>>();
            services.AddScoped<DonacionSolicitudRepository<DonacionDbContex>, DonacionSolicitudRepository<DonacionDbContex>>();
            services.AddScoped<IRepository<Organizacion>, OrganizacionRepository<DonacionDbContex>>();
            services.AddScoped<IRepository<Usuario>, UsuarioRepository<DonacionDbContex>>();
            services.AddScoped<IRepository<Estado>, EFRepository<Estado, DonacionDbContex>>();

            services.AddOpenApiDocument(configure =>
            { configure.Title="API Cine";
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseOpenApi();
                app.UseSwaggerUi3();
            }

            app.UseRouting();

            app.UseAuthorization();
            app.UseCors();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

        }
    }
}
