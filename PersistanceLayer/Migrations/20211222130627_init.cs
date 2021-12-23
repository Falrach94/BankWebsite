using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

namespace AggregateDatabase.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<byte[]>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TransactionsProfile",
                columns: table => new
                {
                    Id = table.Column<byte[]>(nullable: false),
                    UserId = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TransactionsProfile", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TransactionsProfile_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GroupingProfile",
                columns: table => new
                {
                    Id = table.Column<byte[]>(nullable: false),
                    GroupingProfileId = table.Column<byte[]>(nullable: true),
                    UserId = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GroupingProfile", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GroupingProfile_TransactionsProfile_GroupingProfileId",
                        column: x => x.GroupingProfileId,
                        principalTable: "TransactionsProfile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GroupingProfile_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Classifier",
                columns: table => new
                {
                    Id = table.Column<byte[]>(nullable: false),
                    FeatureSelection = table.Column<string>(nullable: true),
                    UpdateTimestamp = table.Column<DateTime>(nullable: false),
                    Extractor = table.Column<string>(nullable: true),
                    GroupingProfileId = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Classifier", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Classifier_GroupingProfile_GroupingProfileId",
                        column: x => x.GroupingProfileId,
                        principalTable: "GroupingProfile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Group",
                columns: table => new
                {
                    Id = table.Column<byte[]>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    GroupingProfileId = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Group", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Group_GroupingProfile_GroupingProfileId",
                        column: x => x.GroupingProfileId,
                        principalTable: "GroupingProfile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ClassifierExample",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Features = table.Column<string>(nullable: true),
                    GroupId = table.Column<byte[]>(nullable: true),
                    ClassifierId = table.Column<byte[]>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassifierExample", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClassifierExample_Classifier_ClassifierId",
                        column: x => x.ClassifierId,
                        principalTable: "Classifier",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClassifierExample_Group_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Group",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GroupExample",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    OrderAccount = table.Column<string>(nullable: true),
                    BookingDate = table.Column<DateTime>(nullable: false),
                    ValueDate = table.Column<DateTime>(nullable: false),
                    Purpose = table.Column<string>(nullable: true),
                    BookingDescription = table.Column<string>(nullable: true),
                    Target = table.Column<string>(nullable: true),
                    AccountNumber = table.Column<string>(nullable: true),
                    BankCode = table.Column<string>(nullable: true),
                    Amount = table.Column<double>(nullable: false),
                    Currency = table.Column<string>(nullable: true),
                    Info = table.Column<string>(nullable: true),
                    TransactionGroupId = table.Column<byte[]>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GroupExample", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GroupExample_Group_TransactionGroupId",
                        column: x => x.TransactionGroupId,
                        principalTable: "Group",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserTransaction",
                columns: table => new
                {
                    Id = table.Column<byte[]>(nullable: false),
                    Data_OrderAccount = table.Column<string>(nullable: true),
                    Data_BookingDate = table.Column<DateTime>(nullable: true),
                    Data_ValueDate = table.Column<DateTime>(nullable: true),
                    Data_Purpose = table.Column<string>(nullable: true),
                    Data_BookingDescription = table.Column<string>(nullable: true),
                    Data_Target = table.Column<string>(nullable: true),
                    Data_AccountNumber = table.Column<string>(nullable: true),
                    Data_BankCode = table.Column<string>(nullable: true),
                    Data_Amount = table.Column<double>(nullable: true),
                    Data_Currency = table.Column<string>(nullable: true),
                    Data_Info = table.Column<string>(nullable: true),
                    GroupId = table.Column<byte[]>(nullable: true),
                    TransactionsProfileId = table.Column<byte[]>(nullable: false),
                    Timestamp = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTransaction", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserTransaction_Group_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Group",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserTransaction_TransactionsProfile_TransactionsProfileId",
                        column: x => x.TransactionsProfileId,
                        principalTable: "TransactionsProfile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Classifier_GroupingProfileId",
                table: "Classifier",
                column: "GroupingProfileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClassifierExample_ClassifierId",
                table: "ClassifierExample",
                column: "ClassifierId");

            migrationBuilder.CreateIndex(
                name: "IX_ClassifierExample_GroupId",
                table: "ClassifierExample",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Group_GroupingProfileId",
                table: "Group",
                column: "GroupingProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_GroupExample_TransactionGroupId",
                table: "GroupExample",
                column: "TransactionGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_GroupingProfile_GroupingProfileId",
                table: "GroupingProfile",
                column: "GroupingProfileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_GroupingProfile_UserId",
                table: "GroupingProfile",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TransactionsProfile_UserId",
                table: "TransactionsProfile",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserTransaction_GroupId",
                table: "UserTransaction",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_UserTransaction_TransactionsProfileId",
                table: "UserTransaction",
                column: "TransactionsProfileId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClassifierExample");

            migrationBuilder.DropTable(
                name: "GroupExample");

            migrationBuilder.DropTable(
                name: "UserTransaction");

            migrationBuilder.DropTable(
                name: "Classifier");

            migrationBuilder.DropTable(
                name: "Group");

            migrationBuilder.DropTable(
                name: "GroupingProfile");

            migrationBuilder.DropTable(
                name: "TransactionsProfile");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
