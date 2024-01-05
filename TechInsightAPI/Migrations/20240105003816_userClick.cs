using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TechInsightAPI.Migrations
{
    public partial class userClick : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserClicks",
                table: "UserClicks");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "UserClicks",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("Relational:ColumnOrder", 2);

            migrationBuilder.AlterColumn<int>(
                name: "PostId",
                table: "UserClicks",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("Relational:ColumnOrder", 1);

            migrationBuilder.AddColumn<int>(
                name: "id",
                table: "UserClicks",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserClicks",
                table: "UserClicks",
                column: "id");

            migrationBuilder.CreateIndex(
                name: "IX_UserClicks_PostId",
                table: "UserClicks",
                column: "PostId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserClicks",
                table: "UserClicks");

            migrationBuilder.DropIndex(
                name: "IX_UserClicks_PostId",
                table: "UserClicks");

            migrationBuilder.DropColumn(
                name: "id",
                table: "UserClicks");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "UserClicks",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("Relational:ColumnOrder", 2);

            migrationBuilder.AlterColumn<int>(
                name: "PostId",
                table: "UserClicks",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("Relational:ColumnOrder", 1);

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserClicks",
                table: "UserClicks",
                columns: new[] { "PostId", "UserId" });
        }
    }
}
