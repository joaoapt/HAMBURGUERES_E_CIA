import { con } from './connection.js'

export async function pedidos() {
    const comando =
        `SELECT id_cadastro		     id,
                qtd_hamburgueres     hamburgueres, 
                qtd_bebidas          bebidas,
                qtd_porcoes          porcoes, 
                qtd_sobremesas        sobremesa, 
                nm_cliente           cliente,
                ds_rua               rua, 
                ds_bairro            bairro, 
                ds_complmento        complemento, 
                ds_nr                nr
           FROM tb_cadastro`;
    
    const [linhas] = await con.query(comando);
    return linhas;
}