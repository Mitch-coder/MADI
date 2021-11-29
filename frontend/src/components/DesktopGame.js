import React, { useState, useEffect } from 'react';
import './styles/DesktopGame.css'
import GImage1 from './styles/images/GImage1.jpeg';
import GImage2 from './styles/images/GImage2.jpeg';
import GImage3 from './styles/images/GImage3.jpeg';
import GImage4 from './styles/images/GImage4.jpeg';

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

                    <div class="row SecondBg mt-3 ms-5 me-5 rounded">

                        <div class="row mb-20 ms-5 mb-3 me=5 mt-5 mb-xl-24 my-2 lh-lg">

                            <div class="col-lg-5 col-12 text-center bg-dark rounded text-light me-5">

                                <h3 class="m-5 fw-light"> De una nueva experiencia... </h3>

                                <div class="row">

                                    <p class="col 12 me-5 ms-5 mb-5">

                                        Pon aprueba tus habilidades aprendidas a lo largo del transcurso por medio de los diferentes obstaculos que pueden haber
                                        en la travesia de tu aventura.

                                    </p>

                                </div>
                            </div>

                            <div class="col-lg-5 col-12 text-start">
                                    <img class="exp-img mx-1 img-fluid pe-5 mt-5" src={GImage2} alt="" />
                               
                            </div>

                        </div>

                        <div class="row mb-20 ms-5 mt-5 mb-xl-24 my-2 lh-lg">

                            <div class="col-lg-5 col-12 text-start">
                                    <img class="exp-img mx-1 img-fluid pe-5 mb-5" src={GImage1} alt="" />
                            </div>

                            <div class="col-lg-5 col-12 text-center bg-dark rounded text-light me-5">

                                <h3 class="m-5 fw-light"> La logica sera tu ayuda.. </h3>

                                <div class="row">

                                    <p class="col 12 me-5 ms-5 mb-5">
                                        El pensamiento logico e intuicion natural se pondra a prueba
                                        por medio de las nuevos aprendizajes obtenidos.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="row mb-20 ms-5 mt-5 mb-xl-24 my-2 lh-lg">

                            <div class="col-lg-5 col-12 text-center bg-dark rounded text-light me-5">

                                <h3 class="m-5 fw-light"> En ti hay un matematico... </h3>

                                <div class="row">

                                    <p class="col 12 me-5 ms-5 mb-5">
                                        El pensamiento y razonamiento es algo de la naturaleza humana, y en ti esta el ejercer ese matematico logico dentro tuyo,
                                        para poder salvar al mundo, o a ti mismo mejor dicho.
                                    </p>

                                </div>
                            </div>

                            <div class="col-lg-5 col-12 text-start">
                                    <img class="exp-img mx-1 img-fluid pe-5 mt-5" src={GImage4} alt="" />
                            </div>

                        </div>

                        <div class="row">

                            <div class="col-11 text-center m-5">

                                <a href="./DesktopGame">

                                    <button type="button" class="btn btn-outline-light">
                                        <h3 class="fw-light">Obtener juego</h3>
                                    </button>

                                </a>

                            </div>

                        </div>

                    </div>

                </main>
            }
        </div>
    );
}
export default DesktopGame;