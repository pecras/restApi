import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'

interface ICidade{
    nome:string;
    cidade:string;
}
//2
const bodyvalidation:yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    cidade: yup.string().required().min(3),
})




//1
export const create= async (req:Request<{},{},ICidade>,res:Response)=>{
   

let validatedData:ICidade | undefined=undefined
try {
    validatedData = await bodyvalidation.validate(req.body,{abortEarly:false}); //3
} catch (error) {
    const yupError = error as yup.ValidationError
 const errors:Record<string, string>={};


 yupError.inner.forEach(error => {
    if(!error.path) return
    errors[error.path ]= error.message
 })

    return res.status(StatusCodes.BAD_REQUEST).json({
        errors
    })

}

     console.log(validatedData)

    return res.send('Create!')
}
// *1 <{},{},ICidade> se colocar o mouse sobre req:Request vai aparecer vê que o terceiro campo do req é ŕeqBody

 /* *2 const data:ICiade=req.body é o mesmo que colocar <{},{},ICidade>
    validaçao de prática ruim pq são muitos if 
    if (req.body.nome === undefined) {
        return res.status(StatusCodes.BAD_REQUEST).send('Inform o atributo nome ')
    }else if (req.body.nome.length<3){
        return res.status(StatusCodes.BAD_REQUEST).send(' atributo deve ser maior que 3 ')
   }*/

   // *3 abortEarly:false traz quantos erros a api tiver  