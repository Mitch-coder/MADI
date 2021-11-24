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
                <h5 class="text-center text-light">Se definen por:</h5>
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
                <h5 class="text-center text-light mt-5">Ejemplos:</h5>
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
            </div>
        </section>
    )
}

export default ProposicionesCondicionales