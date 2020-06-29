const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require("./db");
const PORT = process.env.PORT || 3000;
const renter = require("./api/renters");
const session = require("express-session");
const passport = require("passport");

const devApp = async () => {
  app.use(morgan("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // app.use("/api", require("./api"));

  app.use("/api", renter);

  app.use(express.static(path.join(__dirname, "..", "public")));

  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });

  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
  });

  // const syncData = () => db.sync();

  const startListening = () => {
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  };

  // await syncData();

  startListening();
};

devApp();
