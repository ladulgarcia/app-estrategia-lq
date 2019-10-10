import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Card, Col, Row, Breadcrumb, Icon } from 'antd'
// const { TextArea } = Input;

class BoardCarrera extends Component {
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
          <h2>TABLERO DE ESTRATEGIA LQ® DE NEGOCIOS/CARRERA</h2>
          <Row gutter={30}>
            <Col span={4} offset={8}>
              <Card title="22. METAOBJETIVO" style={{ width: 230, height: 250 }} headStyle={{ background: "#9254de" }}>
                <p>
                  Para sentir satisfacción en mis actividades
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="22b. TRASCENDENCIA" style={{ width: 230, height: 250 }} headStyle={{ background: "#9254de" }}>
                <p>
                  Tener espacio para compartir con otros.
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
              <Card title="19. OBJETIVO 1" style={{ width: 230, height: 250 }} headStyle={{ background: "#f5222d" }}>
                <p>
                  Mantener mi salud.
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="20. OBJETIVO 2" style={{ width: 230, height: 250 }} headStyle={{ background: "#f5222d" }}>
                <p>
                  Entrar a una empresa de tecnología.
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="21. OBJETIVO 3" style={{ width: 230, height: 250 }} headStyle={{ background: "#f5222d" }}>
                <p>
                  Aprender JS avanzado.
                </p>
              </Card>
            </Col>
          </Row>
          <h3>OBJETIVOS</h3>
        </div>

        {/* *********************** OBSTÁCULOS *********************** */}
        <div style={{ background: '#ECECEC', padding: '5px' }}>
          <Row gutter={30}>
            <Col span={4} offset={2}>
              <Card title="14. SOMBRA" style={{ width: 230, height: 250 }} headStyle={{ background: "#40a9ff" }}>
                <p>
                  Mis limitaciones mentales.
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="15. CREENCIAS" style={{ width: 230, height: 250 }} headStyle={{ background: "#40a9ff" }}>
                <p>
                  Pensar que no puedo codear.
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="16. INVOLUCRADOS" style={{ width: 230, height: 250 }} headStyle={{ background: "#40a9ff" }}>
                <p>
                  N/A
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="17. ENTORNO" style={{ width: 230, height: 250 }} headStyle={{ background: "#40a9ff" }}>
                <p>
                  Edad por ser mujer.
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="18. CANDADO" style={{ width: 230, height: 250 }} headStyle={{ background: "#40a9ff" }}>
                <p>
                  10, está en mis manos hacer algo.
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
                  Regresar a correr y cuidar de nuevo mi alimentación.
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="12. TÁCTICA 2" style={{ width: 230, height: 250 }} headStyle={{ background: "#ffa940" }}>
                <p>
                  Terminar la revisión de CV y carta.
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="13. TÁCTICA 3" style={{ width: 230, height: 250 }} headStyle={{ background: "#ffa940" }}>
                <p>
                  Continuar con sistema de autoestudio en línea.
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
              <Card title="6. TALENTO" style={{ width: 230, height: 250 }} headStyle={{ background: "#13c2c2" }}>
                <p>
                  Persistente, organizo a las personas.
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="7. CAPITAL SOCIAL" style={{ width: 230, height: 250 }} headStyle={{ background: "#13c2c2" }}>
                <p>
                  Referencias en tecnología.
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="8. EQUIPO" style={{ width: 230, height: 250 }} headStyle={{ background: "#13c2c2" }}>
                <p>
                  N/A
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="9. INFRAESTRUCTURA" style={{ width: 230, height: 250 }} headStyle={{ background: "#13c2c2" }}>
                <p>
                  Experiencia y nuevas habilidades/conocimientos.
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="10. FINANCIERO" style={{ width: 230, height: 250 }} headStyle={{ background: "#13c2c2" }}>
                <p>
                  Mis ahorros.
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
              <Card title="1. ANTECEDENTES" style={{ width: 230, height: 250 }} headStyle={{ background: "#a0d911" }}>
                <p>
                  Trabajos donde no permiten crecimiento intelectual.
                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="2. ESTATUS" style={{ width: 230, height: 250 }} headStyle={{ background: "#a0d911" }}>
                <p>
                  Ajuste.
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="3. EMOCIONES" style={{ width: 230, height: 250 }} headStyle={{ background: "#a0d911" }}>
                <p>
                  Miedo (8), satisfacción (9)
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="4. GENTE" style={{ width: 230, height: 250 }} headStyle={{ background: "#a0d911" }}>
                <p>
                  Red de networking.
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="5. FINANZAS" style={{ width: 230, height: 250 }} headStyle={{ background: "#a0d911" }}>
                <p>
                  9
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


export default BoardCarrera;