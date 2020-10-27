import express from 'express'
import cors from 'cors'
import {accountRouter} from '../router/account'
const app = express()
const port = process.env.PORT || 3000
// makes sure that we take in input from localhost 4200
app.use(cors({origin:'http://localhost:4200'}))
app.use(express.json())
app.use(accountRouter)



app.listen(port,()=>{
    console.log('Server is up!')
})

module.exports=app