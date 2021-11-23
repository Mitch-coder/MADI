import React,{useState,useEffect} from 'react';

function Exercises(){
    const [data,setData] = useState([{}])
    // Mandamos a consultar los datos al api
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/exercises")
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
        </div>
    );
}
export default Exercises;