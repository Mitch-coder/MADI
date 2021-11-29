import React, { useState, useEffect } from 'react';
//import React  from 'react';
import { Link } from 'react-router-dom';
import madi from './styles/images/madi.svg';
import theory from './styles/images/theory.jpeg';
import exrcisesIMG from './styles/images/exrcisesIMG.jpeg';
import desktopGameIMG from './styles/images/desktopGameIMG.jpeg';

function Home() {
    const [data, setData] = useState([{}])
    // Mandamos a consultar los datos al api
    useEffect(() => {
        fetch("http://127.0.0.1:5000")
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
                </div>
            ) :
                <div>
                    {/*Presentation*/}
                    <section className="section bghome">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 text-left text-white">
                                    <h1 className="main-title">Hola soy madi, juntos<br></br>vamos a aprender<br></br>matematicas discretas<br></br>de una forma divertida y<br></br>practica!</h1>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src={madi} class="img-fluid"></img>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Mision*/}
                    <section className="section bg-light">
                        <div className="container">
                            <div className="row" id="row-mission">
                                <div className="col-md-12 text-center">
                                    <h1 className="my-mission">Mision</h1>
                                    <div className="underline mx-auto">
                                    </div>
                                    <p className="description text-black">Ayudar a comprender los tópicos de la clase de matemáticas discretas, comenzando con la teoría, luego ejemplos, prácticas para que me enseñes el conocimiento que has adquirido y por último si te quieres seguir entreteniendo te recomiendo un juego de un amigo mío para que te diviertas. </p>
                                    <Link to="/aboutUs" className="btn btn-primary shadow">Leer mas</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Resources provide*/}
                    <section className="section bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1 className="my-mission">Recursos</h1>
                                    <div className="underline mx-auto">
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow">
                                        <img src={theory} className="w-100 border-bottom" alt="Servicio uno" id="img1" />
                                    </div>
                                    <div className="card-body">
                                        <h6>Teoria</h6>
                                        <p>
                                            Le brindamos documentación de la materia de una forma sencilla
                                        </p>
                                        <Link to="/documentation/logicaproposicional" className="btn btn-link">Leer mas</Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow">
                                        <img src={exrcisesIMG} className="w-100 border-bottom" alt="Servicio uno" id="img2" />
                                    </div>
                                    <div className="card-body">
                                        <h6>Ejercicios</h6>
                                        <p>
                                            Pon a practicar tus conocimientos con ejercicios didacticos
                                        </p>
                                        <Link to="/documentation/logicaproposicional" className="btn btn-link">Leer mas</Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow">
                                        <img src={desktopGameIMG} className="w-100 border-bottom" alt="Servicio uno" id="img3" />
                                    </div>
                                    <div className="card-body">
                                        <h6>Juego</h6>
                                        <p>
                                            Te recomendamos un juego para que te diviertas aprendiendo a su vez.
                                        </p>
                                        <Link to="/desktopGame" className="btn btn-link">Leer mas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Pie de Pagina*/}
                    <section className="section footer bghome text-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Madi</h3>
                                    <p>Creado como proyecto final de la asignatura de matemáticas discretas, por estudiantes de segundo año de la carrera de ingeniería en computación de la universidad nacional de ingeniería [UNI-RUSB]</p>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>


            }
        </div>
    );
}
export default Home;