import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Card } from 'antd';
import { Button, Breadcrumb, Icon } from 'antd';

class CoacheeInst extends Component {
  logout() {
    localStorage.clear();
    window.location.href = '/';
}
  render() {
    return (
      <div>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <Icon type="home" theme="filled" />
              <span>Inicio</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={this.logout}>
              <Icon type="close-circle" theme="filled" />
              <span>Salir</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div >
          <div>
            <h1>PRELIMINARES COMO COACHEE</h1>
            <p>Se recomienda que trabajes en tu tablero de Vida o Carrera de la mano de tu coach o tu líder de la organización donde laboras.
              Se sugiere imprimir el tablero <b> Estrategia LQ®</b> en blanco para que tengas un borrador durante el trabajo con tu coach. El proceso será de la mano de tu coach y en el tablero solo se plasman ideas clave.
            </p>
            <div>
              <Link to="/BoardVida"><Button type="primary">Tablero en blanco de vida</Button></Link>
              <Link to="/BoardCarrera"><Button type="danger">Tablero en blanco de Carrera</Button></Link>
            </div>
            <p> Una vez que llenes el tablero con tu proyecto de vida o carrera, el ver el acomodo genera una sensación de logro, de camino, de acción.
            </p>
            <p> Cuando termines de trabajar con tu tablero, imprímelo y colócalo en un lugar donde lo tengas a la vista la mayor parte de tu día y que puedas verlo en modo “zoom-out”.
            <br />
              <i> <b> El tablero de vida y de negocios es una herramienta que nos permite actuar tomando en cuenta el todos los espectros en la vida del Ser Humano.</b></i>
            </p>

            <b><h3>Proyecto</h3></b>
            <b>¡Ahora sí, comencemos! </b>Escoge en qué proyecto quieres trabajar con tu tablero de Estrategia LQ®: 
            <br /><br />

            <div>
              <Link to="/QuizVida"><Button type="primary"> Estrategia de Vida</Button></Link>
              <Link to="/QuizCarrera"><Button type="danger">Estrategia de Carrera</Button></Link>
            </div>
            <br />
            <i> “El mejor ajedrecista es el que ve el tablero completo”</i> - Garry Kasparov
          </div>
        </div>
      </div>
    )
  }
}

export default CoacheeInst;