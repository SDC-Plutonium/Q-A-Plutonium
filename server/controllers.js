const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "127.0.0.1",
  database: "storefront",
  password: "postgres",
  port: 5432,
});

client.connect(function (err) {
  if (err) throw err;
  console.log("Database is Connected");
});

exports.getQuestions = (req, res) => {
  let product_id = req.body.product_id;
  let page = req.body.page - 1 || 0;
  let count = req.body.count || 5;
  let offset = page * count;
  let values = [product_id, count, offset];
  let text =
    "SELECT * FROM questions WHERE product_id = $1 ORDER BY helpful DESC, id ASC LIMIT $2 OFFSET $3";
  client.query(text, values, (err, result) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.status(200).send(result.rows);
    }
  });
};

exports.getAnswers = (req, res) => {
  let question_id = req.params.question_id;
  let page = req.body.page - 1 || 0;
  let count = req.body.count || 5;
  let offset = page * count;
  let values = [question_id, count, offset];
  let text =
    "SELECT * FROM answers WHERE question_id = $1 ORDER BY helpful DESC, id ASC LIMIT $2 OFFSET $3";
  client.query(text, values, (err, result) => {
    if (err) {
      res.status(501).end();
    } else {
      res.status(200).send(result.rows);
    }
  });
};

exports.addQuestion = (req, res) => {
  let { product_id, body, name, email } = req.body;
  let date_written = Date.now();
  let values = [product_id, date_written, body, name, email];
  let text =
    "INSERT INTO questions (product_id, date_written, body, asker_name, asker_email, reported, helpful) VALUES ($1,$2,$3,$4,$5,false,0)";
  console.log(values);
  console.log(text);
  client.query(text, values, (err, result) => {
    if (err) {
      res.status(501).end();
    } else {
      res.status(201).send("Question Added");
    }
  });
};

exports.addAnswer = (req, res) => {
  let question_id = req.params.question_id;
  let body = req.body.body;
  let name = req.body.name;
  let email = req.body.email;
  let date_written = Date.now();
  let photos = req.body.photos || [];
  let values = [question_id, date_written, body, name, email];
  let text =
    "INSERT INTO answers (question_id, date_written, body, answerer_name, answerer_email, reported, helpful) VALUES ($1,$2,$3,$4,$5,false,0)";
  client.query(text, values, (err, result) => {
    if (err) {
      res.status(501).end;
    } else {
      res.status(200).send("Answer Added");
    }
  });
};

exports.markQuestionHelpful = (req, res) => {
  let question_id = req.params.question_id;
  let values = [question_id];
  let text = "UPDATE questions SET helpful = helpful + 1 WHERE id = $1";
  client.query(text, values, (err, result) => {
    if (err) {
      res.status(501).end();
    } else {
      res.status(204).end();
    }
  });
};

exports.reportQuestion = (req, res) => {
  let question_id = req.params.question_id;
  let values = [question_id];
  let text = "UPDATE questions SET reported = true WHERE id = $1";
  client.query(text, values, (err, result) => {
    if (err) {
      res.status(501).end();
    } else {
      res.status(204).end();
    }
  });
};

exports.markAnswerHelpful = (req, res) => {
  let answer_id = req.params.answer_id;
  let values = [answer_id];
  let text = "UPDATE answers SET helpful = helpful + 1 where id = $1";
  client.query(text, values, (err, result) => {
    if (err) {
      res.status(501).end();
    } else {
      res.status(204).end();
    }
  });
};

exports.reportAnswer = (req, res) => {
  let answer_id = req.params.answer_id;
  let values = [answer_id];
  let text = "UPDATE answers SET reported = true WHERE id = $1";
  client.query(text, values, (err, result) => {
    if (err) {
      res.status(501).end();
    } else {
      res.status(204).end();
    }
  });
};
