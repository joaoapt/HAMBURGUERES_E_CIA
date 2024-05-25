import { Link } from "react-router-dom";
import './index.scss';

export default function index() {
    return(
        
    <main className="tudo">
        <header>
            <h1 align="center">PEDIDOS</h1>
        </header>
            <div >
                <h4 className="sub-titulo">Pendentes</h4>
            </div>
            <div className="tabela1">
                <div className="numecon1">
                    
                    <p className="numeropedido1">Número de pedidos: 2#</p>
                    
                    <button> editar </button><br/><br/>
                    <button> remover </button><br/><br/>
                    <button> Concluir </button><br/><br/>
                </div>
            </div>

                
                <div className="d1">
                    <li>Hambúrgueres:</li>
                </div>
                <div className="d2">
                    <li>Bebidas:</li>
                </div>
                <div className="d3">
                    <li>Porções:</li>
                </div>
                <div className="d4">
                    <li>Sobremesa:</li>
                </div>

            <div className="mono">
               <Link className="botão" href="">adicionar CADASTRO</Link>
               <Link className="botão-1" href="">Voltar</Link>
            </div>
            <br/>
            <div>
                <div>
                    <h4 className="sub-titulo2">Concluídos</h4>
                </div>
                <div className="tabela2">
                    <div className="numecon2">
                        <p className="numeropedido2">Número do pedidos: 1#</p>
                        <button> remover </button>
                    </div>
                    <div className="p1">
                        <li>Hambúrgueres:</li>
                    </div>
                    <div className="p2">
                        <li>Bebidas:</li>
                    </div>
                    <div className="p3">
                        <li>Porções:</li>
                    </div>
                    <div className="p4">
                        <li>Sobremesa:</li>
                    </div>
                </div>
            </div>
      </main>
    )
}