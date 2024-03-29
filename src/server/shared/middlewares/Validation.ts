import { RequestHandler } from "express"
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from "yup"


  // *3 abortEarly:false traz quantos erros a api tiver  

   // 4 RequestHandler: vem do express e ele me retorna o body da minha função de requisição 
   type TProperty = 'body' | 'header' | 'params' | 'query';
   
   // pega todos os schemas 
   type TAllSchemas = Record<TProperty, Schema<any>>;
// pega um schema por vez
   type TGetSchema = <T>(schema: Schema<T>) => Schema<T>

   // aqui ela trasforma o Tgetschema em uma Parte do TAllSchemas 
   type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation =(getAllSchemas:TGetAllSchemas)=> RequestHandler

export const validation:TValidation=(getAllSchemas)=> async(req,res,next)=>{
    const errorsResult: Record<string, Record<string, string>> = {};
const schemas=getAllSchemas((schema)=>schema)
Object.entries(schemas).forEach(([key, schema])=>{


    

    try {
       schema.validateSync(req[key as TProperty], {abortEarly:false});
        return next();
    } catch (err) {
        const yupError = err as ValidationError
        const errors: Record<string,string>={};
    
    
        yupError.inner.forEach(error=>{
            if (!error.path) return;
            errors[error.path]= error.message
                
            
        })
        errorsResult[key] = errors;
    
}
})


if (Object.entries(errorsResult).length === 0) {
    return next();
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
  }
}



