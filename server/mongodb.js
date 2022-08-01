const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/storefront");

const productSchema = new mongoose.Schema({
  id: Number,
});

const questionSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  body: String,
  date_written: Date,
  asker_name: String,
  asker_email: String,
  reported: Boolean,
  helpful: Number,
});

const answerSchema = new mongoose.Schema({
  id: Number,
  question_id: Number,
  body: String,
  date_written: Date,
  answerer_name: String,
  answerer_email: String,
  reported: Boolean,
  helpful: Number,
});

const answerPhotoSchema = new mongoose.Schema({
  id: Number,
  answer_id: Number,
  url: String,
});
