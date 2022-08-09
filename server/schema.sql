DROP DATABASE IF EXISTS storefront;

CREATE DATABASE storefront;

\c storefront;

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name TEXT,
  slogan TEXT,
  description TEXT,
  category TEXT,
  default_price INT
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
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
  id SERIAL PRIMARY KEY,
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
  id SERIAL PRIMARY KEY,
  answer_id INT,
  url TEXT,
  FOREIGN KEY (answer_id) REFERENCES answers (id)
);

COPY product(id,name,slogan,description,category,default_price)
FROM '/home/clathen/sdc-csv-files/product.csv'
DELIMITER','
CSV HEADER;

COPY questions(id,product_id,body,date_written,asker_name,asker_email,reported,helpful)
FROM '/home/clathen/sdc-csv-files/questions.csv'
DELIMITER','
CSV HEADER;

COPY answers(id,question_id,body,date_written,answerer_name,answerer_email,reported,helpful)
FROM '/home/clathen/sdc-csv-files/answers.csv'
DELIMITER','
CSV HEADER;

COPY answers_photos(id,answer_id,url)
FROM '/home/clathen/sdc-csv-files/answers_photos.csv'
DELIMITER','
CSV HEADER;

SELECT SETVAL('questions_id_seq', (select MAX(ID) from questions));

SELECT SETVAL('answers_id_seq', (select MAX(ID) from answers));

SELECT SETVAL('answers_photos_id_seq', (select MAX(ID) from answers_photos));

CREATE INDEX questions_id_index ON questions (product_id);

CREATE INDEX answers_id_index ON answers (question_id);

CREATE INDEX answers_photos_id_index ON answers_photos (answer_id);