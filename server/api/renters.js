const router = require("express").Router();
const db = require("../db/index");

router.use("/", async (req, res, next) => {
  try {
    const allUsers = await db.one("SELECT * FROM renters where id = 1");
    res.send(allUsers);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;
