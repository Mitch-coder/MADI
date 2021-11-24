import React from 'react'
import './styles/Info.css'
import Img1 from './imgs/Conjuncion.png'
import Img2 from './imgs/Disyuncion.png'
import Ejem1 from './imgs/img1.png'
import Ejem2 from './imgs/img2.png'
import Img3 from './imgs/Negacion.png'
import Img4 from './imgs/img3.png'
import Img5 from './imgs/img4.png'
import Img6 from './imgs/img5.png'

function Proposiciones() {
    return (
        <section className="topic-container">
            <div className="container px-5">
                <div class="c-d-section mw-xl mx-auto mb-20 mb-xl-16 m-4">
                    <h3 class="text-light">Proposiciones / Conjunción y Disyunción</h3>
                    <p class="text p-3 lh-lg">
                        Los valores de verdad de las proposiciones, tales como conjunciones o disyunciones,
                        se pueden describir por las <b>tablas de verdad</b>.<br/>
                        Se usa una tabla de verdad
                        para dar la definición formal de los valores de verdad de <b>p ∧ q</b>.
                    </p>
                </div>
                <h5 class="text-center text-light">Se definen por:</h5>
                <div class="image-grid-container my-3">
                    <div class="img-section mt-3">
                        <div class="img-header">
                            <b>Conjunción </b>
                        </div>
                        <img class="pt-2" src={Img1}/>
                    </div>
                    <div class="img-section mt-3">
                        <div class="img-header">
                            <b>Disyunción </b>
                        </div>
                        <img class="pt-2" src={Img2}/>
                    </div>
                </div>
                <h5 class="text-center text-light mt-5">Ejemplos:</h5>
                <div className="row mb-20 mb-xl-24 my-4">
                    <div class="col-10 col-md mb-8 text-dark lh-lg">
                        <div class="box-exp rounded h-100 px-md-10 p-4 my-3 mx-5">
                            <h4> <b>Conjunción</b> </h4>
                            <p class="description text-light lh-lg mt-3">
                                Si <img class="exp-img mx-3" src={Ejem1} alt="" /><br/>
                                Entonces p es verdadera, q es falsa y la conjunción
                                <b> p ∧ q</b>: Una década tiene 10 años y un milenio tiene 100 años<br/>
                                es <b>falsa</b>.
                            </p>
                            <h4> <b>Disyunción</b> </h4>
                            <p class="description text-light lh-lg mt-3">
                                Si está lloviendo (p es verdadera) o si hace frío (q es
                                verdadera) o ambas, entonces se consideraría que la proposición
                                <img class="exp-img mx-3" src={Ejem2} alt="" /><br/>
                                es <b>verdadera</b>.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mw-xl mx-auto mb-20 mb-xl-16 m-5">
                    <h3 class="text-light">/ La Negación</h3>
                </div>
                <h5 class="text-center text-light">Definida por:</h5>
                <div class="img-section my-3">
                    <img class="" src={Img3}/>
                </div>
                <p class="text p-3 mx-5 lh-lg mb-0">
                    Se utiliza para decir "No ocurre que". <br/> Ejemplo:<br/>
                </p>
                <div className="row mb-20 mb-xl-24 mb-4">
                    <div class="col-10 col-md mb-8 text-dark lh-lg">
                        <div class="box-exp rounded h-100 px-md-10 p-4 mb-3 mx-5">
                            <img class="exp-img my-3" src={Img4} alt="" /><br/>
                            la negación de <b>p</b> se escribe como:<br/>
                            <img class="exp-img my-3" src={Img5} alt="" /><br/>
                            O <br/>
                            <img class="exp-img my-3" src={Img6} alt="" />
                        </div>
                    </div>
                </div>
                <h2 class="text-light my-5">/ Ejercicios Resueltos</h2>
            </div>
        </section>
    )
}

export default Proposiciones