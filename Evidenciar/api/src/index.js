import 'dotenv/config'

import cors from 'cors'
import express from 'express'

import usuarioController from './controller/usuarioController.js';
import cadastroController from './controller/cadastroController.js';
import pedidoController from './controller/pedidoController.js';

const server = express();
server.use(cors());
server.use(express.json());

server.use(usuarioController);     
server.use(cadastroController);
server.use(pedidoController);


server.listen(process.env.PORT, () => console.log(`API Conectada na Porta ${process.env.PORT}`));

