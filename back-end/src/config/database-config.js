const { Pool} = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'bankdatabase.cvpnvftsrtvf.us-east-2.rds.amazonaws.com',
  database: 'bankdb',
  password: 'mich0119',
  port: 5432,
})
const jwtConfig = 'thomassecret'

export {
    pool,
    jwtConfig
}