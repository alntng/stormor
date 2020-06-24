-- DROP TABLE IF EXISTS upvotes;
DROP TABLE IF EXISTS renters,
owners,
units;

CREATE TABLE renters (
  id SERIAL PRIMARY KEY,
  renter_name VARCHAR(25) NOT NULL UNIQUE,
  user_password VARCHAR(64) NOT NULL,
  mail_address VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
);

CREATE TABLE owners (
  id SERIAL PRIMARY KEY,
  owner_name VARCHAR(25) NOT NULL UNIQUE,
  userpassword VARCHAR(64) NOT NULL,
  mailAddress VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
);

CREATE TABLE units (
  id SERIAL PRIMARY KEY,
  renter_id INTEGER REFERENCES renters(id) DEFAULT null,
  owner_id INTEGER REFERENCES owners(id) DEFAULT null,
  unit_length INTEGER DEFAULT 0,
  unit_width INTEGER DEFAULT 0,
  unit_name VARCHAR(255),
) -- CREATE TABLE transactions (
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER REFERENCES users(id) NOT NULL,
--   description varchar(255) NOT NULL,
--   amount INTEGER NOT NULL,
--   transaction_date TIMESTAMP DEFAULT NOW()
-- );
-- CREATE TABLE tags (
--   id SERIAL PRIMARY KEY,  tag_name VARCHAR(255) NOT NULL UNIQUE
-- );
-- CREATE TABLE tags_transactions (
--   tags_transactions_id SERIAL PRIMARY KEY,  transaction_id INTEGER REFERENCES transactions(id) NOT NULL,
--   tag_id INTEGER REFERENCES tags(id) NOT NULL
-- );
-- users
INSERT INTO
  users (name, email)
VALUES
  ('Alex', 'alex@email.com');

INSERT INTO
  users (name, email)
VALUES
  ('Nataly', 'nataly@email.com');

INSERT INTO
  users (name, email)
VALUES
  ('Hetty', 'hetty1336@example.com');

INSERT INTO
  users (name, email)
VALUES
  ('Alphard', 'apha@example.com');

INSERT INTO
  users (name, email)
VALUES
  ('Notransactions', 'none@example.com');

-- transactionsINSERT INTO transactions (user_id, description, amount) VALUES ((SELECT id FROM users WHERE name = 'Alex'), 'Just some chips', 150);
-- INSERT INTO transactions (user_id, description, amount) VALUES ((SELECT id FROM users WHERE name = 'Nataly'), 'The Switch', 35000);
-- INSERT INTO transactions (user_id, description, amount) VALUES ((SELECT id FROM users WHERE name = 'Alex'), 'Japan Village snacks', 2000);
