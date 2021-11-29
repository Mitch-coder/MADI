import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import {Navbar,Nav,Container} from "react-bootstrap"
import{BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from './Home';
import Documentation from './Documentation';
import Exercises from './Exercises';
import DesktopGame from './DesktopGame';
import AboutUs from './AboutUs';
import LogicaProposicional from './documentation/LogicaProposicional'
import Proposiciones from './documentation/Proposiciones'
import ProposicionesCondicionales from './documentation/PCYEL'
import Cuantificadores from './documentation/Cuantificadores'
import CuantificadoresAnidados from './documentation/CuantificadoresAnidados'
import PruebasPorResolucion from './documentation/PruebasPorResolucion'
import './styles/NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Madi</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
                  <Nav.Link as={Link} to={"/documentation/logicaproposicional"}>Documentacion</Nav.Link>
                  <Nav.Link as={Link} to={"/exercises"}>Ejercicios</Nav.Link>
                  <Nav.Link as={Link} to={"/desktopGame"}>Juego</Nav.Link>
                  <Nav.Link as={Link} to={"/aboutUs"}>Quienes somos</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercises" element={<Exercises/>}/>
            <Route path="/desktopGame" element={<DesktopGame/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="documentation" element={<Documentation/>}>
              <Route path="/documentation/logicaproposicional" element={<LogicaProposicional/>}/>
              <Route path="/documentation/proposiciones" element={<Proposiciones/>}/>
              <Route path="/documentation/condicionales" element={<ProposicionesCondicionales/>}/>
              <Route path="/documentation/cuantificadores" element={<Cuantificadores/>}/>
              <Route path="/documentation/cuantificadoresanidados" element={<CuantificadoresAnidados/>}/>
              <Route path="/documentation/pruebaporresolucion" element={<PruebasPorResolucion/>}/>
            </Route>
        </Routes>
        </>

      </Router>
    );
  }
}
