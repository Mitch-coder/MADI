import React from 'react'
import './styles/Info.css'
import Px from './imgs/imgsCuantificadores/Px.PNG';
import APx from './imgs/imgsCuantificadores/APx.PNG';
import Epx from './imgs/imgsCuantificadores/Epx.PNG';
import CEjercicio1 from './imgs/imgsCuantificadores/CEjercicio1.PNG';
import CEjercicio0 from './imgs/imgsCuantificadores/CEjercicio0.PNG';
import CEjercicio2 from './imgs/imgsCuantificadores/CEjercicio2.PNG';
import CEjercicio3 from './imgs/imgsCuantificadores/CEjercicio3.PNG';
import CEjercicio4 from './imgs/imgsCuantificadores/CEjercicio4.PNG';

function Cuantificadores() {
    return (
        <section className="topic-container">
            <div className="topic-header">
                <h1 class="text-light"> Cuantificadores </h1>
            </div>
            <div className="container px-5 vh-100">

                <p class="text p-3">
                    Normalmente la lógica de diversas proposiciones es incapaz de describir
                    la mayoría de las afirmaciones que se hacen.
                </p>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-5 pt-5 pb-5 fw-bold">
                            <i>P: n es un numero entero impar.</i>
                        </p>
                    </div>

                    <div class="col-12 col-lg-6">
                        <p class="text-center text-light lh-lg ms-2 fw-light mt-3">
                            Se sabe que una preposición es una afirmación que es verdadera o falsa, pero no puede ser ambas.
                            En este caso, la afirmación anteriormente mencionada no se considera como una preposición,
                            ya que este puede ser verdadera o falsa en dependencia del valor de n.
                            Si n = 2, seria falsa, en cambio, si n = 3, seria verdadera.
                        </p>
                    </div>

                </div>

                <p class="text p-3 lh-sm">
                    A este tipo de declaraciones se le considera como función proposicional, y estas están caracterizadas
                    por tener una variable y un dominio de discurso determinado.
                </p>


                <div class="row mb-20 mb-xl-24 my-5">


                    <div class="col-12 col-lg-6">
                        <p class="text-center text-light lh-lg me-2  mt-3">
                            Una función proposicional no es ni verdadero ni falsa por si misma, pero para cada
                            valor de su variable dentro de su dominio de discurso,
                            esta es verdadera o falsa.
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-5 pt-5 pb-5 fw-bold">
                            <i>Su connotación se define como:</i>
                            <img class="exp-img mx-3" src={Px} alt="" />
                        </p>
                    </div>

                </div>

                <div class="box-exp rounded  py-12 px-md-10 p-4 mx-3">

                    <div class="row mb-20 mb-xl-24 my-5">

                        <div class=" rounded col-12 col-lg-6 bg-light">
                            <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Light lh-base">
                                <i>Sea P una función proposicional con un dominio de discurso D,
                                    se dice que la afirmación para toda x, <img class="exp-img mx-3" src={Px} alt="" /> se escribe:</i>
                                <img class="exp-img mx-3" src={APx} alt="" />
                            </p>
                        </div>

                        <div class="col-12 col-lg-6">
                            <p class="text-center text-dark lh-lg me-2  mt-4 fw-bold">
                                El símbolo de ∀ se llama cuantificador universal. La declaración se considera
                                verdadera si es verdadera para toda variable x en el dominio de discurso dado,
                                y se considera falsa cuando para al menos un elemento en su dominio de discurso es falsa.
                            </p>
                        </div>
                    </div>

                    <div class="row mb-20 mb-xl-24 my-5">

                        <div class="col-12 col-lg-6">
                            <p class="text-center text-dark lh-lg me-2  mt-4 fw-bold">
                                El símbolo de ∃ se llama cuantificador existencial. La declaración se considera verdadera si
                                es verdadera para al menos una variable x en el dominio de discurso dado,
                                y se considera falsa cuando para todos los elementos en su dominio de discurso es falsa.
                            </p>
                        </div>

                        <div class=" rounded col-12 col-lg-6 bg-light">
                            <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Light lh-base">
                                <i>Sea P una función proposicional con un dominio de discurso D,
                                    se dice que la afirmación existe x, <img class="exp-img mx-3" src={Px} alt="" /> se escribe:</i>
                                <img class="exp-img mx-3" src={Epx} alt="" />
                            </p>
                        </div>
                    </div>


                </div>

                <div className="topic-header">
                    <h1 class="text-light m-5"> Ejercicios Resueltos </h1>
                </div>

                <p class="text p-1">
                    Indique si es una función proposicional y si es el caso indique su dominio de discurso:
                </p>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                            n^2 + 2n es un entero impar.
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                            <i>//R: Es una función proposicional, (Dominio de discurso: Conjunto de enteros positivos).</i>
                        </p>
                    </div>

                </div>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                            Un artista musical saco un nuevo álbum en 1998.
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                            <i>//R: Es una función proposicional, (Dominio de discurso: Conjunto de
                                artista que lanzaron su álbum en 1998).</i>
                        </p>
                    </div>

                </div>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                            2 + 2 = 4.
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                            <i>//R: No es una función proposicional, solamente es una preposición.</i>
                        </p>
                    </div>

                </div>

                <p class="text p-1">
                    Indique si la afirmación dada es verdadera o falso:
                </p>


                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                        <img class="exp-img mx-3" src={CEjercicio0} alt="" />    Dominio de discurso: Conjunto de números reales.
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                            <i>//R: Esta afirmación es verdadera, ya que para todo numero elevado al
                                cuadrado siempre dará como resultado un numero positivo o igual a 0.</i>
                        </p>
                    </div>

                </div>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                        <img class="exp-img mx-3" src={CEjercicio1} alt="" />    Dominio de discurso: Conjunto de números reales.
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                            <i>//R: Esta afirmación es falsa debido a que hay
                                un número que incumple esta condición.</i>
                        </p>
                    </div>

                </div>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                        <img class="exp-img mx-3" src={CEjercicio2} alt="" />    Dominio de discurso: Conjunto de números reales.
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                            <i>//R: Esta afirmación es verdadera ya que existe al menos un numero de ese
                                conjunto que hace a la preposición verdadera.</i>
                        </p>
                    </div>

                </div>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                        <img class="exp-img mx-3" src={CEjercicio3} alt="" />    Dominio de discurso: Conjunto de números reales.
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                            <i>//R: Esta afirmación es falsa ya que no existe ningún elemento del conjunto que cumpla
                                con la condición y por ende toda la declaración termina siendo falsa.</i>
                        </p>
                    </div>

                </div>

                <p class="text p-1">
                    Sea P(n) " n divide a 77 " escriba la preposición en palabras e indique si es verdadero o falso.
                </p>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                        P (11):
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                            <i>//R: 11 divide a 77 (verdadero)</i>
                        </p>
                    </div>

                </div>

                <div class="row mb-20 mb-xl-24 my-5 pb-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-center text-light lh-lg me-2 mt-5 mb-5 pb-4 pt-4 fw-bold">
                        <img class="exp-img mx-3" src={CEjercicio4} alt="" /> 
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">
                            <i>//R: Existe un numero que divida a 77 (verdadero)</i>
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Cuantificadores
