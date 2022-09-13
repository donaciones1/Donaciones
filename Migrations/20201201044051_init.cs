using Microsoft.EntityFrameworkCore.Migrations;

namespace Donaciones.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Estados",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estados", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: true),
                    Apellido = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Organizaciones",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: true),
                    Descripcion = table.Column<string>(nullable: true),
                    ContactoId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Organizaciones", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Organizaciones_Usuarios_ContactoId",
                        column: x => x.ContactoId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DonacionSolicitudes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Titulo = table.Column<string>(nullable: true),
                    Observacion = table.Column<string>(nullable: true),
                    CantidadFin = table.Column<int>(nullable: false),
                    OrganizacionId = table.Column<int>(nullable: true),
                    OwnerId = table.Column<int>(nullable: true),
                    EstadoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonacionSolicitudes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DonacionSolicitudes_Estados_EstadoId",
                        column: x => x.EstadoId,
                        principalTable: "Estados",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DonacionSolicitudes_Organizaciones_OrganizacionId",
                        column: x => x.OrganizacionId,
                        principalTable: "Organizaciones",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_DonacionSolicitudes_Usuarios_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "Usuarios",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "UsuarioOrganizaciones",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UsuarioId = table.Column<int>(nullable: false),
                    OrganizacionId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsuarioOrganizaciones", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UsuarioOrganizaciones_Organizaciones_OrganizacionId",
                        column: x => x.OrganizacionId,
                        principalTable: "Organizaciones",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UsuarioOrganizaciones_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Donaciones",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Observacion = table.Column<string>(nullable: true),
                    Cantidad = table.Column<int>(nullable: false),
                    DonacionSolicitudId = table.Column<int>(nullable: false),
                    DonanteId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Donaciones", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Donaciones_DonacionSolicitudes_DonacionSolicitudId",
                        column: x => x.DonacionSolicitudId,
                        principalTable: "DonacionSolicitudes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Donaciones_Usuarios_DonanteId",
                        column: x => x.DonanteId,
                        principalTable: "Usuarios",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Donaciones_DonacionSolicitudId",
                table: "Donaciones",
                column: "DonacionSolicitudId");

            migrationBuilder.CreateIndex(
                name: "IX_Donaciones_DonanteId",
                table: "Donaciones",
                column: "DonanteId");

            migrationBuilder.CreateIndex(
                name: "IX_DonacionSolicitudes_EstadoId",
                table: "DonacionSolicitudes",
                column: "EstadoId");

            migrationBuilder.CreateIndex(
                name: "IX_DonacionSolicitudes_OrganizacionId",
                table: "DonacionSolicitudes",
                column: "OrganizacionId");

            migrationBuilder.CreateIndex(
                name: "IX_DonacionSolicitudes_OwnerId",
                table: "DonacionSolicitudes",
                column: "OwnerId");

            migrationBuilder.CreateIndex(
                name: "IX_Organizaciones_ContactoId",
                table: "Organizaciones",
                column: "ContactoId");

            migrationBuilder.CreateIndex(
                name: "IX_UsuarioOrganizaciones_OrganizacionId",
                table: "UsuarioOrganizaciones",
                column: "OrganizacionId");

            migrationBuilder.CreateIndex(
                name: "IX_UsuarioOrganizaciones_UsuarioId",
                table: "UsuarioOrganizaciones",
                column: "UsuarioId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Donaciones");

            migrationBuilder.DropTable(
                name: "UsuarioOrganizaciones");

            migrationBuilder.DropTable(
                name: "DonacionSolicitudes");

            migrationBuilder.DropTable(
                name: "Estados");

            migrationBuilder.DropTable(
                name: "Organizaciones");

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
