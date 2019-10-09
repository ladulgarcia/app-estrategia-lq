import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Card } from 'antd';

class Homepage extends Component {
  render() {
    return (
      <div>
        <div style={{ background: '#ECECEC', padding: '5px' }}></div>
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
              <br/>Claridad para desarrollar proyectos 
              <br/>Desarrollo de la visión “zoom-out” para considerar el todo.
              <br/> Identificación de obstáculos y recursos propios.
              <br/>  Reconocimiento del auto sabotaje.
              <br/>  Desarrollo del pensamiento estratégico.
              <br/>  Ayuda a enfocarse en acciones que generan resultados exponenciales.
              <br/>  Evita el desperdicio de energía en acciones sin transcendencia.
              <br/>  Da flexibilidad para transformar estrategias.
              <br/>  Disociación: reduce los niveles de estrés y aumenta los de motivación.
              <br/>  Práctico: puedes diseñar tu  propio tablero, imprimirlo y modificar tu estrategia en cualquier momento.
            </p>
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