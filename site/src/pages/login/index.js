
import { Link } from "react-router-dom";
import './index.scss';

export default function index() {
    return(
   <main className="login">     
        <br/>
            <h1 className="">LOGIN EMPRESARIAL</h1>
            <div className="retangulo-1">
                <br/>
                <p className="titulo2"> E-MAIL EMPRESARIAL </p>
       
                  <input className="campo" type="text" />
                 <br/> <br/>
                <p className="titulo2"> SENHA</p>
                
                 <input className="campo" type="text" />
    
                <br/> <br/>
    
                <Link className="botão" href="/home">Voltar</Link>
               
                <Link className="botão" href="/pendentes">Próximo</Link>
            </div>
    </main>
 )
}