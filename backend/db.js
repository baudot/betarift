const { Pool } = require('pg');
var pool;

if (process.env.ENVIRONMENT === 'dev') {
  pool = new Pool({
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DBDATABASE,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT
  });
} else {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
}

const getChallenges = (req, res) => {
  pool
  .query('select * from challenges')
  .then((dbRes) => {
      console.log(dbRes.rows);
      res.send(dbRes.rows);
  })
  .catch((error) => {
    console.log('Error on db test', error.stack);
    res.sendStatus(500);
  });
};

const postChallenge = ({name, email, point_level, scenario, notes}) => {
  let query = 'insert into challenges (challenger, email, scenario, point_level, notes) values ($1, $2, $3, $4, $5)'
  let values = [name, email, scenario, point_level, notes];

  pool
    .query(query, values)
    .then(res => console.log('Inserted!'))
    .catch(e => console.log('Error on db test insert', e.stack));
};

module.exports.getChallenges = getChallenges;
module.exports.postChallenge = postChallenge;
