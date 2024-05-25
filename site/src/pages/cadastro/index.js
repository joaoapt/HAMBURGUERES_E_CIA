import './index.scss';

export default function index() {
    return(
        <main>
        <h1> CADASTRO </h1>
            <br/>
        
        <div>
            <div className="informaçoes">
            
            <p> Nome Completo </p>
            
            <input class="campo" type="text"/>
            
            <br/> <br/> <br/>
            
            <p className="espaço-2">Telefone/Celular </p>
            <p> Rua</p> 
            
            <input class="campo-2" type="text"/>
            
            <input className="campo-7" type="text"/>
            
            <br/> <br/>
            
            <p className="espaço">Bairro </p><p> Complemento</p>
            
            <input className="campo-2" type="text"/>
            
            <input className="campo-7" type="text"/>
            
            <br/> <br/>
            
            <p>Número Residencial </p>   
            
            <input className="campo-4" type="text"/>
            </div>
            <div>
            <p className="espaço">Hambúrgueres </p>
            <p> Bebidas</p>
            <p>Calculadora</p>
            
            <textarea className="campo-3" type="text"></textarea>

            <textarea className="campo-6" type="text"></textarea>

            <textarea className="campo-5" type="text"></textarea>
            
            <br/>
            
            <p className="espaço-1">Porções</p><p className="espaço-1">Sobremesa</p> 
                  <p className="espaço-1">Resposta</p>
            <br/>
            </div>
            <div className="textarea">     
                <textarea className="campo-9" type="text"></textarea>
            
                <textarea class="campo-8" type="text"></textarea>
                
                <textarea class="campo-10" type="text"></textarea>
            </div>
        </div>
        <br/>
        <a class="botão" href="../pendencias/index.html">Voltar</a>
        <button class="botão" href="">Resetar</button>
        <button class="botão" href=""> Salvar </button>
    </main> 


    )
}