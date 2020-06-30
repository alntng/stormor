const router = require("express").Router();
const db = require("../db/index");
const { findUserByEmail } = require("../../queries");

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await db.one("SELECT * FROM users where id = 1");
    console.log(allUsers);
    console.log("is someone signed in?", req.user);
    res.send(allUsers);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;
