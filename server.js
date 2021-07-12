require('dotenv').config();
const Express = require('express');
const app = new Express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { getChallenges, postChallenge } = require('./backend/db.js');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(Express.static('public'))

app.post('/api/login', (req, res) => {
  console.log('Received login request');
  res.sendStatus(200);
});

app.get('/api/challenges', (req, res) => {
  console.log('Challenges requested.');
  getChallenges(req, res);
})

app.post('/api/challenge', (req, res) => {
  console.log('Body: ', req.body);
  postChallenge(req.body);
  res.sendStatus(200);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});