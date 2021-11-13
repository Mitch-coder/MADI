import React from 'react'

function Cuantificadores() {
    return (
        <div>
            <main class="container-fluid vh-100">

                <div class="row">

                    <div class="col-10 text-dark text-start">

                        <div class="m-4">
                            <div class="row ">
                                <div class="col-12">
                                    <h1>Cuantificadores</h1>
                                </div>
                            </div>

                            <p>
                                Normalmente la lógica de diversas proposiciones es incapaz de describir la mayoría de las afirmaciones que se hacen.  Dando como ejemplo:
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
                                Una función proposicional no es ni verdadero ni falsa por si misma, pero para cada valor de su variable dentro de su dominio de discurso,
                                esta es verdadera o falsa. Su connotación se define como:
                            </p>

                            <p class="text-center">
                                P_((n))
                            </p>

                            <p>
                                Sea P una función proposicional con un dominio de discurso D, se dice que la afirmación para toda x, P_((x)) se escribe:
                            </p>

                            <p class="text-center">
                                ∀xP_((x))
                            </p>

                            <p>
                                El símbolo de ∀ se llama cuantificador universal. La declaración ∀xP_((x)) es verdadera si P_((x))
                                es verdadera para toda variable x en el dominio de discurso dado,
                                y se considera falsa cuando para al menos un elemento en su dominio de discurso es falsa.
                            </p>

                            <p>
                                Sea P una función proposicional con un dominio de discurso D, se dice que la afirmación existe x, P_((x)) se escribe:
                            </p>

                            <p class="text-center">
                                ∃xP_((x))
                            </p>

                            <p>
                                El símbolo de ∃ se llama cuantificador existencial. La declaración ∃xP_((x)) es verdadera si P_((x))
                                es verdadera para al menos una variable x en el dominio de discurso dado,
                                y se considera falsa cuando para todos los elementos en su dominio de discurso es falsa.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cuantificadores
