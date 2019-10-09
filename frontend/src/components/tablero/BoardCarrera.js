import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Card } from 'antd';
import { Card, Col, Row } from 'antd'
// const { TextArea } = Input;

class BoardCarrera extends Component {
  render() {
    return (
      <div>
        {/* ************************ HEADER ************************ */}
        <header>
          <div>
            <Link to="/signup">Sign up</Link>
            <Link to="Login">Log in</Link>
          </div>
        </header>


        {/* *********************** METAOBJETIVOS *********************** */}
        <div style={{ background: '#ECECEC', padding: '5px' }}>
          <h2>TABLERO DE ESTRATEGIA LQ® DE NEGOCIOS/CARRERA</h2>
          <Row gutter={30}>
            <Col span={4} offset={8}>
              <Card title="22. METAOBJETIVO" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="22b. TRASCENDENCIA" style={{ width: 230, height: 250 }}>
                <p>

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
              <Card title="19. OBJETIVO 1" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="20. OBJETIVO 2" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="21. OBJETIVO 3" style={{ width: 230, height: 250 }}>
                <p>

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
              <Card title="14. SOMBRA" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="15. CREENCIAS" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="16. INVOLUCRADOS" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="17. ENTORNO" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="18. CANDADO" style={{ width: 230, height: 250 }}>
                <p>

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
              <Card title="11. TÁCTICA 1" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="12. TÁCTICA 2" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="13. TÁCTICA 3" style={{ width: 230, height: 250 }}>
                <p>

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
              <Card title="6. TALENTO" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="7. CAPITAL SOCIAL" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="8. EQUIPO" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="9. INFRAESTRUCTURA" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="10. FINANCIERO" style={{ width: 230, height: 250 }}>
                <p>

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
              <Card title="1. ANTECEDENTES" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="2. ESTATUS" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="3. EMOCIONES" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="4. GENTE" style={{ width: 230, height: 250 }}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="5. FINANZAS" style={{ width: 230, height: 250 }}>
                <p>

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