use infoDanimeDB;

INSERT INTO tb_usuario (id_usuario,ds_email, ds_senha)
     VALUES (1,'admin@admin.com.br', '1234');


-- login
select id_usuario 		id,
       ds_email			email,
       ds_senha         senha
  from tb_usuario
 where ds_email 		= 'admin@admin.com.br'
   and ds_senha			= '1234';



-- adicionar anime
INSERT INTO tb_anime (nm_anime)
     VALUES ('Dragon ball');

select id_anime      id,
		nm_anime	nome
        from tb_anime;