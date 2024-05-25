import { cadastro } from '../repository/cadastroRepository.js'

import { Router } from 'express';
const server = Router();

server.post('/cadastro', async(req,resp) => {
    try {
        const cadastre = req.body;

        
        const concluido = await cadastro(cadastre);
        resp.send(concluido);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;