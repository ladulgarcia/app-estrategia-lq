import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row, Input, Button, Breadcrumb, Icon } from 'antd'

class QuizCarrera extends Component {
  state = {
    estado_actual: {
      antecedentes: '',
      estatus: '',
      emociones: '',
      gente: '',
      finanzas: ''
    },
    recursos: {
      talento: '',
      capital_social: '',
      equipo: '',
      infraestructura: '',
      financiero: '',
    },
    obstaculos: {
      sombra: '',
      creencias: '',
      involucrados: '',
      entorno: '',
      candado: '',
    },
    objetivos: {
      objetivo1: '',
      objetivo2: '',
      objetivo3: '',
    },
    metaobjetivos: {
      metaobjetivo: '',
      trascendencia: '',
    },
    tacticas: {
      tactica1: '',
      tactica2: '',
      tactica3: '',
    }
  }

  handleInput = (e) => {
    const { estado_actual, recursos, obstaculos, objetivos, metaobjetivos, tacticas } = this.state;
    const { target } = e //for dummyes este es un destructuracion
    const { name, value } = target
    const key = name
    estado_actual[key] = value
    recursos[key] = value
    obstaculos[key] = value
    objetivos[key] = value
    metaobjetivos[key] = value
    tacticas[key] = value
    this.setState({ estado_actual, recursos, obstaculos, objetivos, metaobjetivos, tacticas })
    console.log(this.state)
  }

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
            <h2>FORMULARIO DE ESTRATEGIA LQ® DE NEGOCIOS/CARRERA EN TRES FASES</h2>

            <h4>RECUERDA: Es importante escribir las respuestas en palabras/ideas clave para que puedas revisarlo en una vista.</h4>
            <p>En esta sección es importante contestar las preguntas de arriba hacia abajo.
           <br /> Conforme avancemos, te darás cuenta que la numeración no sigue una secuencia con base en paradigmas o introyectos aprendidos.</p>
            <br />
            <p> <b>FASE 1:</b> Lee, revisa cada pregunta con tu coach y escribe palabras clave por cada pregunta.</p>

