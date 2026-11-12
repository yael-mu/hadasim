import express from 'express';

const routerGreet = express.Router()

routerGreet.get('/greet',(req,res)=>{
    res.json({ "msg": "Hello from /greet!" })
})

export default routerGreet;
