import { Link } from "react-router-dom";
import './index.scss';

export default function index(){
    return(
            <main className="home">
                    <div>
                    <div className="retangolo">
                    <Link className="botão" to='/login'>Login</Link>
                    <div>
                        <img className="png" src='./images/logoHambúguer.png' alt="" />
                    </div>
                    <h1 className="titulo-1">ESCOLHA COM SABEDORIA</h1>
                    <div className="logo2">
                        <img className="logo" src='./images/logoHambúguer.png' alt=""/><br/>
                        <p class="ecia"> HAMBÚRGUERES E CIA </p>
                        <p class="amelhor"> A melhor hamburgueria </p>
                        <img class="estrelas-2" src='/image/estrela.jpg' alt=""/> <br/><br/>
                    </div>
                    </div>
                    <div className="big-mãe">
                    <br><br><br>
                    <h1 className="titulo"> Cardápio de Hambúrgueres </h1>
                    </br></br></br>
                    <div className="hamburger">
                        <div className="tres">
                            <div className="n1">
                                <img src='/image/n1.jpg' alt=""/>
                                <div className="numeros"> N°1 </div>
                                <hr/>
                                <div> </div>
                                <div> Mega typeburguer </div>
                                <div> R$ 34,90 </div>
                            </div>
                            <div className="n2">
                                <img src='/image/n2.jpg' alt=""/>
                                <div className="numeros"> N°2 </div>
                                <hr/>
                                <div> </div>
                                <div> Mega bacon </div>
                                <div> R$ 20,00 </div>
                            </div>
                            <div className="n3">
                                <img src='/image/n3.jpg' alt=""/>
                                <div className="numeros"> N°3 </div>
                                <hr/>
                                <div> </div>
                                <div> Hambúrguer tripla 
                                    <br/> carne 
                                </div>
                                <div> R$ 27,00 </div>
                            </div>
                        </div>
                        <div className="seis">
                            <div className="n4">
                                <img src='/image/n4.jpg' alt=""/>
                                <div class="numeros"> N°4 </div>
                                <hr/>
                                <div> </div>
                                <div> Burguer Kid </div>
                                <div> R$ 18,00 </div>
                            </div>
                            <div className="n5">
                                <img src='/image/n5.jpeg' alt=""/>
                                <div className="numeros"> N°5 </div>
                                <hr/>
                                <div> </div>
                                <div> Burguer picanha 
                                <br/> dupla </div>
                                <div> R$ 23,90 </div>
                            </div>
                            <div className="n6">
                                <img src='/image/n6.jpg' alt=""/>
                                <div className="numeros"> N°6 </div>
                                <hr/>
                                <div> </div>
                                <div> Cheddar Burguer </div>
                                <div> R$ 20,00 </div>
                            </div>
                        </div>
                        <div className="nove">
                            <div className="n7">
                                <img src='/image/n7.jpg' alt=""/>
                                <div className="numeros"> N°7 </div>
                                <hr/>
                                <div> </div>
                                <div> Burguer Cia </div>
                                <div> R$ 25,00 </div>
                            </div>
                            <div className="n8">
                                <img src='/image/n8.jpg' alt=""/>
                                <div className="numeros"> N°8 </div>
                                <hr/>
                                <div> </div>
                                <div>  Vegan Burguer </div>
                                <div> R$ 25,00 </div>
                            </div>
                            <div className="n9">
                                <img src='/image/n9.jpg' alt=""/>
                                <div className="numeros"> N°9 </div>
                                <hr/>
                                <div> </div>
                                <div> Burguer Simple </div>
                                <div>  R$ 15,00 </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <h1 class="titulo2"> Cardápio de Bebidas </h1>
                    <br/><br/><br/><br/><br/>
                    <div className="doze">
                        <div className="n9">
                            <img src='/image/n10.jpg' alt=""/>
                            <div className="numeros"> N°10 </div>
                            <hr/>
                            <div> </div>
                            <div>  Refrigerante 2L </div>
                            <div>  R$ 13,90 </div>
                        </div>
                        <div className="n10">
                            <img src='/image/n10.jpg' alt=""/>
                            <div className="numeros"> N°11 </div>
                            <hr/>
                            <div> </div>
                            <div>  Refrigerante 1,5L </div>
                            <div>  R$ 10,45 </div>
                        </div>
                        <div className="n11">
                            <img src='/image/n10.jpg' alt=""/>
                            <div className="numeros"> N°12 </div>
                            <hr/>
                            <div> </div>
                            <div> Refrigerante 1L </div>
                            <div> R$ 8,00 </div>
                        </div>
                    </div>
        
                    <div className="quinze">
                        <div className="n12">
                            <img src='/image/n14e15.jpg' alt=""/>
                            <div className="numeros"> N°13 </div>
                            <hr/>
                            <div> </div>
                            <div> Sucos Variados 1L </div>
                            <div> R$ 10,00 </div>
                        </div>
                        <div className="n13">
                            <img src='/image/n14e15.jpg' alt=""/>
                            <div className="numeros"> N°14 </div>
                            <hr/>
                            <div> </div>
                            <div> Sucos Variados
                                <br/> 500ml </div>
                            <div> R$ 7,00 </div>
                        </div>
                        <div className="n14">
                            <img src='/image/n16.jpg' alt=""/>
                            <div className="numeros"> N°15 </div>
                            <hr/>
                            <div> </div>
                            <div>  Budweiser <br/>
                                750ml </div>
                            <div> R$ 11,00 </div>
                        </div>
                    </div>
                    <br/>
                    <h1 className="titulo3"> Cardápio de Porções </h1>
                    <br/><br/><br/><br/><br/>
                    <div className="dezoito">
                        <div className="n15">
                            <img src='/image/n17.jpg' alt=""/>
                            <div className="numeros"> N°16 </div>
                            <hr/>
                            <div> </div>
                            <div> Batata frita <br/>
                                comum </div>
                            <div> R$ 9,00 </div>
                        </div>
                        <div className="n16">
                            <img src='/image/n18.jpg' alt=""/>
                            <div className="numeros"> N°17 </div>
                            <hr/>
                            <div> </div>
                            <div> Batata frita c/ 
                                <br/> cheddar e bacon </div>
                            <div> R$ 15,00 </div>
                        </div>
                        <div className="n17">
                            <img src='/image/n19.jpg' alt=""/>
                            <div className="numeros"> N°18 </div>
                            <hr/>
                            <div> </div>
                            <div> Cebola Empanada </div>
                            <div> R$ 12,90 </div>
                        </div>
                    </div>
                    <div className="vinteum">
                    <div classclassName="n18">
                            <img src='/image/n20.jpg' alt=""/>
                            <div class="numeros"> N°19 </div>
                            <hr/>
                            <div> </div>
                            <div>  Calabresa </div>
                            <div>  R$ 6,50 </div>
                        </div>
                        <div className="n19">
                            <img src='/image/n21.jpg' alt=""/>
                            <div className="numeros"> N°20 </div>
                            <hr/>
                            <div> </div>
                            <div> Camarão </div>
                            <div> R$ 12,00 </div>
                        </div>
                        <div className="n20">
                            <img src='/image/n22.jpg' alt=""/>
                            <div className="numeros"> N°21 </div>
                            <hr/>
                            <div> </div>
                            <div> Carne </div>
                            <div> R$ 8,00 </div>
                        </div>
                        </div>
                    <br/>
                    <h1 className="titulo4"> Cardápio de Sobremesas </h1>
                    <br/><br/><br/><br/>
                    <div className="vintequatro">
                        <div className="n21">
                            <img src='/image/n23.jpg' alt=""/>
                            <div className="numeros"> N°22</div>
                            <hr/>
                            <div> </div>
                            <div> Paçoca Recheada </div>
                            <div> R$ 12,00 </div>
                        </div>
                        <div className="n22">
                            <img  src='/image/n24.jpg' alt=""/>
                            <div className="numeros"> N°23</div>
                            <hr/>
                            <div> </div>
                            <div> Mini churros </div>
                            <div> R$ 5,00 </div>
                        </div>
                        <div className="n23">
                            <img src='/image/n25.jpg' alt=""/>
                            <div className="numeros"> N°24</div>
                            <hr/>
                            <div> </div>
                            <div>  Mousse de Maracujá </div>
                            <div> R$ 8,50 </div>
                        </div>
                    </div>
        
                    <div className="vintesete">
                        <div className="n24">
                            <img src='/image/n26.jpg' alt=""/>
                            <div className="numeros"> N°25</div>
                            <hr/>
                            <div> </div>
                            <div> Bolo de churros </div>
                            <div> R$ 10,00 </div>
                        </div>
                        <div className="n25">
                            <img src='/image/n27.jpg' alt=""/>
                            <div className="numeros"> N°26</div>
                            <hr/>
                            <div> </div>
                            <div>  Torta de Limão </div>
                            <div> R$ 6,00 </div>
                        </div>
                        <div className="n26">
                            <img src='/image/n28.jpg' alt=""/>
                            <div className="numeros"> N°27</div>
                            <hr/>
                            <div> </div>
                            <div>Bomba de Chocolate </div>
                            <div> R$ 4,50 
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="bloco"> 
                    <h1 className="Contato"> CONTATO </h1>
                    <div className="fixo"> 
                        <p className="t1"> FIXO: 5698-5236 </p>
                        <p className="t2"> CELULAR: 11 0000000000  </p>
                    </div>
                    <div className="hambúrguer"> 
                        <img className="estrelas" src='/image/estrela.jpg' alt=""/> 
                    </div>
                    <div className="baixo"> 
                        <img className="whatsapp" src='' alt=""/> 
                        <img className="telegram" src='' alt=""/>
                        <p className="t3"> Trabalhamos na Zona Sul de São Paulo </p>
                        <img className="uber" src='' alt=""/> 
                        <img className="ifood" src='' alt=""/> 
                    </div>
                    </div>
                </div>
        </main>
    )
}