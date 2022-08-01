/* eslint-disable no-console */
const express = require("express");
const path = require("path");
const compression = require("compression");
const controllers = require("./controllers.js");
require("dotenv").config();

const app = express();
app.use(compression());

app.use(
  express.static(path.join(__dirname, "../client/public"), {
    setHeaders: function (res, path, stat) {
      res.set("Cache-Control", "max-age=31536000");
    },
  })
);

app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

app.get("/qa/questions", controllers.getQuestions);

app.get("/qa/questions/:question_id/answers", controllers.getAnswers);

app.post("/qa/questions", controllers.addQuestion);

app.post("/qa/questions/:question_id/answers", controllers.addAnswer);

app.put("/qa/questions/:question_id}/helpful", controllers.markQuestionHelpful);

app.put("/qa/questions/:question_id/report", controllers.reportQuestion);

app.put("/qa/questions/:answer_id/helpful", controllers.markAnswerHelpful);

app.put("/qa/questions/:answer_id/report", controllers.reportQuestion);
