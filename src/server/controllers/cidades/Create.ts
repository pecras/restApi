import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares";


interface ICidade{
    nome:string;
    cidade:string;
}

interface IFilter{
    filter?:string;
}

const queryvalidation :yup.Schema<IFilter> = yup.object().shape({
    filter: yup.string().required().min(3)
   
})

//2
const bodyvalidation:yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    cidade: yup.string().required().min(3),
})


export const createValidation = validation('query',queryvalidation)
export const createBodyValidation= validation('body',bodyvalidation)

//1
export const create= async (req:Request<{},{},ICidade>,res:Response)=>{
   
console.log(req.body)

    return res.send('Create!')
}
// *1 <{},{},ICidade> se colocar o mouse sobre req:Request vai aparecer vê que o terceiro campo do req é ŕeqBody


 