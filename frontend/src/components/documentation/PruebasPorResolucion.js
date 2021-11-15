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

                            <h1>Ejercicios Resueltos</h1>

                            <h5>
                                Compruebe por resolucion:
                            </h5>

                            <p>
                                <i>1)
                                    <p>1. a</p>
                                    <p>2. ¬a v c</p>
                                    <p>3. ¬c v d</p>
                                    <p> ∴ d</p>
                                </i>
                            </p>

                            <p>Resolucion:</p>

                            <p>Se sabe que a y (¬a v c) se obtiene c:
                                <p>
                                    <p>1. c</p>
                                    <p>2. ¬c v d</p>

                                    Se sabe que c y (¬c v d) se obtiene d:

                                    <p>Por lo tanto </p>
                                    <p><b>d</b></p>
                                </p>

                            </p>

                            <p>
                                <i>2)
                                    <p>1. ¬p v q v r</p>
                                    <p>2. ¬q</p>
                                    <p>3. ¬r</p>
                                    <p> ∴ ¬p</p>
                                </i>
                            </p>

                            <p>Resolucion:</p>

                            <p>Se sabe que (¬p v q v r) y ¬q se obtiene (¬p v r):
                                <p>
                                    <p>1. ¬p v r</p>
                                    <p>2. ¬r</p>

                                    Se sabe que (¬p v r) y ¬r se obtiene ¬p

                                    <p>Por lo tanto </p>
                                    <p><b>¬p</b></p>

                                </p>
                            </p>

                            <p>
                                <i>3)
                                    <p>1. ¬p v t</p>
                                    <p>2. ¬q v s</p>
                                    <p>3. ¬r v s ^ t</p>
                                    <p>4. p v q v r v u</p>
                                    <p> ∴ s v t v u</p>
                                </i>
                            </p>

                            <p>Resolucion:</p>

                            <p>Se sabe que ¬r v s ^ t es equivalente a (¬r v s) ^ (¬r v t) por lo tanto:
                                <p>
                                    <p>1. ¬p v t</p>
                                    <p>2. ¬q v s</p>
                                    <p>3. ¬r v s</p>
                                    <p>4. ¬r v t</p>
                                    <p>5. p v q v r v u</p>

                                    Se sabe que (¬r v s) y (p v q v r v u) se obtiene que (p v q v s v u)

                                    <p>1. ¬p v t</p>
                                    <p>2. ¬q v s</p>
                                    <p>3. ¬r v t</p>
                                    <p>4. p v q v s v u</p>
                                    
                                    Se sabe que ¬p v t  y (p v q v s v u) Se obtiene (t v q v s v u)

                                    <p>1. ¬q v s</p>
                                    <p>2. ¬r v t</p>
                                    <p>3. t v q v s v u</p>

                                    Se sabe que (¬q v s) y (t v q v s v u) Se obtiene (t v s v s v u) Que es lo mismo decir (t v s v u)

                                    <p>Por lo tanto </p>
                                    <p><b> (s v t v u)</b></p>

                                </p>
                            </p>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PruebasPorResolucion
