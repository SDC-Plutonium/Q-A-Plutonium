exports.getQuestions = (req, res) => {
  if (err) {
    res.status(501).end();
    return;
  }
  // DB QUERY GOES HERE
};

exports.getAnswers = (req, res) => {
  console.log(req.query.page);
  res.send(req);
  return;
};

exports.addQuestion = (req, res) => {
  if (err) {
    res.status(501).end();
    return;
  }
  // DB QUERY GOES HERE
};

exports.addAnswer = (req, res) => {
  if (err) {
    res.status(501).end();
    return;
  }
  // DB QUERY GOES HERE
};

exports.markQuestionHelpful = (req, res) => {
  if (err) {
    res.status(501).end();
    return;
  }
  // DB QUERY GOES HERE
};

exports.reportQuestion = (req, res) => {
  if (err) {
    res.status(501).end();
    return;
  }
  // DB QUERY GOES HERE
};

exports.markAnswerHelpful = (req, res) => {
  if (err) {
    res.status(501).end();
    return;
  }
  // DB QUERY GOES HERE
};

exports.reportAnswer = (req, res) => {
  if (err) {
    res.status(501).end();
    return;
  }
  // DB QUERY GOES HERE
};

// app.get("/qa/questions", controllers.getQuestions);

// app.get(`/qa/questions/${question_id}/answers`, controllers.getAnswers);

// app.post("/qa/questions", controllers.addQuestion);

// app.post(`/qa/questions/${question_id}/answers`, controllers.addAnswer);

// app.put(`/qa/questions/${question_id}/helpful`, controller.markQuestionHelpful);

// app.put(`/qa/questions/${question_id}/report`, controller.reportQuestion);

// app.put(`/qa/questions/${answer_id}/helpful`, controller.markAnswerHelpful);

// app.put(`/qa/questions/${answer_id}/report`, controller.reportQuestion);
