

CREATE DATABASE storefront;

USE storefront;

CREATE TABLE products (
  id INT PRIMARY KEY
);

CREATE TABLE questions (
  id INT PRIMARY KEY,
  product_id INT,
  body TEXT,
  date_written DATETIME,
  asker_name VARCHAR(255),
  asker_email VARCHAR(255),
  reported BOOLEAN NOT NULL DEFAULT FALSE,
  helpful INT DEFAULT 0,
  FOREIGN KEY (product_id) REFERENCES products (id)
);

CREATE TABLE answers (
  id INT PRIMARY KEY,
  question_id INT,
  body TEXT,
  date_written DATETIME,
  answerer_name VARCHAR(255),
  answerer_email VARCHAR(255),
  reported BOOLEAN NOT NULL DEFAULT FALSE,
  helpful INT DEFAULT 0,
  FOREIGN KEY (question_id) REFERENCES questions (id)
);

CREATE TABLE answers_photos (
  id INT PRIMARY KEY,
  answer_id INT,
  url TEXT,
  FOREIGN KEY (answer_id) REFERENCES answers (id)
);