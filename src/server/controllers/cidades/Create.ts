import { Request,  Response } from "express";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares";
import { StatusCodes } from 'http-status-codes';


interface ICidade{
    nome:string;
   
}



export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(2)
  })),
}));



//1
export const create= async (req:Request<{},{},ICidade>,res:Response)=>{
   
console.log(req.body)


    return res.status(StatusCodes.CREATED).send('Não implementado!');
}
// *1 <{},{},ICidade> se colocar o mouse sobre req:Request vai aparecer vê que o terceiro campo do req é ŕeqBody


 