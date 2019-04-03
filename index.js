const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const generateTalk = require('./generator_talk');

const port = 3000;


app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(` express port is ${port}`);
});


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/', (req, res) => {
  const option = req.body;
  const word = generateTalk(req.body);
  res.render('index', { option: option, word: word });
})