import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import AUTH_SERVICE from '../../services/index';

import { Card, Col, Row, Breadcrumb, Icon } from 'antd'
// const { TextArea } = Input;

class BoardVida extends Component {

  componentDidMount() {
    AUTH_SERVICE.getVida()
      .then((response) => {
        console.log(response);
        // this.context.logUser(response.data.estado_actual);
      })
  };

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


        {/* *********************** METAOBJETIVOS *********************** */}
        <div style={{ background: '#ECECEC', padding: '5px' }}>
          <h2>TABLERO DE ESTRATEGIA LQ® DE VIDA</h2>
          <Row gutter={30}>
            <Col span={4} offset={8}>
              <Card title="21. PERSONAL" style={{ width: 230, height: 250 }} headStyle={{ background: "#9254de" }}>
                <p>
                  Para comenzar una nueva vida.
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="21b. COLECTIVO" style={{ width: 230, height: 250 }} headStyle={{ background: "#9254de" }}>
                <p>
                Vamos a comenzar una nueva vida.
                </p>
              </Card>
            </Col>
          </Row>
          <h3> <b>METAOBJETIVOS - Mi trascendencia</b></h3>
        </div>

        {/* *********************** OBJETIVOS *********************** */}
        <div style={{ background: '#ECECEC', padding: '5px' }}>
          <Row gutter={30}>
            <Col span={4} offset={6}>
              <Card title="18. OBJETIVO 1" style={{ width: 230, height: 250 }} headStyle={{ background: "#f5222d" }}>
                <p>
                Casa nueva
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="19. OBJETIVO 2" style={{ width: 230, height: 250 }} headStyle={{ background: "#f5222d" }}>
                <p>
                Nuevo trabajo
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="20. OBJETIVO 3" style={{ width: 230, height: 250 }} headStyle={{ background: "#f5222d" }}>
                <p>
                Cambiar residencia.
                </p>
              </Card>
            </Col>
          </Row>
          <h3>OBJETIVOS</h3>
        </div>

        {/* *********************** OBSTÁCULOS *********************** */}
        <div style={{ background: '#ECECEC', padding: '5px' }}>
          <Row gutter={30}>
            <Col span={4} offset={4}>
              <Card title="14. EXTERNO" style={{ width: 230, height: 250 }} headStyle={{ background: "#40a9ff" }}>
                <p>
                El idioma.
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="15. SOMBRA" style={{ width: 230, height: 250 }} headStyle={{ background: "#40a9ff" }}>
                <p>
                Perfeccionismo.
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="16. PATRÓN" style={{ width: 230, height: 250 }} headStyle={{ background: "#40a9ff" }}>
                <p>
                Perfeccionista.
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="17. CREENCIA" style={{ width: 230, height: 250 }} headStyle={{ background: "#40a9ff" }}>
                <p>
                Pensar que no puedo trabajar por no hablar español.
                </p>
              </Card>
            </Col>
          </Row>
          <h3>OBSTÁCULOS</h3>
        </div>



        {/* ***************************** TÁCTICAS **************************************** */}
        <div style={{ background: '#ECECEC', padding: '5px' }}>
          <Row gutter={30}>
            <Col span={4} offset={6}>
              <Card title="11. TÁCTICA 1" style={{ width: 230, height: 250 }} headStyle={{ background: "#ffa940" }}>
                <p>
                Busqueda de casa.
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="12. TÁCTICA 2" style={{ width: 230, height: 250 }} headStyle={{ background: "#ffa940" }} >
                <p>
                Revisión en internet
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="13. TÁCTICA 3" style={{ width: 230, height: 250 }} headStyle={{ background: "#ffa940" }}>
                <p>
                Busqueda trabajo.
                </p>
              </Card>
            </Col>
          </Row>
          <h3>TÁCTICAS</h3>
        </div>

        {/* *********************** RECURSOS *********************** */}
        <div style={{ background: '#ECECEC', padding: '5px' }}>
          <Row gutter={30}>
            <Col span={4} offset={2}>
              <Card title="6. APRENDIZAJE" style={{ width: 230, height: 250 }} headStyle={{ background: "#13c2c2" }}>
                <p>
                Ingeniero, matemáticas, salud y bienestar.
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="7. SOCIAL" style={{ width: 230, height: 250 }} headStyle={{ background: "#13c2c2" }}>
                <p>
                Business networking.
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="8. FINANCIERO" style={{ width: 230, height: 250 }} headStyle={{ background: "#13c2c2" }}>
                <p>
                Tengo un negocio +15 años, ahorro.
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="9. TALENTO" style={{ width: 230, height: 250 }} headStyle={{ background: "#13c2c2" }}>
                <p>
                  Disciplinado, analítico.
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="10. RECREATIVO" style={{ width: 230, height: 250 }} headStyle={{ background: "#13c2c2" }}>
                <p>
                  Correr y basquetbol.
                </p>
              </Card>
            </Col>
          </Row>
          <h3>RECURSOS</h3>
        </div>

        {/* *********************** ESTADO ACTUAL *********************** */}
        <div style={{ background: '#ECECEC', padding: '5px' }}>
          <Row gutter={30}>
            <Col span={4} offset={2}>
              <Card title="1. FAMILIA Y PAREJA" style={{ width: 230, height: 250 }} headStyle={{ background: "#a0d911" }}>
                <p>

                  Estamos en constante comunicación, a la distancia

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="2. SALUD" style={{ width: 230, height: 250 }} headStyle={{ background: "#a0d911" }}>
                <p>
                Bajé de peso y no he comido adecuadamente
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="3. EMOCIONES" style={{ width: 230, height: 250 }} headStyle={{ background: "#a0d911" }}>
                <p>
                  Feliz y aliviado, fin de ironhack
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="4. PROFESIONAL" style={{ width: 230, height: 250 }} headStyle={{ background: "#a0d911" }}>
                <p>
                Estudiante, nivel de satisfaccion 8.
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="5. ESPIRITUALIDAD" style={{ width: 230, height: 250 }} headStyle={{ background: "#a0d911" }}>
                <p>
                Me tomo el tiempo para apreciar buenos momentos y aprender de ello.
                </p>
              </Card>
            </Col>
          </Row>
          <h3>ESTADO ACTUAL</h3>
        </div>
        {/* ************************************* cierre ************************************* */}
      </div >
    )
  }
}


export default BoardVida;