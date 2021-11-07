import React,{useState,useEffect} from 'react';

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
                <h1>Cargando</h1>
            ):
            data.message}
        </div>
    );
}
export default AboutUs;