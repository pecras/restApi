import { StatusCodes } from "http-status-codes"
import { testServer } from "../jest.setup"




describe('Cidades - Create',() => {

    it('Criar registro', async () =>{
        const res1 = await testServer
   
        .post('/cidades')
        .send({nome:'Caixas do Sul' , estado:'RS'})   




        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof res1.body).toEqual('object')
    } );

    it('Não aceitar menos de dois caractéres ', async () =>{
        const res1 = await testServer
   
        .post('/cidades')
        .send({nome:'Ca'})   




        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('errors.body.nome')
    } );


    it('A resposta deve ser Obrigatória ', async () =>{
        const res1 = await testServer
   
        .post('/cidades')
        .send({estado:'1'})   




        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('errors.body.estado')
    } );



})