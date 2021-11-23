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
                        <div class="col-6 text-center">

                            <h3 class="m-5"> De una nueva experiencia... </h3>

                            <div class="row">

                                <p class="col 12 me-5 ms-5">
                                    Honestamente no se que poner en este punto de la pagina necesito mas informacion acerca del juego pero
                                    no tengo ni idea de como puede ser que obtenga mas informacion, a lo mejor dentro de cierto tiempo
                                    puedo preguntar acerca del juego y hionestemente solo espero que este terminado para ese entonces.
                                </p>

                            </div>
                        </div>

                        <div class="col-6 text-start">

                            <h3 class="m-5"> Se supone que aqui podria haber una imagen del juego </h3>
                            <p>
                            </p>

                        </div>

                    </div>

                    <div class="row">

                        <div class="col-6 text-start">
                            <h3 class="m-5"> Otra imagen u.u </h3>

                            <p>
                            </p>

                        </div>

                        <div class="col-6 text-center">

                            <h3 class="m-5"> Mas nuevas experiencia... </h3>

                            <div class="row">

                                <p class="col 12 me-5 ms-5">
                                    Honestamente no se que poner en este punto de la pagina necesito mas informacion acerca del juego pero
                                    no tengo ni idea de como puede ser que obtenga mas informacion, a lo mejor dentro de cierto tiempo
                                    puedo preguntar acerca del juego y hionestemente solo espero que este terminado para ese entonces.
                                </p>

                            </div>
                        </div>

                    </div>

                    <div class="row">

                        <div class="col-6 text-center">

                            <h3 class="m-5"> Muchas experiencias... </h3>

                            <div class="row">

                                <p class="col 12 me-5 ms-5 mb-5">
                                    Honestamente no se que poner en este punto de la pagina necesito mas informacion acerca del juego pero
                                    no tengo ni idea de como puede ser que obtenga mas informacion, a lo mejor dentro de cierto tiempo
                                    puedo preguntar acerca del juego y hionestemente solo espero que este terminado para ese entonces.
                                </p>

                            </div>
                        </div>

                        <div class="col-6 text-start">
                            <h3 class="m-5"> Mas imagen </h3>
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