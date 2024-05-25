import { inserirAnime,buscarAnime,buscarPorTodesAN  } from "../repository/animeRepositoty.js";

import { Router } from 'express'
const server = Router();


server.post('/anime', async (req, resp) =>{
    try{
        const novoAnime = req.body;

        if(!novoAnime.nome){
            throw new Error('nome do anime é OBRIGATORIO');
        }

        const animeInserir = await inserirAnime(novoAnime);
        resp.send(animeInserir)
    }
    catch(err){
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.get('/anime/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const busca = await buscarAnime(id);

        resp.send({anime:busca})
    } 
    catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
});

server.get('/anime/', async (req,resp) => {
    try {

        const buscar = await buscarPorTodesAN();

        resp.send({anime:buscar})
    } 
    catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
});

export default server;