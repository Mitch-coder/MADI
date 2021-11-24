import React from 'react'
import './styles/Info.css'
import Respuesta1 from './imgs/imgsCuantificadoresAnidados/Respuesta1.PNG';
import CAEjercicio1 from './imgs/imgsCuantificadoresAnidados/CAEjercicio1.PNG';
import CAEjercicio2 from './imgs/imgsCuantificadoresAnidados/CAEjercicio2.PNG';
import CAEjercicio3 from './imgs/imgsCuantificadoresAnidados/CAEjercicio3.PNG';
import CAEjercicio4 from './imgs/imgsCuantificadoresAnidados/CAEjercicio4.PNG';
import CAEjercicio5 from './imgs/imgsCuantificadoresAnidados/CAEjercicio5.PNG';

function CuantificadoresAnidados() {
    return (
        <section className="topic-container">
            <div className="topic-header">
                <h1 class="text-light"> Cuantificadores anidados </h1>
            </div>
            <div className="container px-5 vh-100">

                <div class="row">
                    <div class="col-12 col-lg-12">
                        <p class="text-center text-light lh-lg m-5 fw-light ">
                            Los cuantificadores anidados son aquellos que suelen tener múltiples variables. Es decir que para una
                            función proposicional puede indicar el uso de una variable, mientras que para otra función proposicional
                            dentro de la misma declaración puede usar otra variable completamente
                            diferente creando una declaración verdadera o falsa según la relación de ambas funciones preposicionales
                            respecto a las variables que les corresponden.
                        </p>
                    </div>
                </div>

                <div className="topic-header">
                    <h1 class="text-light"> Ejercicios Resueltos </h1>
                </div>

                <p class="text p-3">
                    Replantee simbólicamente:
                </p>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                            La suma de dos números reales positivo cualquiera da como resultado otro numero positivo.
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-5 pt-5 pb-5 ms-1 me-1 fw-Lighter lh-base">
                            <img class="exp-img mx-1 img-fluid" src={Respuesta1} alt="" />
                        </p>
                    </div>

                </div>

                <p class="text p-3">
                    Replantee en palabras:
                </p>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                        <img class="exp-img mx-3" src={CAEjercicio1} alt="" />
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                            Existe un numero que para todos los números este sea menor que el otro
                        </p>
                    </div>

                </div>


                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                        <img class="exp-img mx-3" src={CAEjercicio2} alt="" />
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                        Para todos los elementos x existe otro elemento y el cual este sea mayor que x
                        </p>
                    </div>

                </div>


                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                        <img class="exp-img mx-3" src={CAEjercicio3} alt="" />
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                        Para todo x y para todo y, la sumatoria de ambos es igual a 0
                        </p>
                    </div>

                </div>


                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                        <img class="exp-img mx-3" src={CAEjercicio4} alt="" />
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                        Existe un elemento x que para todo y su sumatoria de igual a 0
                        </p>
                    </div>

                </div>


                <div class="row mb-20 mb-xl-24 my-5 pb-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                        <img class="exp-img mx-3" src={CAEjercicio5} alt="" />
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                        Existe un numero que sea igual a todos los números.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default CuantificadoresAnidados
