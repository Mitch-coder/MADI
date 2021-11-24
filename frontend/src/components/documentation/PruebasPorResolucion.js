import React from 'react'
import './styles/Info.css'

function PruebasPorResolucion() {
    return (
        <section className="topic-container">

            <div className="topic-header text-light">
                <h1> Prueba Resolucion </h1>
            </div>

            <div class="container px-5 vh-100">

                <p class="text pt-3">
                    Resolución es una técnica de prueba que depende de una sola regla:

                </p>

                <p class="text">
                    a) 	Si (p v q) y (¬p v r) son ambas verdaderas entonces (q v r) es verdadera.
                </p>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-12 bg-dark rounded">
                        <p class="text-center text-light lh-lg ms-2 fw-light mt-3">
                            En una prueba por resolución tanto la hipótesis y la conclusión se escriben como clausulas.
                            Una cláusula consiste en términos separados por “o” donde cada termino es una variable o
                            negación de una variable.
                        </p>
                    </div>

                </div>

                <p class="text p-3 lh-sm">
                    Dando como ejemplo:

                </p>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6">
                        <p class="text-center text-light fw-light lh-lg me-2  mt-5 pt-4 mb-5">
                            Si una hipótesis no es una cláusula, entonces debe sustituirse por una expresión equivalente que sea una cláusula.
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-center text-dark mt-5 mb-5 pt-5 pb-5 fw-bold">
                            <i>
                                (a v b v ¬c v d) es una cláusula ya que los términos están separados por “o” y
                                cada termino es una variable o la negación de una variable.
                            </i>
                        </p>
                    </div>

                </div>

                <p class="text p-3 lh-sm">
                    b) 	Si (p v q) y ¬p son verdaderas entonces q es verdadero.
                </p>

                <p class="text p-3 lh-sm">
                    Algunas expresiones equivalentes:
                </p>

                <div class="box-exp rounded h-200 py-12 px-md-10 p-4 mx-3">

                    <div class="row mb-20 mb-xl-24 my-5">

                        <div class="rounded col-12 col-lg-5 bg-light">
                            <p class="text-center text-dark fw-bold lh-lg me-2  mt-5 mb-5 pt-5 mb-5">
                                ¬(a ^ b) =  ¬a v ¬b
                            </p>
                        </div>

                        <div class=" rounded col-12 col-lg-5 bg-light">
                            <p class="text-center text-dark mt-5 mb-5 pt-5 pb-5 fw-bold">
                                ¬(a v b) =  ¬a ^ ¬b
                            </p>
                        </div>

                    </div>

                    <div class="row mb-20 mb-xl-24 my-5">

                        <div class="rounded col-12 col-lg-5 bg-light">
                            <p class="text-center text-dark mt-5 mb-5 pt-5 pb-5 fw-bold">
                                ¬(a → b) = a ^ ¬b
                            </p>
                        </div>

                        <div class=" rounded col-12 col-lg-5 bg-light">
                            <p class="text-center text-dark mt-5 mb-5 pt-5 pb-5 fw-bold">
                                a → b = ¬a → ¬b
                            </p>
                        </div>

                    </div>

                    <div class="row mb-20 mb-xl-24 my-5">

                        <div class="rounded col-12 col-lg-5 bg-light">
                            <p class="text-center text-dark mt-5 mb-5 pt-5 pb-5 fw-bold">
                                a ↔ b = (a → b) ^ (b → a)
                            </p>
                        </div>

                        <div class="rounded col-12 col-lg-5 bg-light">
                            <p class="text-center text-dark mt-5 mb-5 pt-5 pb-5 fw-bold">
                                a v b ^ c = (a v b) ^ (a v c)
                            </p>
                        </div>

                    </div>

                </div>

                <div className="topic-header text-light mt-5">
                    <h1> Ejercicios Resueltos </h1>
                </div>

                <p class="text pt-3">
                    Compruebe por resolucion:
                </p>


                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-start text-light lh-lg ms-5 mt-5 mb-5 ps-4 pt-4 fw-bold">
                            <p class="text-start ">
                                1)
                                <p class="text-start ms-5">1. a</p>
                                <p class="text-start ms-5">2. ¬a v c</p>
                                <p class="text-start ms-5">3. ¬c v d</p>
                                <p class="text-start ms-5"> ∴ d</p>

                            </p>
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-start text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">

                            <p>Se sabe que a y (¬a v c) se obtiene c:</p>

                            <p class="text-start ms-5 ps-5">1. c</p>
                            <p class="text-start ms-5 ps-5">2. ¬c v d</p>

                            <p>Se sabe que c y (¬c v d) se obtiene d:</p>

                            <p class="text-start ms-5 ps-5">Por lo tanto </p>
                            <p class="text-start ms-5 ps-5"><b>d</b></p>

                        </p>
                    </div>

                </div>

                <div class="row mb-20 mb-xl-24 my-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-start text-light lh-lg ms-5 mt-5 mb-5 ps-4 pt-4 fw-bold">
                            <p class="text-start ">
                                2)
                                <p class="text-start ms-5">1. ¬p v q v r</p>
                                <p class="text-start ms-5">2. ¬q</p>
                                <p class="text-start ms-5">3. ¬r</p>
                                <p class="text-start ms-5">∴ ¬p</p>

                            </p>
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-start text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">

                            <p>Se sabe que (¬p v q v r) y ¬q se obtiene (¬p v r):</p>

                            <p class="text-start ms-5 ps-5">1. ¬p v r</p>
                            <p class="text-start ms-5 ps-5">2. ¬r</p>

                            <p>Se sabe que (¬p v r) y ¬r se obtiene ¬p</p>

                            <p class="text-start ms-5 ps-5">Por lo tanto </p>
                            <p class="text-start ms-5 ps-5"><b>¬p</b></p>

                        </p>
                    </div>

                </div>

                <div class="row mb-20 mb-xl-24 my-5 pb-5">

                    <div class="col-12 col-lg-6 bg-dark">
                        <p class="text-start text-light lh-lg ms-5 mt-5 mb-5 ps-4 pt-4 fw-bold">
                            <p class="text-start ">
                                3)
                                <p class="text-start ms-5">1. ¬p v t</p>
                                <p class="text-start ms-5">2. ¬q v s</p>
                                <p class="text-start ms-5">3. ¬r v s ^ t</p>
                                <p class="text-start ms-5">4. p v q v r v u</p>
                                <p class="text-start ms-5">∴ s v t v u</p>

                            </p>
                        </p>
                    </div>

                    <div class=" rounded col-12 col-lg-6 bg-light">
                        <p class="text-start text-dark mt-5 mb-2 pt-2 pb-5 ms-1 me-1 fw-Lighter lh-base">

                            <p>Se sabe que ¬r v s ^ t es equivalente a (¬r v s) ^ (¬r v t) por lo tanto:</p>

                            <p class="text-start ms-5 ps-5">1. ¬p v t</p>
                            <p class="text-start ms-5 ps-5">2. ¬q v s</p>
                            <p class="text-start ms-5 ps-5">3. ¬r v s</p>
                            <p class="text-start ms-5 ps-5">4. ¬r v t</p>
                            <p class="text-start ms-5 ps-5">5. p v q v r v u</p>

                            <p>Se sabe que (¬r v s)  y  (p v q v r v u) se obtiene que (p v q v s v u)</p>
                            
                            <p class="text-start ms-5 ps-5">1. ¬p v t</p>
                            <p class="text-start ms-5 ps-5">2. ¬q v s</p>
                            <p class="text-start ms-5 ps-5">3. ¬r v t</p>
                            <p class="text-start ms-5 ps-5">4. p v q v s v u</p>

                            <p> Se sabe que (¬p v t)   y  (p v q v s v u) Se obtiene (t v q v s v u)</p>

                            <p class="text-start ms-5 ps-5">1. ¬q v s</p>
                            <p class="text-start ms-5 ps-5">2. ¬r v t</p>
                            <p class="text-start ms-5 ps-5">3. t v q v s v u</p>
                        
                            <p> Se sabe que (¬q v s)  y  (t v q v s v u) Se obtiene (t v s v s v u) Que es lo mismo decir (t v s v u)</p>

                            <p class="text-start ms-5 ps-5">Por lo tanto </p>
                            <p class="text-start ms-5 ps-5"><b>(s v t v u)</b></p>

                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PruebasPorResolucion
