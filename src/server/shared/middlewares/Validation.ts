import { RequestHandler } from "express"
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from "yup"


  // *3 abortEarly:false traz quantos erros a api tiver  

   // 4 RequestHandler: vem do express e ele me retorna o body da minha função de requisição 


type TValidation =(field:'body'|'header'|'params'|'query',scheme:Schema<any>)=> RequestHandler

export const validation:TValidation=(field,scheme)=> async(req,res,next)=>{
try {
    await  scheme.validate(req[field], {abortEarly:false});
    return next();
} catch (err) {
    const yupError = err as ValidationError
    const errors: Record<string,string>={};


    yupError.inner.forEach(error=>{
        if (!error.path) return;
        errors[error.path]= error.message
            
        
    })


    return res.status(StatusCodes.BAD_REQUEST).json({errors})
}



}