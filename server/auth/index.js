const router = require("express").Router();
const db = require("../db");
const sqlQueries = require("../../queries");

router.post("/login", async (req, res, next) => {
  try {
    const { findRenterByEmail, createNewRenter } = sqlQueries;
    const { email, password } = req.body;

    let renter = await db.any(findRenterByEmail, [email]);

    // pgp returns an array of objects, and if only finding one row, there will be one element as an object
    // if no row matches query, pgp returns an empty array
    if (!renter.length) {
      console.log("no renter found", email);
      res.status(401).send("Wrong email or password");
    } else if (renter.password) {
      console.log("incorrect password");
      res.status(401).send("Wrong email or password");
    } else {
      res.send("good to go");
    }

    const userData = user[0];

    res.json(userData);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
