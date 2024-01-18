using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TechInsightAPI.Migrations
{
    public partial class fix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserClicks_Posts_PostId",
                table: "UserClicks");

            migrationBuilder.DropForeignKey(
                name: "FK_UserClicks_Users_UserId",
                table: "UserClicks");

            migrationBuilder.AddForeignKey(
                name: "FK_UserClicks_Posts_PostId",
                table: "UserClicks",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserClicks_Users_UserId",
                table: "UserClicks",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserClicks_Posts_PostId",
                table: "UserClicks");

            migrationBuilder.DropForeignKey(
                name: "FK_UserClicks_Users_UserId",
                table: "UserClicks");

            migrationBuilder.AddForeignKey(
                name: "FK_UserClicks_Posts_PostId",
                table: "UserClicks",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_UserClicks_Users_UserId",
                table: "UserClicks",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
