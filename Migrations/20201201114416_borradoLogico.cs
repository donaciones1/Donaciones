using Microsoft.EntityFrameworkCore.Migrations;

namespace Donaciones.Migrations
{
    public partial class borradoLogico : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DonacionSolicitudes_Organizaciones_OrganizacionId",
                table: "DonacionSolicitudes");

            migrationBuilder.DropForeignKey(
                name: "FK_DonacionSolicitudes_Usuarios_OwnerId",
                table: "DonacionSolicitudes");

            migrationBuilder.AddColumn<bool>(
                name: "EstaActivo",
                table: "Usuarios",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "EstaActivo",
                table: "Organizaciones",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddForeignKey(
                name: "FK_DonacionSolicitudes_Organizaciones_OrganizacionId",
                table: "DonacionSolicitudes",
                column: "OrganizacionId",
                principalTable: "Organizaciones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_DonacionSolicitudes_Usuarios_OwnerId",
                table: "DonacionSolicitudes",
                column: "OwnerId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DonacionSolicitudes_Organizaciones_OrganizacionId",
                table: "DonacionSolicitudes");

            migrationBuilder.DropForeignKey(
                name: "FK_DonacionSolicitudes_Usuarios_OwnerId",
                table: "DonacionSolicitudes");

            migrationBuilder.DropColumn(
                name: "EstaActivo",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "EstaActivo",
                table: "Organizaciones");

            migrationBuilder.AddForeignKey(
                name: "FK_DonacionSolicitudes_Organizaciones_OrganizacionId",
                table: "DonacionSolicitudes",
                column: "OrganizacionId",
                principalTable: "Organizaciones",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DonacionSolicitudes_Usuarios_OwnerId",
                table: "DonacionSolicitudes",
                column: "OwnerId",
                principalTable: "Usuarios",
                principalColumn: "Id");
        }
    }
}
