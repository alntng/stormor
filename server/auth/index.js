const router = require("express").Router();
const db = require("../db");
const sqlQueries = require("../../queries");

router.post("/login", async (req, res, next) => {
  try {
    const { findUserByEmail } = sqlQueries;
    const { email, password } = req.body;
    console.log("user email", email, password);
    let user = await db.any(findUserByEmail, [email]);
    console.log("=======");
    console.log("the user", user[0]);
    console.log("=======");

    // pgp returns an array of objects, and if only finding one row, there will be one element as an object
    // if no row matches query, pgp returns an empty array
    if (!user.length) {
      console.log("no user found by sql query, user.length is 0", email);
      res.status(401).send("Wrong email or password");
    } else if (user[0].user_password !== password) {
      console.log("incorrect password");
      res.status(401).send("Wrong email or password");
    } else {
      console.log("trying to log in =================================");
      req.login(user, (err) => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { createNewUser } = sqlQueries;
    const { username, password, mailAddress, email, isOwner } = req.body;

    const user = await db.one(createNewUser, [
      username,
      password,
      mailAddress,
      email,
      isOwner,
    ]);
    // req.login(user, (err) => (err ? next(err) : res.json(user)));
    res.json(user);
  } catch (err) {
    const errorDetail = err.detail;
    // error detail looks like: "Key (email)=(alex@email.com) already exists." when trying to sign up with duplicate email
    // need to somehow relate errorDetail to the if-statement below to handle a duplicate sign up
    if (err.detail === "Key (email)=(alex@email.com) already exists.") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.post("/logout", async (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.get("/me", (req, res) => {
  console.log(req);
  res.json(req.user);
});

module.exports = router;
