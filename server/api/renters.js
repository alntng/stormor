const router = require("express").Router();
const db = require("../db/index");
const { findRenter } = require("../../queries");

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await db.one("SELECT * FROM users where id = 1");
    console.log(allUsers);
    res.send(allUsers);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;
