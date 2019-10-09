import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AUTH_SERVICE from '../../services/index';

import { Card, Col, Row } from 'antd'
// const { TextArea } = Input;

class BoardVida extends Component {

  componentDidMount() {
    AUTH_SERVICE.getVida()
      .then((response) => {
        console.log(response);
        // this.context.logUser(response.data.estado_actual);
      })
  };

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
          <h2>TABLERO DE ESTRATEGIA LQ® DE VIDA</h2>
          <Row gutter={30}>
            <Col span={4} offset={8}>
              <Card title="21. PERSONAL" style={{ width: 230, height: 250 }} headStyle={{background:"#9254de"}}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="21b. COLECTIVO" style={{ width: 230, height: 250 }} headStyle={{background:"#9254de"}}>
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
              <Card title="18. OBJETIVO 1" style={{ width: 230, height: 250 }} headStyle={{background:"#f5222d"}}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="19. OBJETIVO 2" style={{ width: 230, height: 250 }} headStyle={{background:"#f5222d"}}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="20. OBJETIVO 3" style={{ width: 230, height: 250 }} headStyle={{background:"#f5222d"}}>
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
            <Col span={4} offset={4}>
              <Card title="14. EXTERNO" style={{ width: 230, height: 250 }} headStyle={{background:"#40a9ff"}}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="15. SOMBRA" style={{ width: 230, height: 250 }} headStyle={{background:"#40a9ff"}}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="16. PATRÓN" style={{ width: 230, height: 250 }} headStyle={{background:"#40a9ff"}}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="17. CREENCIA" style={{ width: 230, height: 250 }} headStyle={{background:"#40a9ff"}}>
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
              <Card title="11. TÁCTICA 1" style={{ width: 230, height: 250 }} headStyle={{background:"#ffa940"}}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="12. TÁCTICA 2" style={{ width: 230, height: 250 }} >
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
              <Card title="6. APRENDIZAJE" style={{ width: 230, height: 250 }} headStyle={{background:"#13c2c2"}}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="7. SOCIAL" style={{ width: 230, height: 250 }} headStyle={{background:"#13c2c2"}}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="8. FINANCIERO" style={{ width: 230, height: 250 }} headStyle={{background:"#13c2c2"}}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="9. TALENTO" style={{ width: 230, height: 250 }} headStyle={{background:"#13c2c2"}}>
                <p>

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="10. RECREATIVO" style={{ width: 230, height: 250 }} headStyle={{background:"#13c2c2"}}>
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
              <Card title="1. FAMILIA Y PAREJA" style={{ width: 230, height: 250 }} headStyle={{background:"#a0d911"}}>
                <p>

                  HCAER UN SERVICIO QUE TRAIGA name="Familia_y_Pareja"

                </p>
              </Card>
            </Col>

            <Col span={4}>
              <Card title="2. SALUD" style={{ width: 230, height: 250 }} headStyle={{background:"#a0d911"}}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="3. EMOCIONES" style={{ width: 230, height: 250 }} headStyle={{background:"#a0d911"}}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="4. PROFESIONAL" style={{ width: 230, height: 250 }} headStyle={{background:"#a0d911"}}>
                <p>

                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="5. ESPIRITUALIDAD" style={{ width: 230, height: 250 }} headStyle={{background:"#a0d911"}}>
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


export default BoardVida;