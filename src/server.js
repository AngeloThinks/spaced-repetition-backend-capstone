require('dotenv').config()
const pg = require('pg');
const knex = require('knex')
const app = require('./app')
const { PORT, DB_URL } = require('./config')
pg.defaults.ssl = true;


const db = knex({
  client: 'pg',
  connection: DB_URL,
})

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
