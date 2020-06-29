const findUserByEmail = "SELECT * FROM users WHERE users.email = $1";

const createNewUser =
  "INSERT INTO TABLE users (email, password) VALUES ($1, $2)";

module.exports = {
  findUserByEmail,
  createNewUser,
};