            {/* *********************** ESTADO ACTUAL *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3>ESTADO ACTUAL</h3>
              <Row gutter={30}>
                <Col span={4} offset={2}>
                  <Card title="1. ANTECEDENTES" style={{ width: 230 }} headStyle={{ background: "#a0d911" }}>
                    <br />
                    <br />
                    <p>¿Cuáles son los antecedentes de este proyecto?</p>
                    <br />
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="antecedentes" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="2. ESTATUS" style={{ width: 230 }} headStyle={{ background: "#a0d911" }}>
                    <p>¿En qué etapa de realización está este proyecto?
                      <br />(Opciones: Arranque / Ajuste / Planeación /
                      <br /> Stand by / Sueño
                      <br /> / solo ideas / Otro)</p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="estatus" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="3. EMOCIONES" style={{ width: 230 }} headStyle={{ background: "#a0d911" }}>
                    <p>¿Qué emoción(es) tienes con respecto a este proyecto?
                    Del 0 al 10, ¿qué tan intensas son? <i>(Si hay mas de una emoción, ¿en qué porcentaje está cada una de ellas?)</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="emociones" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="4. GENTE" style={{ width: 230 }} headStyle={{ background: "#a0d911" }}>
                    <br />
                    <p>¿Quiénes son los involucrados en este proyecto?
                    <br />¿Cuál es su estado con respecto a este proyecto?</p>
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="gente" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="5. FINANZAS" style={{ width: 230 }} headStyle={{ background: "#a0d911" }}>
                    <br />
                    <p>¿Cuál es la situación financiera actual con respecto a este proyecto?
                    <br />  Mídelo del 0 al 10</p>
                    <br />
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="finanzas" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>

            {/* *********************** RECURSOS *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3>RECURSOS</h3>
              <Row gutter={30}>
                <Col span={4} offset={2}>
                  <Card title="6. TALENTO" style={{ width: 230 }} headStyle={{ background: "#13c2c2" }}>
                    <p>¿Cuáles son los talentos que tienes para impulsar este proyecto?
                    Tip: El talento es algo para lo que eres muy bueno.</p>
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="talento" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="7. CAPITAL SOCIAL" style={{ width: 230 }} headStyle={{ background: "#13c2c2" }}>
                    <p>¿Con qué…
                    <br /> Contactos
                    <br />  Relaciones
                    <br /> Apoyos
                    <br /> … cuentas para este proyecto?</p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="capital_social" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="8. EQUIPO" style={{ width: 230 }} headStyle={{ background: "#13c2c2" }}>
                    <br />
                    <p>¿Con cuáles personas cuentas para este proyecto?
                      ¿Qué es lo que aportan?</p>
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="equipo" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="9. INFRAESTRUCTURA" style={{ width: 230 }} headStyle={{ background: "#13c2c2" }}>
                    <p>¿Cuál es la infraestructura con la que cuentas para este proyecto? <i>(Ej. Equipos de cómputo, teléfonos, instalaciones, sitio web, vehículos u otros)</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="infraestructura" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="10. FINANCIERO" style={{ width: 230 }} headStyle={{ background: "#13c2c2" }}>
                    <br />
                    <p>¿Con qué recursos económicos cuentas para este proyecto?</p>
                    <br />
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="financiero" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>

            {/* *********************** OBSTÁCULOS *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3>OBSTÁCULOS</h3>
              <Row gutter={30}>
                <Col span={4} offset={2}>
                  <Card title="14. SOMBRA" style={{ width: 230 }} headStyle={{ background: "#40a9ff" }}>
                    <p>¿Qué parte de ti está saboteando este proyecto? Tómate 20 segundos en silencio antes de responder.
                    <br /> <i>(Ej. Mi inseguridad, mi soberbia, mi rigidez, mi sobreprotección, mi Contreras interior, mi yo perfeccionista u otro)</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="sombra" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="15. CREENCIAS" style={{ width: 230 }} headStyle={{ background: "#40a9ff" }}>
                    <p>Identifica una creencia tuya que está obstaculizando este proyecto. Tómate 30 segundos en silencio antes de responder.
                    <br /><i>(Ej. Creo que no me lo merezco, el dinero es malo o que no se puede confiar en la gente)</i></p>
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="creencias" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="16. INVOLUCRADOS" style={{ width: 230 }} headStyle={{ background: "#40a9ff" }}>
                    <br />
                    <p>¿Existen situaciones o actitudes de los involucrados que estén afectando el proyecto?
                    <br /><i>(Ej. Resistencia al cambio, falta de comunicación, falta de compromiso, rotación, otros)</i></p>
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="involucrados" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="17. ENTORNO" style={{ width: 230 }} headStyle={{ background: "#40a9ff" }}>
                    <br />
                    <br />
                    <p>¿Hay algo en el que entorno que esté siendo un obstáculo para el proyecto? <i>(Ej. Mercado, competencia, tendencias, otros)</i></p>
                    <br />
                    <br />
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="entorno" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="18. CANDADO" style={{ width: 230 }} headStyle={{ background: "#40a9ff" }}>
                    <br />
                    <p>Del 0 al 10, ¿qué tanto está en tus manos este proyecto?
                    <br />¿Qué tanto te motiva?
                    <br />¿Y qué tan importante es?
		              <b>Nota: Si los valores son muy bajos, mejor cambia de proyecto.</b></p>
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="candado" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>

            {/* *********************** OBJETIVOS *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3>OBJETIVOS</h3>
              <p>¿Cuáles son los objetivos de este proyecto? o bien,
                <br /> ¿Cuáles son los tres principales objetivos del negocio, profesionales o de carrera en este momento?
                <br />(OJO 👁: con uno es suficiente, máximo tres).</p>
              <Row gutter={30}>
                <Col span={4} offset={6}>
                  <Card title="19. OBJETIVO 1" style={{ width: 230, height: 150 }} headStyle={{ background: "#f5222d" }}>
                    <p>

                    </p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="objetivo1" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="20. OBJETIVO 2" style={{ width: 230, height: 150 }} headStyle={{ background: "#f5222d" }}>
                    <p>

                    </p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="objetivo2" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="21. OBJETIVO 3" style={{ width: 230, height: 150 }} headStyle={{ background: "#f5222d" }}>
                    <p>

                    </p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="objetivo3" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>

            </div>

            {/* *********************** METAOBJETIVOS *********************** */}

            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3>METAOBJETIVOS</h3>
              <p>¿Cuáles son tus metaobjetivos de trascendencia personal y de trascendencia colectiva?</p>
              <Row gutter={30}>
                <Col span={5} offset={7}>
                  <Card title="22. METAOBJETIVO" style={{ width: 280 }} headStyle={{ background: "#9254de" }}>
                    <p>¿Para qué quieres lograr tus objetivos? (Nota: Pregúntate tres veces ¿para qué?)
                     <br /> <i>(Ej. ¿Para qué quieres poner tu negocio?: Para ser libre financieramente.
                           ¿Y para qué?: Para hacer lo que me gusta
                      ¿Y para qué?: Para sentirme pleno)</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="metaobjetivo" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="22b. TRASCENDENCIA" style={{ width: 280 }} headStyle={{ background: "#9254de" }}>
                    <br /><br />
                    <p>¿A dónde te llevará este proyecto?
                    <br />¿A quién impactará?
                    <br /> ¿De qué forma te hará trascender?</p>
                    <br /><br /><br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="trascendencia" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>


