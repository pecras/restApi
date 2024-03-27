import { Router } from "express";
import {

	StatusCodes,

} from 'http-status-codes';

const router=Router()

router.post('/cueca/:roupas',(req,res)=>{
console.log(req.body)
console.log(req.params.roupas)

    return res.json('cueca')
})

router.get('/',(_,res)=>{
    return res.send('Olá Dev')
})

router.get('/cueca',(req,res)=>{
    console.log(req.body)
    console.log(req.query.teste)
    
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('cueca')
    })

export {router}