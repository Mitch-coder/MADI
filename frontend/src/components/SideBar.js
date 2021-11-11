import React from 'react'
import './styles/SideBar.css'
import { Link, useLocation } from 'react-router-dom';

export function SideBar() {
    const location = useLocation();

    // Rutas en el arreglo para cada uno de los temas
    const routes = [
        {
            path: "/documentation/logica",
            name: "Logica",
            current: false
        },

        {
            path: "/documentation/cuantificadores",
            name: "Cuantificadores",
            current: false
        },

        {
            path: "/documentation/pruebaporresolucion",
            name: "Prueba Por Resolucion",
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
            <ul className="lists">
                <li className="list-sidebar">
                <div className="submenu">
                    <ul>
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
                </div>
                </li>
                <li className="list-sidebar"></li>
                <li className="list-sidebar"></li>
            </ul>
        </section>
    );
}