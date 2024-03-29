import { Router } from "express";


import { CidadesController } from "./../controllers";

const router=Router()
router.get('/',(_,res)=>{
    return res.send('Olá Dev')
})

router.post('/cidades',
CidadesController.createBodyValidation,
CidadesController.createValidation,
CidadesController.create)

export {router}