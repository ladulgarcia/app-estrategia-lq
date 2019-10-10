import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Breadcrumb, Icon } from 'antd';


class Homepage extends Component {
  
  render() {
    return (
      <div>
        <div>
          <Breadcrumb>
          <Breadcrumb.Item href="/">
              <Icon type="home" theme="filled" />
              <span>Inicio</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/signup">
              <Icon type="edit" theme="filled" />
              <span>Registro</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/login">
              <Icon type="unlock" theme="filled" />
              <span>Iniciar sesión</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={this.logout}>
              <Icon type="close-circle" theme="filled" />
              <span>Salir</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div style={{ background: 'white', padding: '60px' }}>

          {/* <div style={{ background: '#595959', padding: '80px', color: "white"}}> */}

          <div>
            <h1><b>Estrategia LQ® - proyecto de Vida y Carrera</b></h1>
            <p className='fontsizeHome'>Es la herramienta de Liderazgo Quántico que te ayuda a definir una estrategia clara
                <br />para lograr tus proyectos tanto en el área personal como profesional. <br />
              <br />
            </p>

          </div>

          <div>

            <p className='fontsizeHome'>
              <b><h2> ¿Beneficios de utilizar Estrategia LQ?</h2></b>
              <br />Claridad para desarrollar proyectos .
              <br />Desarrollo de la visión “zoom-out”.
              <br /> Identificación de obstáculos y recursos propios.
              <br />  Reconocimiento del auto sabotaje.
              <br />  Desarrollo del pensamiento estratégico.
              <br />  Ayuda a enfocarse en acciones que generan resultados exponenciales.
              <br />  Evita el desperdicio de energía en acciones sin transcendencia.
              <br />  Da flexibilidad para transformar estrategias.
            </p>
          </div>
        </div>
      </div>

    )
  }
}

export default Homepage;