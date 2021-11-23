import React from 'react'
import './styles/Info.css'

function Cuantificadores() {
    return (
        <section className="topic-container">
            <div className="topic-header">
                <h1> Cuantificadores </h1>
            </div>
            <div className="container-fluid vh-100">
                <div class="row">
                    <div class="col-10 text-dark text-start">
                        <div class="m-4">
                            <p>
                                Normalmente la lógica de diversas proposiciones es incapaz de describir 
                                la mayoría de las afirmaciones que se hacen.Dando como ejemplo:
                            </p>

                            <p class="text-center">
                                <i>P: n es un numero entero impar.</i>
                            </p>

                            <p>
                                Se sabe que una preposición es una afirmación que es verdadera o falsa, pero no puede ser ambas.
                                En este caso, la afirmación anteriormente mencionada no se considera como una preposición,
                                ya que este puede ser verdadera o falsa en dependencia del valor de n.
                                Si n = 2, seria falsa, en cambio, si n = 3, seria verdadera.
                            </p>

                            <p>
                                A este tipo de declaraciones se le considera como función proposicional, y estas están caracterizadas
                                por tener una variable y un dominio de discurso determinado.
                            </p>

                            <p>
                                Una función proposicional no es ni verdadero ni falsa por si misma, pero para cada
                                valor de su variable dentro de su dominio de discurso,
                                esta es verdadera o falsa.Su connotación se define como:
                            </p>

                            <p class="text-center">
                                P_((n))
                            </p>

                            <p>
                                Sea P una función proposicional con un dominio de discurso D, 
                                se dice que la afirmación para toda x, P_((x)) se escribe:
                            </p>

                            <p class="text-center">
                                ∀xP_((x))
                            </p>

                            <p>
                                El símbolo de ∀ se llama cuantificador universal.La declaración ∀xP_((x)) es verdadera si P_((x))
                                es verdadera para toda variable x en el dominio de discurso dado,
                                y se considera falsa cuando para al menos un elemento en su dominio de discurso es falsa.
                            </p>

                            <p>
                                Sea P una función proposicional con un dominio de discurso D,
                                se dice que la afirmación existe x, P_((x)) se escribe:
                            </p>

                            <p class="text-center">
                                ∃xP_((x))
                            </p>

                            <p>
                                El símbolo de ∃ se llama cuantificador existencial.La declaración ∃xP_((x)) es verdadera si P_((x))
                                es verdadera para al menos una variable x en el dominio de discurso dado,
                                y se considera falsa cuando para todos los elementos en su dominio de discurso es falsa.
                            </p>

                            <h1>Ejercicios Resueltos</h1>

                            <h5>
                                Indique si es una función proposicional y si es el caso indique su dominio de discurso:
                            </h5>

                            <p class="text-center">
                                <i>n^2 + 2n es un entero impar.</i>
                            </p>

                            <p>Es una función proposicional, (Dominio de discurso: Conjunto de enteros positivos).</p>

                            <p class="text-center">
                                <i>Un artista musical saco un nuevo álbum en 1998:</i>

                            </p>

                            <p>Es una función proposicional, (Dominio de discurso: Conjunto de 
                                artista que lanzaron su álbum en 1998).
                            </p>

                            <p class="text-center">
                                <i>2 + 2 = 4:</i>
                            </p>

                            <p>No es una función proposicional, solamente es una preposición.</p>

                            <h5>
                                Indique si la afirmación dada es verdadera o falso:
                            </h5>

                            <p class="text-center">
                                <i> ∀x(x^2≥0)    Dominio de discurso: Conjunto de números reales.</i>
                            </p>

                            <p>Esta afirmación es verdadera, ya que para todo numero elevado al
                                cuadrado siempre dará como resultado un numero positivo o igual a 0.
                            </p>

                            <p class="text-center">
                                <i> ∀x(x^2-1 mayor 0)    Dominio de discurso: Conjunto de números reales.</i>
                            </p>

                            <p>Esta afirmación es falsa debido a que hay
                                un número que incumple esta condición.
                            </p>

                            <p class="text-center">
                                <i>∃x(x/(x^2+1)=2/5) Dominio de discurso: conjunto de números reales.</i>
                            </p>

                            <p>Esta afirmación es verdadera ya que existe al menos un numero de ese
                                conjunto que hace a la preposición verdadera.
                            </p>

                            <p class="text-center">
                                <i>∃x(x/(x^2+1) mayor 1) Dominio de discurso: conjunto de números reales.</i>
                            </p>

                            <p>Esta afirmación es falsa ya que no existe ningún elemento del conjunto que cumpla
                                con la condición y por ende toda la declaración termina siendo falsa.
                            </p>

                            <h5>
                                Sea P(n) “n divide a 77” escriba la preposición en palabras e indique si es verdadero o falso.
                            </h5>

                            <p class="text-center">
                                <i> P (11):</i>
                            </p>

                            <p>11 divide a 77 (verdadero)</p>

                            <p class="text-center">
                                <i>  ∃nP_((n)):</i>
                            </p>

                            <p>Existe un numero que divida a 77 (verdadero)</p>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Cuantificadores
