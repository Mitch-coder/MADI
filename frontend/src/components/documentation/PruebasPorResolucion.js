import React from 'react'

function PruebasPorResolucion() {
    return (
        <div>
            <main class="container-fluid vh-100">

                <div class="row">

                    <div class="col-10 text-start">

                        <div class="m-4">
                            <div class="row ">
                                <div class="col-12">
                                    <h1>Prueba por resolución</h1>
                                </div>
                            </div>

                            <p>
                                Resolución es una técnica de prueba que depende de una sola regla:
                            </p>

                            <p class="text-center">
                                a) 	Si (p v q) y (¬p v r) son ambas verdaderas entonces (q v r) es verdadera.
                            </p>

                            <p>
                                En una prueba por resolución tanto la hipótesis y la conclusión se escriben como clausulas.
                                Una cláusula consiste en términos separados por “o” donde cada termino es una variable o
                                negación de una variable. Dando como ejemplo:
                            </p>

                            <p>
                                (a v b v ¬c v d) es una cláusula ya que los términos están separados por “o” y
                                cada termino es una variable o la negación de una variable.
                            </p>

                            <p class="text-center">
                                b) 	Si (p v q) y ¬p son verdaderas entonces q es verdadero.
                            </p>

                            <p>
                                Si una hipótesis no es una cláusula, entonces debe sustituirse por una
                                expresión equivalente que sea una cláusula.
                            </p>

                            <p>
                                Algunas expresiones equivalentes:
                            </p>

                            <p>

                                <div> ¬(a ^ b) =  ¬a v ¬b </div>
                                <div> ¬(a v b) =  ¬a ^ ¬b </div>
                                <div> ¬(a → b) = a ^ ¬b </div>
                                <div> a → b = ¬a → ¬b </div>
                                <div> a ↔ b = (a → b) ^ (b → a) </div>
                                <div> a v b ^ c = (a v b) ^ (a v c) </div>

                            </p>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PruebasPorResolucion
