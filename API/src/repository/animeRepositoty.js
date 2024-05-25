import { con } from './connection.js';

export async function inserirAnime(anime) {
    const comando =
    `
     INSERT INTO tb_anime (nm_anime)
                  VALUES (?) `
    const [resposta] = await con.query(comando,[anime.nome]); 
    return resposta;
}

export async function buscarAnime(id) {
  const comando =
      `
      SELECT id_anime		id,
             nm_anime		nome
      FROM   tb_anime
      WHERE  id_anime = ? `;
  const [linhas] = await con.query(comando, [id]);
  return linhas[0];
}

export async function buscarPorTodesAN() {
  const comando =
      ` 
      select * 
      from tb_anime`;
  const [linhas] = await con.query(comando);
  return linhas;
}