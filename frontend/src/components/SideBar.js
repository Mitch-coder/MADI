import React from 'react'
import './styles/SideBar.css'
import { Link, useLocation } from 'react-router-dom';

export function SideBar() {
    const location = useLocation();

    // Rutas en el arreglo para cada uno de los temas
    const routes = [
        {
            path: "/documentation/logicaproposicional",
            name: "Lógica Proposicional",
            current: false
        },

        {
            path: "/documentation/proposiciones",
            name: "Conjunción y Disyunción",
            current: false
        },

        {
            path: "/documentation/condicionales",
            name: "Condicional y Equivalentes Lógicos",
            current: false
        },

        {
            path: "/documentation/cuantificadores",
            name: "Cuantificadores",
            current: false
        },

        {
            path: "/documentation/cuantificadoresanidados",
            name: "Cuantificadores Anidados",
            current: false
        },

        {
            path: "/documentation/pruebaporresolucion",
            name: "Prueba Por Resolución",
            current: false
        },
    ];


    const [data, setData] = React.useState(routes);

    // Detecta en que ruta se encuentra y se re-renderiza
    React.useEffect(() => {
        const current = data.find((route) => route.path === location.pathname);
        if (current) {
          data.forEach((route) => (route.current = false));
          current.current = true;
          setData([...data]);
        }
        console.log(data);
    }, [location]);
    
    return (
        <section className="sidebar">
            <div className="sidebar-header">
                <h1>Temas</h1>
            </div>
            <ul className="lists-group">
                {data.map((route, index) => {
                    return (
                        <li
                            className={`list-sidebar ${
                            route.current ? "result" : null
                            }`}
                            key={index}
                        >
                            <Link className="link" to={route.path}>
                            {route.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}