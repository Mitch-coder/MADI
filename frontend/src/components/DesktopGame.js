import React, { useState, useEffect } from 'react';
import './styles/DesktopGame.css'

function DesktopGame() {
    const [data, setData] = useState([{}])
    // Mandamos a consultar los datos al api
    useEffect(() => {
        fetch("http://127.0.0.1:5000/desktopGame")
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, [])
    // Dependiendo de lo que obtengamos en la respuesta
    return (
        <div>
            {(typeof data.message === 'undefined') ? (
                <div class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>) :
                <main class="text-light DesktopMain container-fluid min-vh-100">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h1 class="mt-5"> Adentrate a las profundidades... </h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-12 text-center">

                            <h3 class="m-5"> De una nueva experiencia de baileee... </h3>

                            <div class="row">

                                <p class="col 12 me-5 ms-5">
                                    Honestamente no se que poner en este punto de la pagina necesito mas informacion acerca del juego pero
                                    no tengo ni idea de como puede ser que obtenga mas informacion, a lo mejor dentro de cierto tiempo
                                    puedo preguntar acerca del juego y hionestemente solo espero que este terminado para ese entonces.
                                </p>

                            </div>
                        </div>

                        <div class="col-lg-6 col-12 text-start">

                            <h3 class="m-5">
                                Imagen1
                            </h3>
                            <p>
                            </p>

                        </div>

                    </div>

                    <div class="row">

                        <div class="col-lg-6 col-12 text-start">
                            <h3 class="m-5">
                            Imagen2
                            </h3>

                            <p>
                            </p>

                        </div>

                        <div class="col-lg-6 col-12 text-center">

                            <h3 class="m-5"> Sera que este tipo no se cansa de bailarrrr... </h3>

                            <div class="row">

                                <p class="col 12 me-5 ms-5">
                                    Este solamente es un texto de relleno realmente no se que poner y ahorita estoy intentando entretenerme a mi mismo haciendo de mi trabajo
                                    una payasada, pero realmente no se que hacer, o bueno si se que hacer solamente que me da hueva hacerlo.
                                </p>

                            </div>
                        </div>

                    </div>

                    <div class="row">

                        <div class="col-lg-6 col-12 text-center">

                            <h3 class="m-5"> Criticos del baile han dicho lo sorprendente que es... </h3>

                            <div class="row">

                                <p class="col 12 me-5 ms-5 mb-5">
                                    Es te es un chiste demasiado estupido que se me occurrio pero me cuaso bastante gracia hacerlo asi que no pierdo el intento en ello
                                    a la vez quiero que se mire que hay mucho texto aqui para que se logre apreciar lo conocedor que soy de laa informacion verstil que me 
                                    puedo inventar mientras improviso que escribir
                                </p>

                            </div>
                        </div>

                        <div class="col-lg-6 col-12 text-start">
                            <h3 class="m-5">
                                Imagen3
                            </h3>
                            <p>
                            </p>
                        </div>

                    </div>

                    <div class="row">

                        <div class="col-11 text-center m-5">

                            <a href="https://uni.edu.ni/#/">

                                <button type="button" class="btn btn-outline-light">
                                    Obtener juego
                                </button>

                            </a>

                        </div>

                    </div>
                </main>
            }
        </div>
    );
}
export default DesktopGame;