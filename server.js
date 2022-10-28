const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
  // res.sendFile("__dirname/")
})

app.post("/", (req, res) => {
  let weight = req.body.weight / 2.20462;
  let height = req.body.height / 39.3701;
  let result = weight / (height*height);
  result = Math.round(result * 100) / 100;
  res.send(`Your BMI is: ${result}`);
});