import { con } from './connection.js'

export async function cadastro(pedido){
    const comando = 
        `  insert into tb_cadastro (ds_telefone, nm_cliente, ds_rua, ds_bairro, ds_complmento, ds_nr, qtd_hamburgueres, qtd_bebidas, qtd_porcoes, qtd_sobremesas, txt_total )
        values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    
    const [resposta] = await con.query(comando, [pedido.telefone, pedido.cliente,pedido.rua,pedido.bairro,pedido.complmento,pedido.nr,pedido.hamburgueres,pedido.bebidas,pedido.porcoes,pedido.sobremesas,pedido.total]);
    pedido.id = resposta.insertId;

    return pedido;
}
