import React from 'react'
import './styles/Info.css'
import Img1 from './imgs/Condicional.png'
import Img2 from './imgs/Bicondicional.png'
import img6 from './imgs/img6.png'
import img7 from './imgs/img7.png'
import img8 from './imgs/img8.png'
import img9 from './imgs/img9.png'
import img10 from './imgs/img10.png'
import img11 from './imgs/img11.png'

function ProposicionesCondicionales() {
    return (
        <section className="topic-container">
            <div className="container px-5">
                <div class="c-d-section mw-xl mx-auto mb-20 mb-xl-16 m-4">
                    <h3 class="text-light">Proposiciones / Condicionales y Equivalentes Lógicos</h3>
                    <ul class="list-section px-4 lh-lg">
                        <li class="list-item my-2">
                            Si p y q son proposiciones, la proposición '<b>si p entonces q</b>' se llama 
                            <b> proposición condicional</b> y se denota por: <img class="mx-2" src={img6}/><br/>
                            Donde p es la hipótesis (o antecedente) y q la conclusión (o consecuente).
                        </li>
                        <li class="list-item my-2">
                            Si p y q son proposiciones, la proposición
                            '<b>p si y sólo si q</b>'
                            se llama <b> proposición bicondicional</b> y se denota por: <img class="mx-2" src={img7}/>
                        </li>
                    </ul>
                </div>
                <h4 class="text-center text-light">Se definen por:</h4>
                <div class="image-grid-container my-3">
                    <div class="img-section mt-3">
                        <div class="img-header">
                            <b>Condicional </b>
                        </div>
                        <img class="pt-2" src={Img1}/>
                    </div>
                    <div class="img-section mt-3">
                        <div class="img-header">
                            <b>Bicondicional </b>
                        </div>
                        <img class="pt-2" src={Img2}/>
                    </div>
                </div>
                <h4 class="text-center text-light mt-5">Ejemplo:</h4>
                <div className="row mb-20 mb-xl-24 my-3">
                    <div class="col-10 col-md mb-8 text-dark lh-lg">
                        <div class="box-exp rounded h-100 px-md-10 p-4 my-3 mx-5">
                            <h4> <b>Condicional</b> </h4>
                            <p class="description text-light lh-lg mt-3">
                                Sea <br/> <img class="exp-img mx-3" src={img10} alt="" /><br/>
                                Donde <b>p es falsa</b> y <b>q es verdadera</b>, entonces:<br/>
                                <img class="exp-img mx-3" src={img11} alt="" />
                            </p>
                            <h4> <b>Bicondicional</b> </h4>
                            <p class="description text-light lh-lg mt-3">
                                La proposición <br/> <img class="exp-img mx-3" src={img8} alt="" /><br/>
                                donde <br/> <img class="exp-img mx-3" src={img9} alt="" /><br/>
                                es <b>verdadera</b> ya que <b>p y q</b> son verdaderas.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 class="text-light my-5">/ Ejercicios Resueltos</h2>
                <div className="row mb-20 mb-xl-24 mb-4 mx-3">
                    <div class="examples-section rounded h-100 px-md-10 mb-5">
                        <h4 class="text-light my-3">Simboliza las siguientes proposiciones:</h4>
                        <ul class="list-section px-4 lh-lg">
                            <li class="list-item my-2">
                                Si no estuvieras loca, no habrías venido aquí: <b class="text-light">¬ p → ¬ q</b>
                            </li>
                            <li class="list-item my-2">
                                Si hay verdadera democracia, entonces no hay detenciones arbitrarias ni otras 
                                violaciones de los derechos civiles: <b class="text-light">p → (¬ q ˄  ¬ r)</b>
                            </li>
                            <li class="list-item my-2">
                                Roberto hará el doctorado cuando y solamente cuando obtenga la licenciatura: <b class="text-light">p ↔ q</b>
                            </li>
                        </ul>
                    </div>

                    <div class="examples-section rounded h-100 px-md-10 mb-5">
                        <h4 class="text-light my-3">Enlaza cada proposición con su formalización:</h4>
                        <h6 class="text-light my-2">p = "Las estrellas emiten luz", q  = "Los planetas reflejan luz", r = "Los planetas giran alrededor de las estrellas"</h6>
                        <ul class="list-section px-4 lh-lg">
                            <li class="list-item">
                                Los planetas reflejan luz si y solo si las estrellas emiten luz: <b class="text-light">q ↔ p</b>
                            </li>
                            <li class="list-item">
                                Si no es cierto que las estrellas emiten luz y que los planetas la reflejan, entonces éstos no giran alrededor de ellas: <b class="text-light"> q ↔ (p ∧ r) </b>
                            </li>
                        </ul>
                    </div>

                    <div class="examples-section rounded h-100 px-md-10 mb-4">
                        <h4 class="text-light my-3">Determinar si la proposición es falsa o verdadera:</h4>
                        <h6 class="text-light my-2">p = falso (F), q = verdadera (V), r = falso (F)</h6>
                        <ul class="list-section px-4 lh-lg">
                            <li class="list-item mt-2">
                                (p → q) → r = <b class="text-light"> F </b> <br/> 
                                <p class="text-center mt-2">
                                    <i> Comenzamos operando lo que está entre parentesís, entonces <br/> ( p → q ) = V <br/> 
                                    Luego operamos el resultado con lo de afuera, teniendo que<br/> ( p → q ) → r = <b class="text-light"> F </b> </i>
                                </p>
                            </li>
                            <li class="list-item mb-2">
                                (p → q) ^ (q → r) = <b class="text-light"> V </b> <br/> 
                                <p class="text-center mt-2">
                                    <i> ( p → q ) = V <br/> ( q → r ) = F <br/>
                                    (p → q) ^ (q → r) = <b>F</b></i>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProposicionesCondicionales