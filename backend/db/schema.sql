DROP TABLE IF EXISTS recipe CASCADE;
DROP TABLE IF EXISTS ingredient CASCADE;
DROP TABLE IF EXISTS instructions CASCADE;


CREATE TABLE recipe (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image VARCHAR(255),
  instructions TEXT,
  created TIMESTAMPTZ
);

CREATE TABLE ingredient (
  id SERIAL PRIMARY KEY,
  recipe_id INT REFERENCES recipe(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  amount VARCHAR(255)
);

