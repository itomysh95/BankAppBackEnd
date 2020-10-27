import express from 'express'
const router = new express.Router();
router.use(express.json())

router.post('/account',async(req,res)=>{
    try{
        console.log('request recieved')
        res.status(201).send({
            ...req.body
        })
    }catch(error){
        res.status(400).send(error)
    }
})


export {router as accountRouter}