import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Breadcrumb, Icon } from 'antd';
// import { Input, Form } from 'antd';

class CoachInst extends Component {
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
        {/* ********************************** CONDICION LQ ********************************** */}
        <div>
          <h1>PRELIMINARES COMO COACH</h1>
          <h2>Condición LQ®</h2>
          <p>Condición LQ® es el estado mental y emocional para poder acompañar a otros con la Estrategia LQ®. Si quieres acompañar a otros con las Herramientas LQ, es vital conservar la Condición LQ, es decir, mantener un estado mental y emocional que ayude a que la herramienta pueda ser útil para el otro.
              La Condición LQ se compone de tres elementos: <b>talento</b>, <b>presencia</b> y <b>aceptación total</b>.
            </p>

          <h3>Talento</h3>
          <p> Sólo puedes acompañar a alguien si crees en su talento, si no, es mejor no intentarlo, porque corres el riesgo de transmitir al otro lo que piensas de él.
            Imagina que quieres guiar a esa persona a la que consideras sin capacidad para lograr lo que se propone, ¿crees que puedas apoyarlo?
            Ver el talento de otros es un don, ¿estás dispuesto a despertarlo en ti? ¿Aceptarías el reto de buscar talento en todas las personas que te rodean?
            Y aunque no se los digas, si tú lo ves y lo reconoces, ya estás impulsándolo, eso es Liderazgo Quántico. Si además se lo dices, mejor, pero lo peor sería decirlo sin realmente creerlo.
            También es muy poderoso pensar en las personas que han visto tu talento, ¿ha habido alguien en tu vida que creyó en ti, incluso más de lo que tú creíste en ti mismo?
            </p>

          <h3>Aceptación total</h3>
          <p> El segundo elemento de la <b>Condición LQ®</b> es la Aceptación Total hacia la persona que vas a acompañar, se trata de respetar su propio ritmo, sus propios tiempos, es comprender que cada quien vive sus propia evolución.
            Siempre hay oportunidades de ejercitar nuestra Condición LQ, porque no importa quién sea ni cómo sea la otra persona, sino el manejo mental y emocional que tú tienes cuando estás con ella. Aceptar al otro es encontrar paz en ti, liberarlo y liberarte al crecimiento.
            Aceptar no significa que permitas que el otro abuse de ti o te insulte, significa poner un límite pero no engancharse. No es algo fácil, es un trabajo de vida, es lograr una condición.
            Puedes asociar este segundo elemento con el centro de tu cuerpo, a la altura del corazón. Pon en tu mente esa parte de tu cuerpo y decreta:
            “Soy capaz de aceptar y respetar mis ritmos de crecimiento y de quienes me rodean.”
              </p>
          <h3>Presencia</h3>
          <p> El primer elemento de la Condición LQ® es el Talento, porque no podemos guiar a alguien que creemos que no puede salir adelante. El segundo es la Aceptación Total, porque no podríamos impulsar a alguien a quien no respetamos y el tercero es la Presencia.
            ¿Cómo podríamos acompañar a alguien si, en vez de escucharlo, nuestra mente está en otro lado?
            Recuerda que tienes frente a ti a un Ser Humano con proyectos y sueños. Antes de comenzar una sesión repite:
                “<i>Soy capaz de escuchar y estar presente cuando acompaño a otros</i>.”
            </p>

          <b><h3>Proyecto</h3></b>
          <b>¡Ahora sí, comencemos el acompañamiento de un Ser Humano en sus proyectos!</b>
          <div>
              <Link to="/QuizVida"><Button type="primary"> Estrategia de Vida</Button></Link>
              <Link to="/QuizCarrera"><Button type="danger">Estrategia de Carrera</Button></Link>
            </div>
          <br />
        </div>
      </div>
    )
  }
}

export default CoachInst;