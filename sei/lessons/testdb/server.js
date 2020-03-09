const express = require('express');
const mongoose = require('mongoose');
const DB = require('./db');
const app = express();
app.use(express.json());
const mongoURI = 'mongodb://localhost:27017/sei';
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('the connection with mongod is ESTABLISHED');
  }
);
console.log('===== HERE WE START =====');
console.log('DB:', DB);
// DB => Student or Car
app.post('/create/student', (req, res) => {
    console.log(req.body);
    //          {name : req.body.name  ....}
    DB.Student.create(req.body, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    });
  });
  app.post('/student-name/car', (req, res) => {
    console.log(req.body);
    //          {name : req.body.name  ....}
    DB.Student.create(req.body.car, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        res.send(result);
      });
  });
console.log('===== HERE WE END =====');
const PROT = 5000;
app.listen(PROT, () => {
  console.log(`LISTENING to http://localhost:${PROT}`);
});
