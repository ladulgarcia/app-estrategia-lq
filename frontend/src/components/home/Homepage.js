import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Card } from 'antd';

class Homepage extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/signup">Sign up</Link>
          <Link to="Login">Log in</Link>
        </div>
        <div >
          <div>
            <h1>Estrategia LQ® - proyecto de Vida y Carrera</h1>
            <p>Es la herramienta de Liderazgo Quántico que te ayuda a definir una estrategia clara para lograr tus proyectos tanto en el área personal como profesional. <br />
              Estrategia LQ fue creada por Jorge Cuevas, creador del sistema Liderazgo Quántico®, para empresarios, maestros, vendedores, estudiantes, amas de casa, <br />
              profesionistas y toda persona que desee tener claro dónde está, hacia dónde quiere ir y cómo lo logrará. <br />
            </p>
            <p>
              <b><h2> ¿Cuáles son los beneficios de utilizar Estrategia LQ?</h2></b>
              <ul>
                <li> Claridad para desarrollar proyectos </li>
                <li> Desarrollo de la visión “zoom-out” para considerar el todo.</li>
                <li> Identificación de obstáculos y recursos propios.</li>
                <li> Reconocimiento del auto sabotaje.</li>
                <li> Desarrollo del pensamiento estratégico.</li>
                <li> Ayuda a enfocarse en acciones que generan resultados exponenciales.</li>
                <li> Evita el desperdicio de energía en acciones sin transcendencia.</li>
                <li> Da flexibilidad para transformar estrategias.</li>
                <li> Disociación: reduce los niveles de estrés y aumenta los de motivación.</li>
                <li> Práctico: puedes diseñar tu  propio tablero, imprimirlo y modificar tu estrategia en cualquier momento.</li>
              </ul>
            </p>
            <p>
              <b><h3>Proyecto</h3></b>
              Escoge en qué proyecto quieres trabajar con tu tablero de Estrategia LQ®: <br />
              <i> “El mejor ajedrecista es el que ve el tablero completo”</i> - Garry Kasparov
            </p>
            <div>
              <Link to="/quizVida">Estrategia de Vida</Link>
              <Link to="quizCarrera">Estrategia de Carrera</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;


// import React, {Component} from 'react';
// import {MyContext} from '../context';
// import {Button} from 'antd';
// import {Link} from 'react-router-dom'

// class Homepage extends Component {

//   render() {
//     return (
//       <div>
//         <div>
//           <div>
//             <p>Estrategia LQ®</p>
//             <p>Proyecto de Vida y Carrera con Estrategia LQ®</p>
//             <Link to="/signup"> <Button type="submit" value="signup" style={{}}>Sign up</Button></Link>
//             <Link to="/login"> <Button type="submit" value="Login" style={{}}>Login</Button></Link>
//           </div >
//         </div >
//       </div >
//     )
//   }
// }
// Homepage.contextType = MyContext;
// export default Homepage;