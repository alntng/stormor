require("dotenv").config(); // need this line to be able to access process.env properties that are defined in .env file
// found at root of project

const pgp = require("pg-promise")();
const pkg = require("../../package.json");

// const databaseName =
// pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");
const databaseName = "stormor";

// const db = pgp(
//   process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`
// );

// const db = pgp({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

const db = pgp(`postgres://localhost:5432/stormor`);

module.exports = db;

if (process.env.NODE_ENV === "test") {
  after("close database connection", () => db.close());
}
