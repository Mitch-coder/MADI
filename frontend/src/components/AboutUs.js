import React,{useState,useEffect} from 'react';
import './styles/About.css'
import Gabriela from './imgs/imgGabriela.png';
import Jurgen from './imgs/imgJurgen.jpeg';
import Michelle from './imgs/imgMichelle.jpeg';

function AboutUs(){
    const [data,setData] = useState([{}])
    // Mandamos a consultar los datos al api
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/aboutUs")
        .then(res => res.json())
        .then(data =>{
          setData(data)
          console.log(data)})
    },[])
    // Dependiendo de lo que obtengamos en la respuesta
    return(
        <div>
            {(typeof data.message === 'undefined')?(
                 <div class="spinner-border text-warning" role="status">
                 <span class="visually-hidden">Loading...</span>
             </div>
            ):
            data.message}

            <main class="about container-fluid min-vh-100">
                <div class="about-content p-5">
                    <div class="about-developers py-5">
                        <div class="profile my-4">
                            <img class="pt-2" src={Michelle}/>
                            <h5 class="user-name mt-2"> Michelle Calderon </h5>
                            <h6 class="user-descript"> Desarrolladora </h6>
                        </div>
                        <div class="profile my-4">
                            <img class="pt-2" src={Gabriela}/>
                            <h5 class="user-name mt-2"> Gabriela Robleto </h5>
                            <h6 class="user-descript"> Desarrolladora </h6>
                        </div>
                        <div class="profile my-4">
                            <img class="pt-2" src={Jurgen}/>
                            <h5 class="user-name mt-2"> Jurgen Bermudez </h5>
                            <h6 class="user-descript"> Desarrollador </h6>
                        </div>
                    </div>
                    <div class="about-description py-5 my-5">
                        <div className="section-header my-5">
                            <span className="section-title">/ Qui??nes somos?</span>
                        </div>
                        <div class="description-text lh-lg rounded px-md-10 p-3 m-3">

                            <p class="p-3">
                                <strong>MADI</strong>, un proyecto creado por los estudiantes de Ingenier??a en Computaci??n
                                para la asignatura de Matematicas Discretas. Esta pagina esta enfocada en
                                compartir el conociemiento obtenido en esta materia, con el fin de ayudar a
                                estudiantes alrededor del mundo a entender los conceptos b??sicos de
                                forma mas entretenida.
                            </p>
                        
                        </div>
                        <div className="section-header my-5">
                            <span className="section-title">/ Objetivos </span>
                        </div>
                        <div class="goals-description">
                            <ul class="list px-4 lh-lg">
                                <li class="list-item my-2">
                                    Brindar informaci??n para aprender de forma autodidacta.
                                </li>
                                <li class="list-item my-2">
                                    Promover el uso de un juego did??ctico.
                                </li>
                                <li class="list-item my-2">
                                    Poner en practica lo aprendido por medio de ejercicios resueltos.
                                </li>
                            </ul>
                        </div>
                        <div className="section-header my-5">
                            <span className="section-title">/ C??digo del proyecto </span>
                        </div>
                        <div class="link-section m-3">

                            <a href="https://github.com/Mitch-coder/MADI.git">

                                <button type="button" class="btn btn-outline-light btn-lg">
                                    Ver C??digo
                                </button>

                            </a>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default AboutUs;