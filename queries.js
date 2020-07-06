const findUserByEmail = "SELECT * FROM users WHERE users.email = $1";

const createNewUser =
  "INSERT INTO users (user_name, user_password, mail_address, email, is_owner) VALUES ($1, $2, $3, $4, $5) RETURNING *";

module.exports = {
  findUserByEmail,
  createNewUser,
};
