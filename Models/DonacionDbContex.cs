using Microsoft.EntityFrameworkCore;

namespace Donaciones.Models
{
    public partial class DonacionDbContex : DbContext
    {
        public DbSet<Estado> Estados { get; set; }
        public DbSet<Organizacion> Organizaciones { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Donacion> Donaciones { get; set; }
        public DbSet<DonacionSolicitud> DonacionSolicitudes { get; set; }
        public DbSet<UsuarioOrganizacion> UsuarioOrganizaciones { get; set; }

        //public DbSet<DonacionSolicitudItem> DonacionSolicitudItems { get; set; }
        //public DbSet<DonacionItem> DonacionItems { get; set; } ///


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            base.OnModelCreating(modelBuilder);
            modelBuilder.Ignore<Base>();
            modelBuilder.Entity<Donacion>().HasOne(d => d.Donante).WithMany().OnDelete(DeleteBehavior.NoAction);
            
            modelBuilder.Entity<UsuarioOrganizacion>()
            .HasOne<Organizacion>(o => o.Organizacion)
            .WithMany(p => p.UsuarioOrganizaciones)
            .HasForeignKey(ap => ap.OrganizacionId)
            .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<UsuarioOrganizacion>()
            .HasOne<Usuario>(ap => ap.Usuario)
            .WithMany(a => a.UsuarioOrganizaciones)
            .HasForeignKey(ap => ap.UsuarioId)
            .OnDelete(DeleteBehavior.NoAction);
        }


        public DonacionDbContex()
        {
        }

        public DonacionDbContex(DbContextOptions<DonacionDbContex> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, 
                //you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 
                //for guidance on storing connection strings.
                
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=Donaciones;user=sa;password=Password_123; ");
            }
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
