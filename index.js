const express = require('express');
const bodyParser = require('body-parser');
const messenger = require('./messenger');
const app = express();

app.listen(8000, function () {
    console.log("Listening on port 8000");
});

app.use(express.static('assets'));
app.use(bodyParser.json());

let messageList = [{message: "Ciao bello!"}, {message: "Hello world!"}];

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messageList });
  
});

app.post('/messages', function (req, res, next) {
  messageList.push({message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messageList });
});


