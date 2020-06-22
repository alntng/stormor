const pgp = require("pg-promise")();
const pkg = require("../../package.json");

// const databaseName =
// pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");
const databaseName = "stormor";

// const db = pgp(
//   process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`
// );

const db = pgp(`postgres://localhost:5432/${databaseName}`);

module.exports = db;

if (process.env.NODE_ENV === "test") {
  after("close database connection", () => db.close());
}