            <p> <b>FASE 2:</b> De las 5 preguntas al azar que aparecen en pantalla, únicamente escoge 3 con las cuales se trabajará la creatividad para la resolución de situaciones de negocios o profesionales.
            <br />No tienes que escribir nada, solamente trabajarlas con tu coach.</p>
            {/* *********************** CREATIVIDAD *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3>CREATIVIDAD</h3>
              <Row gutter={30}>
                <Col span={4} offset={2}>
                  <Card title="PREGUNTA AL AZAR 1" style={{ width: 230, height: 250 }} headStyle={{ background: "#ffec3d" }}>
                    <p>

                    </p>
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="PREGUNTA AL AZAR 2" style={{ width: 230, height: 250 }} headStyle={{ background: "#ffec3d" }}>
                    <p>

                    </p>
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="PREGUNTA AL AZAR 3" style={{ width: 230, height: 250 }} headStyle={{ background: "#ffec3d" }}>
                    <p>

                    </p>
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="PREGUNTA AL AZAR 4" style={{ width: 230, height: 250 }} headStyle={{ background: "#ffec3d" }}>
                    <p>

                    </p>
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="PREGUNTA AL AZAR 5" style={{ width: 230, height: 250 }} headStyle={{ background: "#ffec3d" }}>
                    <p>

                    </p>
                  </Card>
                </Col>
              </Row>
              <h3>ESTADO ACTUAL</h3>
            </div>

            {/* ***************************** FASE 3 **************************************** */}
            <p> <b>FASE 3:</b>En esta <b>Fase 3</b>, decidirás tus tres tácticas que te permitirán el logro de tus objetivos.<i> (Ej: Hacer una campaña publicitaria; bajar los costos.)</i></p>
            En la <b>Fase 1</b> planteaste dónde éstas y hacia dónde vas, con qué recursos cuentas y a qué obstáculos te enfrentas.
            <br />
            En la <b>Fase 2</b> generaste opciones para la resolución de situaciones de negocios o profesionales.
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3>TÁCTICAS</h3>
              <Row gutter={30}>
                <Col span={4} offset={6}>
                  <Card title="11. TÁCTICA 1" style={{ width: 230, height: 180 }} headStyle={{ background: "#ffa940" }}>
                    <p><i>Ej. Hacer una campaña publicitaria.</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="tactica1" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="12. TÁCTICA 2" style={{ width: 230, height: 180 }} headStyle={{ background: "#ffa940" }}>
                    <p><i>Ej. Comunicar a mi equipo/familia mi estrategia</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="tactica2" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="13. TÁCTICA 3" style={{ width: 230, height: 180 }} headStyle={{ background: "#ffa940" }}>
                    <p><i>Ej. bajar costos</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="tactica3" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>
            <p> Cuando termines de trabajar con tu tablero, imprímelo y colócalo en un lugar donde lo tengas a la vista la mayor parte de tu día y que puedas verlo en modo “zoom-out”.

              <i> <b> El tablero de vida y de negocios es una herramienta que nos permite actuar tomando en cuenta todos los espectros en la vida del Ser Humano.</b></i>
            </p>
          </div>
        </div>
        <div>
          <Link to="/BoardCarrera"><Button type="danger">Tablero con mi estrategia</Button></Link>
        </div>
      </div >
    )
  }
}

export default QuizCarrera;