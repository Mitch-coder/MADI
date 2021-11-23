import React from 'react'
import './styles/Info.css'

function CuantificadoresAnidados() {
    return (
        <section className="topic-container">
            <div className="topic-header">
                <h1> Cuantificadores anidados </h1>
            </div>
            <div className="container-fluid vh-100">
                <div class="row">
                    <div class="col-10 text-start">
                        <div class="m-4">
                            <div class="row ">
                                <div class="col-12">
                                    <h1></h1>
                                </div>
                            </div>

                            <p>
                                Los cuantificadores anidados son aquellos que suelen tener múltiples variables. Es decir que para una función proposicional puede
                                indicar el uso de una variable, mientras que para otra función proposicional dentro de la misma declaración puede usar otra variable
                                completamente diferente creando una declaración verdadera o falsa según la relación de ambas funciones preposicionales respecto a las
                                variables que les corresponden.
                            </p>

                            <h1>Ejercicios Resueltos</h1>

                            <h5>
                                Replantee simbólicamente:
                            </h5>

                            <p class="text-center">
                                <i>La suma de dos números reales positivo cualquiera da como resultado otro numero positivo.</i>
                            </p>

                            <p>∀x∀y((x mayor 0 ^ y mayor 0 )→ (x+y mayor 0)) </p>

                            <h5>
                                Replantee en palabras:
                            </h5>

                            <p class="text-center">
                                <i> ∃m∀n( m mayor n ) </i>
                            </p>

                            <p>Existe un numero que para todos los números este sea menor que el otro</p>

                            <p class="text-center">
                                <i> ∀x∃y(x mayor y) </i>
                            </p>

                            <p> Para todos los elementos x existe otro elemento y el cual este sea mayor que x</p>

                            <p class="text-center">
                                <i>∀x∀y(x+y=0)</i>
                            </p>

                            <p>Para todo x y para todo y, la sumatoria de ambos es igual a 0 </p>

                            <p class="text-center">
                                <i>∃x∀y(x+y=0)</i>
                            </p>

                            <p> Existe un elemento x que para todo y su sumatoria de igual a 0 </p>

                            <p class="text-center">
                                <i>∃m∀n(m=n)</i>
                            </p>

                            <p> Existe un numero que sea igual a todos los números. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CuantificadoresAnidados
