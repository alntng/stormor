-- DROP TABLE IF EXISTS upvotes;
DROP TABLE IF EXISTS users, transactions, tags, tags_transactions;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

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
INSERT INTO users (name, email) VALUES ('Alex', 'alex@email.com');
INSERT INTO users (name, email) VALUES ('Nataly', 'nataly@email.com');        
INSERT INTO users (name, email) VALUES ('Hetty', 'hetty1336@example.com');    
INSERT INTO users (name, email) VALUES ('Alphard', 'apha@example.com');       
INSERT INTO users (name, email) VALUES ('Notransactions', 'none@example.com');

-- transactionsINSERT INTO transactions (user_id, description, amount) VALUES ((SELECT id FROM users WHERE name = 'Alex'), 'Just some chips', 150);
-- INSERT INTO transactions (user_id, description, amount) VALUES ((SELECT id FROM users WHERE name = 'Nataly'), 'The Switch', 35000);
-- INSERT INTO transactions (user_id, description, amount) VALUES ((SELECT id FROM users WHERE name = 'Alex'), 'Japan Village snacks', 2000);