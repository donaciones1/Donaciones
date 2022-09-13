using Microsoft.EntityFrameworkCore.Migrations;

namespace Donaciones.Migrations
{
    public partial class cascade : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UsuarioOrganizaciones_Organizaciones_OrganizacionId",
                table: "UsuarioOrganizaciones");

            migrationBuilder.DropForeignKey(
                name: "FK_UsuarioOrganizaciones_Usuarios_UsuarioId",
                table: "UsuarioOrganizaciones");

            migrationBuilder.AddForeignKey(
                name: "FK_UsuarioOrganizaciones_Organizaciones_OrganizacionId",
                table: "UsuarioOrganizaciones",
                column: "OrganizacionId",
                principalTable: "Organizaciones",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_UsuarioOrganizaciones_Usuarios_UsuarioId",
                table: "UsuarioOrganizaciones",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UsuarioOrganizaciones_Organizaciones_OrganizacionId",
                table: "UsuarioOrganizaciones");

            migrationBuilder.DropForeignKey(
                name: "FK_UsuarioOrganizaciones_Usuarios_UsuarioId",
                table: "UsuarioOrganizaciones");

            migrationBuilder.AddForeignKey(
                name: "FK_UsuarioOrganizaciones_Organizaciones_OrganizacionId",
                table: "UsuarioOrganizaciones",
                column: "OrganizacionId",
                principalTable: "Organizaciones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UsuarioOrganizaciones_Usuarios_UsuarioId",
                table: "UsuarioOrganizaciones",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
