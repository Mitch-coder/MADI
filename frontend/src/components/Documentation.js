import React, { useState, useEffect } from 'react';
import { SideBar } from './SideBar';
import { Outlet } from 'react-router';

function Documentation() {
    const [data, setData] = useState([{}])
    // Mandamos a consultar los datos al api
    useEffect(() => {
        fetch("http://127.0.0.1:5000/documentation")
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
                <main className="main">
                    <SideBar />
                    <section>
                        <Outlet />
                    </section>
                </main>}
        </div>
    );
}
export default Documentation;