DROP DATABASE IF EXISTS storefront;

CREATE DATABASE storefront;

\c storefront;

CREATE TABLE product (
  id INT PRIMARY KEY,
  name TEXT,
  slogan TEXT,
  description TEXT,
  category TEXT,
  default_price INT
);

CREATE TABLE questions (
  id INT PRIMARY KEY,
  product_id INT,
  body TEXT,
  date_written BIGINT,
  asker_name VARCHAR(255),
  asker_email VARCHAR(255),
  reported BOOLEAN NOT NULL DEFAULT FALSE,
  helpful INT DEFAULT 0,
  FOREIGN KEY (product_id) REFERENCES product (id)
);

CREATE TABLE answers (
  id INT PRIMARY KEY,
  question_id INT,
  body TEXT,
  date_written BIGINT,
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

COPY product(id,name,slogan,description,category,default_price)
FROM '/home/clathen/Hack-Reactor/Q-A-Plutonium/server/product.csv'
DELIMITER','
CSV HEADER;

COPY questions(id,product_id,body,date_written,asker_name,asker_email,reported,helpful)
FROM '/home/clathen/Hack-Reactor/Q-A-Plutonium/server/questions.csv'
DELIMITER','
CSV HEADER;

COPY answers(id,question_id,body,date_written,answerer_name,answerer_email,reported,helpful)
FROM '/home/clathen/Hack-Reactor/Q-A-Plutonium/server/answers.csv'
DELIMITER','
CSV HEADER;

COPY answers_photos(id,answer_id,url)
FROM '/home/clathen/Hack-Reactor/Q-A-Plutonium/server/answers_photos.csv'
DELIMITER','
CSV HEADER;