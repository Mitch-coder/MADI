import React from 'react'
import './styles/Info.css'
import Connectors from './imgs/Connectors.png'
import Simbols from './imgs/Simbols.png'
import molecular from './imgs/molecular.png'
import Ejem1 from './imgs/ejem1.png'
import Ejem2 from './imgs/ejem2.png'
import Latex1 from './imgs/latex1.png'
import Latex2 from './imgs/latex2.png'
import Table1 from './imgs/table-1.png'
import Table2 from './imgs/table-2.png'
import Table3 from './imgs/table-3.png'
import Table4 from './imgs/table-4.png'
import Img1 from './imgs/Conjuncion.png'
import Img2 from './imgs/Disyuncion.png'
import Img3 from './imgs/Negacion.png'
import Img4 from './imgs/Condicional.png'
import Img5 from './imgs/Bicondicional.png'

function Logica() {
    return (
        <section className="topic-container">
            <div className="container px-5">
                <div class="mw-xl mx-auto mb-20 mb-xl-16 m-4">
                    <h3 class="text-light">Proposiciones y Operadores Lógicos / Conceptos Básicos</h3>
                    <p class="text p-3">
                        Una <b>proposición lógica</b> es una agrupación de términos de la que se puede afirmar si es <b>falso o verdadero</b>. Estas pueden ser atómicas o moleculares.
                    </p>
                </div>
                <div className="row mb-20 mb-xl-24 my-5">

                    <div className="col-12 col-md-6 px-xl-4 mb-8">
                        <div class="rounded h-100 bg-white py-12 px-6 px-md-16 p-3">
                            <h5 class="mt-6 lh-lg mb-3 font-heading">Proposición atómica</h5>
                            <p class="text-muted lh-lg">
                                Este tipo de proposición no puede descomponerse en partes que sean a su vez proposiciones.<br/>
                                Se simbolizan por letras minúsculas:<br/>
                                <img class="simbols-img" src={Simbols} alt="" /> <br/>
                                las cuales cada una de ellas es una variable proposicional.
                            </p>
                        </div>
                    </div>
                    
                    <div class="col-12 col-md-6 px-xl-4 mb-8">
                        <div class="rounded h-100 bg-white py-12 px-6 px-md-16 p-3">
                            <h5 class="mt-6 lh-lg mb-3 font-heading">Proposición Molecular</h5>
                            <p class="text-muted lh-lg">
                                Esta está formada por una o varias proposiciones atómicas enlazadas por conectores proposicionales, los cuales se usan para modificar o enlazar estas proposiciones. <br/>
                                <img class="molecular-img" src={molecular} alt="" />
                            </p>
                        </div>
                    </div>
                </div>

                <div class="mw-xl mx-auto mb-20 mb-xl-16 m-4">
                    <h3 class="text-light">Conectores Proposicionales (Operadores Lógicos)</h3>
                    <img class="connectors-img mt-3" src={Connectors} alt=""/>
                </div>
                <div className="row mb-20 mb-xl-24 my-2 lh-lg">
                    <h5 class="text">Se clasifican en:</h5>
                    <ul class="list-section px-4">
                        <li class="list-item my-2">
                            <b>Conectores monódicos: </b>
                            Se aplican a una sola proposición. Ej: Negación.
                        </li>
                        <li class="list-item my-2">
                            <b>Conectores diádicos: </b>
                            Se aplican a dos proposiciones. Ej: Conjunción, Disyunción, Disyunción Exclusiva, Condicional, Bicondicional.
                        </li>
                    </ul>
                    
                    <div class="col-10 col-md mb-8 text-dark lh-lg">
                        <div class="box-exp rounded h-100 py-12 px-md-10 p-4 mx-3">

                                <h4> <b>¿A qué se le llama Formula lógica?</b> </h4>
                                <p class="description text-light">
                                    Es una expresión simbólica que sustituye a una proposición molecular. <br/>
                                    Ejemplo: <br/>
                                </p>

                                <div class="mw-xl mx-auto mb-20 mb-xl-16 mb-5">
                                    <img class="exp-img mx-3" src={Ejem1} alt="" />
                                    <img class="exp-img mx-3" src={Ejem2} alt="" /> <br/>
                                </div>

                                <h4> <b> Valorar el valor lógico de una proposición (formula lógica) </b> </h4>
                                <div class="mw-xl mx-auto mb-20 mb-xl-16">
                                    <p class="description text-light m-0">
                                        Averiguar la falsedad o veracidad de la misma. <br/>
                                        Considerando el ejemplo anterior:<br/>
                                    </p>
                                    <p class="description text-black-50">
                                        Si está lloviendo (es decir, p es verdadera) o si hace frío (es decir, q es
                                        verdadera) o ambas, entonces se consideraría que la proposición <br/>
                                        <img class="exp-img mx-3" src={Ejem2} alt="" /> <br/>
                                        es <b>verdadera</b>.
                                    </p>
                                </div>
                        </div>
                    </div>

                    <div class="mw-xl mx-auto mb-20 mb-xl-16 m-5">
                        <h3 class="text-light">¿Qué es el Algebra de Proposiciones?</h3>
                        <p class="description text">
                            Es la construcción de fórmulas lógicas y estudio de su veracidad o falsedad, así también como de sus propiedades.
                        </p>
                        <h5 class="text-light">Características:</h5>
                        <ul class="list-section px-4">
                            <li class="list-item my-2">
                                <b>Toda proposición es verdadera o falsa. </b>
                            </li>
                            <li class="list-item my-2">
                                <b>Una formula lógica representa una proposición cuyo valor de verdad o falsedad depende de los conectores y los valores de verdad o falsedad de las variables que la contienen.</b>
                            </li>
                            <li class="list-item my-2">
                                <b>Los valores de verdad o falsedad de las fórmulas lógicas se establecen en tablas llamadas tablas de verdad.</b>
                            </li>
                        </ul>
                    </div>

                    <div class="mw-xl mx-auto mb-20 mb-xl-16">
                        <h3 class="text-light">Tablas de Verdad</h3>
                        <p class="tables-section p-3 rounded text-dark bg-white my-4">
                            Es la representación de todas las combinaciones posibles de falsedad o veracidad de una proposición atómica o molecular. <br/>
                            Contiene <img class="mx-2" src={Latex1} alt=""/> filas, siendo <img class="mx-2" src={Latex2} alt=""/> la cantidad de variables de la proposición molecular.
                        </p>
                        <h5 class="text">Ejemplos:</h5>
                        <div class="image-grid-container mt-3">
                            <div class="img-section">
                                <div class="img-header">
                                    <b>n = 1 </b>
                                </div>
                                <img class="mt-3" src={Table2}/>
                            </div>
                            <div class="img-section">
                                <div class="img-header">
                                    <b>n = 3 </b>
                                </div>
                                <img class="mt-3" src={Table3}/>
                            </div>
                        </div>

                    </div>

                    <div class="mw-xl mx-auto mb-20 mb-xl-16 m-5">
                        <h3 class="text-light">Valores de Verdad de los Operadores Lógicos</h3>
                        <div class="image-grid-container mt-3">
                            <div class="img-section mt-3">
                                <div class="img-header">
                                    <b>Conjunción </b>
                                </div>
                                <img class="" src={Img1}/>
                            </div>
                            <div class="img-section mt-3">
                                <div class="img-header">
                                    <b>Disyunción </b>
                                </div>
                                <img class="" src={Img2}/>
                            </div>
                            <div class="img-section mt-3">
                                <div class="img-header">
                                    <b>Condicional </b>
                                </div>
                                <img class="" src={Img4}/>
                            </div>
                            <div class="img-section mt-3">
                                <div class="img-header">
                                    <b>Bicondicional </b>
                                </div>
                                <img class="" src={Img5}/>
                            </div>
                        </div>
                        <div class="img-section mt-3">
                            <div class="img-header">
                                <b>Negación </b>
                            </div>
                            <img class="" src={Img3}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logica