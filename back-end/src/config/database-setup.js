import {pool} from './database-config'

// const test = async()=>{
// try{
//     await pool.query(`CREATE TABLE IF NOT EXISTS users(
//         id  SERIAL PRIMARY KEY,
//         "firstName" VARCHAR(64) NOT NULL,
//         "lastName" VARCHAR(64) NOT NULL,
//         "userName" VARCHAR(64) NOT NULL,
//         "password" VARCHAR(64) NOT NULL`
//         )
    
    
    // const res = await pool.query(`INSERT INTO users(\"firstName\",\"lastName\",\"userName\",\"password\")
    // VALUES($1,$2,$3,$4) RETURNING *`,
    // ['Thomas','Huang','Thomas.huang@live.ca','123']
    // )
    
//     console.log(res.rows[0])
//     const resTwo = pool.query(`SELECT * FROM users`)
//     console.log(resTwo)
//     pool.end();
    

// }catch(erorr){
//     console.log(error)
// }
// }

// pool.query(`CREATE TABLE IF NOT EXISTS users(
//     id  SERIAL PRIMARY KEY,
//     "firstName" VARCHAR(64) NOT NULL,
//     "lastName" VARCHAR(64) NOT NULL,
//     "userName" VARCHAR(64) NOT NULL,
//     "password" VARCHAR(64) NOT NULL);`, (err, res) => {
//     console.log(err, res)
//     pool.end()
// })

// const insert = async()=>{
//     try{
//     pool.query(`INSERT INTO users(\"firstName\",\"lastName\",\"userName\",\"password\")
//     VALUES($1,$2,$3,$4) RETURNING *`,
//     ['Thomas','Huang','Thomas.huang@live.ca','123']
//     )
        
//     }catch(error){
//         console.log(error)
//     }
// }



pool.query('SELECT * FROM users', (err, res) => {
    console.log(err, res)
    pool.end()
})