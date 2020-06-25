-- DROP TABLE IF EXISTS upvotes;
DROP TABLE IF EXISTS users,owners,renters,
units;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(25) NOT NULL UNIQUE,
  user_password VARCHAR(64) NOT NULL,
  mail_address VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  is_owner BOOLEAN DEFAULT FALSE
);


CREATE TABLE units
(
  id SERIAL PRIMARY KEY,
  renter_id INTEGER REFERENCES users(id) DEFAULT null,
  owner_id INTEGER REFERENCES users(id),
  unit_length INTEGER DEFAULT 0,
  unit_width INTEGER DEFAULT 0,
  unit_name VARCHAR(255)
);

INSERT INTO
  users
  (
  user_name,
  user_password,
  mail_address,
  email,
  is_owner
  )
VALUES
  (
    'Alex',
    'dorohedoro',
    '123 FullStack Ave',
    'alex@email.com',
    FALSE
  );

INSERT INTO
  users
  (
  user_name,
  user_password,
  mail_address,
  email,
  is_owner
  )
VALUES
  (
    'Austin',
    'lastairbender',
    '456 Ba Sing Se Ave',
    'austin@email.com',
    FALSE
  );

INSERT INTO
  users
  (
  user_name,
  user_password,
  mail_address,
  email,
  is_owner
  )
VALUES
  (
    'Alan',
    'mykneeshurt',
    '123 Fake St',
    'alan@email.com',
    TRUE
  );

INSERT INTO
  units
  (
  renter_id,
  owner_id,
  unit_length,
  unit_width,
  unit_name
  )
VALUES
  (1, 3, 5, 10, 'Unit A1');

INSERT INTO
  units
  (
  renter_id,
  owner_id,
  unit_length,
  unit_width,
  unit_name
  )
VALUES
  (2, 3, 5, 10, 'Unit A2');

-- CREATE TABLE transactions (
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
-- transactionsINSERT INTO transactions (user_id, description, amount) VALUES ((SELECT id FROM users WHERE name = 'Alex'), 'Just some chips', 150);
-- INSERT INTO transactions (user_id, description, amount) VALUES ((SELECT id FROM users WHERE name = 'Nataly'), 'The Switch', 35000);
-- INSERT INTO transactions (user_id, description, amount) VALUES ((SELECT id FROM users WHERE name = 'Alex'), 'Japan Village snacks', 2000);
