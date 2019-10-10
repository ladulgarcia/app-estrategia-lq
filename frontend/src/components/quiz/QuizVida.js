import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row, Input, Button, Breadcrumb, Icon } from 'antd'

class QuizVida extends Component {
  state = {
    estado_actual: {
      Familia_y_Pareja: '',
      Salud: '',
      Emociones: '',
      Profesional: '',
      Espiritualidad: ''
    },
    recursos: {
      Aprendizaje: '',
      Social: '',
      Financiero: '',
      Talento: '',
      Recreativo: '',
    },
    obstaculos: {
      Externo: '',
      Sombra: '',
      Patron: '',
      Creencia: '',
    },
    objetivos: {
      Objetivo1: '',
      Objetivo2: '',
      Objetivo3: '',
    },
    metaobjetivos: {
      Personal: '',
      Colectivo: '',
    },
    tacticas: {
      Tactica1: '',
      Tactica2: '',
      Tactica3: '',
    }
  }

  handleInput = (e) => {
    const { estado_actual } = this.state;
    const { target } = e //for dummyes este es un destructuracion
    const { name, value } = target
    const key = name
    estado_actual[key] = value
    this.setState({ estado_actual })
    console.log(this.state)
  }

  handleInput = (e) => {
    const { recursos } = this.state;
    const { target } = e //for dummyes este es un destructuracion
    const { name, value } = target
    const key = name
    recursos[key] = value
    this.setState({ recursos })
    console.log(this.state)
  }

  handleInput = (e) => {
    const { obstaculos } = this.state;
    const { target } = e //for dummyes este es un destructuracion
    const { name, value } = target
    const key = name
    obstaculos[key] = value
    this.setState({ obstaculos })
    console.log(this.state)
  }

  handleInput = (e) => {
    const { objetivos } = this.state;
    const { target } = e //for dummyes este es un destructuracion
    const { name, value } = target
    const key = name
    objetivos[key] = value
    this.setState({ objetivos })
    console.log(this.state)
  }

  handleInput = (e) => {
    const { metaobjetivos } = this.state;
    const { target } = e //for dummyes este es un destructuracion
    const { name, value } = target
    const key = name
    metaobjetivos[key] = value
    this.setState({ metaobjetivos })
    console.log(this.state)
  }

  handleInput = (e) => {
    const { tacticas } = this.state;
    const { target } = e //for dummyes este es un destructuracion
    const { name, value } = target
    const key = name
    tacticas[key] = value
    this.setState({ tacticas })
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
            <h2>FORMULARIO DE ESTRATEGIA LQ® DE VIDA EN TRES FASES</h2>
            <h4>RECUERDA: Es importante escribir las respuestas en palabras/ideas clave para que puedas revisarlo en una vista.</h4>
            <p>En esta sección es importante contestar las preguntas de arriba hacia abajo.
           <br /> Conforme avancemos, te darás cuenta que la numeración no sigue una secuencia con base en paradigmas o introyectos aprendidos.</p>
            <br />
            <p> <b>FASE 1:</b> Lee, revisa cada pregunta con tu coach y escribe palabras clave por cada pregunta.</p>

            {/* *********************** ESTADO ACTUAL *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3><b>ESTADO ACTUAL</b></h3>
              <Row gutter={30}>
                <Col span={4} offset={2}>
                  <Card title="1. FAMILIA Y PAREJA" style={{ width: 230 }} headStyle={{ background: "#a0d911" }}>
                    <p>¿Cómo es tu situación actual con….?
                      tu familia de origen <i>(Ej. Estoy peleado con mi familia de origen)</i>
                      Tu pareja <i>(Ej. No tengo pareja desde hace un año)</i>
                      Tus hijos <i>(Ej. Veo muy poco a mis hijos porque trabajo mucho)</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Familia_y_Pareja" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="2. SALUD" style={{ width: 230 }} headStyle={{ background: "#a0d911" }}>
                    <p>¿Cómo consideras tu salud actualmente? <i>(Ej. Bueno, regular, malo)</i>
                      ¿Cuáles son tus enfermedades más frecuentes y con qué las asocias? <i>(Ej. Estreñimiento, lo asocio con que me cuesta trabajo soltar el control)</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Salud" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="3. EMOCIONES" style={{ width: 230 }} headStyle={{ background: "#a0d911" }}>
                    <p>En este momento, emocionalmente:
                  ¿Cómo es tu vida? <i>(Califica del 1 al 10)</i>
                      ¿Cuáles son las emociones más frecuentes? <i>(Califica del 1 al 10)
                  (Por ejemplo 8 emocionalmente inestable, enojado, desmotivado…)</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Emociones" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="4. PROFESIONAL" style={{ width: 230 }} headStyle={{ background: "#a0d911" }}>
                    <p>¿Cuál es tu actividad profesional actual? <i>(ej. Maestro)</i>
                      ¿Por qué estás ahí? <i>(Ej. Porque mi papá era maestro)</i>
                      ¿Cómo calificas tu desempeño? <i>(Ej. Desempeño 10….)</i>
                      ¿Cuál es tu nivel de satisfacción? <i>(Ej.Satisfacción 2….)</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Profesional" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="5. ESPIRITUALIDAD" style={{ width: 230 }} headStyle={{ background: "#a0d911" }}>
                    <p>¿Cómo vives tu espiritualidad en este momento?
                      <br />
                      ¿Qué tan importante es para ti la espiritualidad?
                  <br />
                      ¿Qué tan satisfecho te sientes con tu espiritualidad?</p>
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="Espiritualidad" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>

            {/* *********************** RECURSOS *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }} >
              <h3><b>RECURSOS</b></h3>
              <Row gutter={30}>
                <Col span={4} offset={2}>
                  <Card title="6. APRENDIZAJE" style={{ width: 230 }} headStyle={{ background: "#13c2c2" }}>
                    <p>¿Cuál es tu formación académica? <i>(Ej. mercadólogo)</i>
                      ¿Qué conocimientos alternativos has adquirido? <i>(Ej. inglés y portugués)</i>
                      ¿En qué áreas tienes experiencia? <i>(Ej. cocina, pintura, análisis financieros)</i></p>
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="Aprendizaje" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="7. SOCIAL" style={{ width: 230 }} headStyle={{ background: "#13c2c2" }}>
                    <p>¿Con qué relaciones contactos clave y apoyos cuentas para impulsar tu proyecto de vida?
                      <br /><i>(Ej. Cuento con un maestro de vida y contactos clave de años que he pasado como vendedor)</i></p>
                    <br />
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="Social" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="8. FINANCIERO" style={{ width: 230 }} headStyle={{ background: "#13c2c2" }}>
                    <p>¿Qué tan conectado estás con la abundancia? <i>(Ej. Extremadamente precavido)</i>
                      ¿Cómo manejas tus recursos financieros? <i>(Ej. Sin deudas)</i>
                      ¿Con qué recursos financieros cuentas para tu proyecto de vida? <i>(Ej. Pero tampoco tengo inversiones)</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Financiero" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="9. TALENTO" style={{ width: 230 }} headStyle={{ background: "#13c2c2" }}>
                    <p>¿Cuáles son tus dos principales talentos en la vida?
                      <br /><i>(Ej. Mi talento son las relaciones públicas, pero no las aprovecho al 100%)</i>
                      <br />
                      Talento 1:
                      <br />
                      <br />
                      Talento 2:</p>
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="Talento" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="10. RECREATIVO" style={{ width: 230 }} headStyle={{ background: "#13c2c2" }}>
                    <p>¿Cuál es(son) tu(s) hobbies? <i>(Ej. Jugar tenis)</i>
                      ¿Qué tan satisfecho estás con el tiempo que les dedicas? <i>(Ej. Dedico máximo 1 hora a la semana)</i>
                      ¿Cuál es la consecuencia de ello? <i>(Ej. Consecuencia: mucho estrés y sobrepeso)</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Recreativo" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>

            {/* *********************** OBSTÁCULOS *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3><b>OBSTÁCULOS</b></h3>
              <Row gutter={30}>
                <Col span={4} offset={4}>
                  <Card title="14. EXTERNO" style={{ width: 230 }} headStyle={{ background: "#40a9ff" }}>
                    <br />
                    <br />
                    <p>¿Qué factores son en este momento un obstáculo en tu proyecto de vida?</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="Externo" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="15. SOMBRA" style={{ width: 230 }} headStyle={{ background: "#40a9ff" }}>
                    <br />
                    <p>¿Qué parte(s) de ti está saboteando tu proyecto de vida? Tómate 30 segundos en silencio antes de responder. <i>(Ej. Mi miedo a arriesgarme y mi perfeccionismo extremo)</i></p>
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="Sombra" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="16. PATRÓN" style={{ width: 230 }} headStyle={{ background: "#40a9ff" }}>
                    <p>¿Qué patrones son un obstáculo en tu proyecto de vida? Los patrones son situaciones, conductas y/o decisiones que has venido repitiendo en tu vida. <i>(Ej. Dar demasiado y luego hacerme la víctima / Mi tendencia a endeudarme)</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Patron" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="17. CREENCIA" style={{ width: 230 }} headStyle={{ background: "#40a9ff" }}>
                    <br />
                    <p>Identifica una creencia que esté obstaculizando tu proyecto de vida. <i>(Ej. 1. Si gano mucho dinero me quedaré solo / 2. Hay que esforzarse mucho para merecer algo)</i>.</p>
                    <br />
                    <Input className="inputmeasure" onChange={this.handleInput} name="Creencia" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>

            {/* *********************** OBJETIVOS *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3><b>OBJETIVOS</b></h3>
              <p>¿Cuáles son los tres principales objetivos de tu vida en este momento?
              <br />   <i>(Pueden ser personales, profesionales o de lo que sea tu prioridad en este momento.
        <br />Lo importante de estos objetivos es que tienen que representar algo por lo que para ti vale la pena vivir)</i></p>
              <Row gutter={30}>
                <Col span={4} offset={6}>
                  <Card title="18. OBJETIVO 1" style={{ width: 230, height: 150 }} headStyle={{ background: "#f5222d" }}>
                    <p>

                    </p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Objetivo1" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="19. OBJETIVO 2" style={{ width: 230, height: 150 }} headStyle={{ background: "#f5222d" }}>
                    <p>

                    </p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Objetivo2" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="20. OBJETIVO 3" style={{ width: 230, height: 150 }} headStyle={{ background: "#f5222d" }}>
                    <p>

                    </p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Objetivo3" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>

            </div>

            {/* *********************** METAOBJETIVOS *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3><b>METAOBJETIVOS</b></h3>
              <p>¿Cuáles son tus metaobjetivos de trascendencia personal y de trascendencia colectiva?</p>
              <Row gutter={30}>
                <Col span={5} offset={7}>
                  <Card title="21. PERSONAL" style={{ width: 280 }} headStyle={{ background: "#9254de" }}>
                    <p>¿Para qué quieres lograr tus objetivos?
                      <br />
                      (Pregúntate tres veces “¿para qué?”)
                      <br /> Hasta descubrir lo más profundo de tu motivación.
              <i>(Ej. ¿Para qué?: Para crear un patrimonio / ¿Para qué?: Para tener más tiempo para mi / ¿Para qué?: Para sentirme más pleno. )</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Personal" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="21b. COLECTIVO" style={{ width: 280 }} headStyle={{ background: "#9254de" }}>
                    <p>En lo colectivo, ¿cuál es el propósito superior de tú proyecto de vida?
              <i>(El propósito superior de un proyecto es el impacto que tiene más allá de ti, de tus intereses y tu ego. Los proyectos más exitosos tienen esta característica)
              (Ej. “Que mis hijos tengan un patrimonio” / “impactar la mentalidad de mi país”.)</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Colectivo" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>


            <p> <b>FASE 2:</b> De las 5 preguntas al azar que aparecen en pantalla, únicamente escoge 3 con las cuales se trabajará la creatividad para la resolución de situaciones de la vida.
            <br />No tienes que escribir nada, solamente trabajarlas con tu coach.</p>
            {/* *********************** CREATIVIDAD *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3><b>CREATIVIDAD</b></h3>
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
            <p> <b>FASE 3:</b>En esta <b>Fase 3</b>, decidirás tus tres tácticas que te permitirán el logro de tus objetivos.<i> (Ej: Hacer una campaña publicitaria; comunicar a mi equipo o mi familia mi estrategia; bajar los costos.)</i></p>
            En la <b>Fase 1</b> planteaste dónde éstas y hacia dónde vas, con qué recursos cuentas y a qué obstáculos te enfrentas.
            <br />
            En la <b>Fase 2</b> generaste opciones para la resolución de situaciones de la vida o el trabajo diario.
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3><b>TÁCTICAS</b></h3>
              <Row gutter={30}>
                <Col span={4} offset={6}>
                  <Card title="11. TÁCTICA 1" style={{ width: 230, height: 180 }} headStyle={{ background: "#ffa940" }}>
                    <p><i>Ej. Hacer una campaña publicitaria.</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Tactica1" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="12. TÁCTICA 2" style={{ width: 230, height: 180 }} headStyle={{ background: "#ffa940" }}>
                    <p><i>Ej. Comunicar a mi equipo/familia mi estrategia</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Tactica2" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="13. TÁCTICA 3" style={{ width: 230, height: 180 }} headStyle={{ background: "#ffa940" }}>
                    <p><i>Ej. bajar costos</i></p>
                    <Input className="inputmeasure" onChange={this.handleInput} name="Tactica3" maxlength="70" placeholder="Palabras clave" />
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
          <Link to="/BoardVida"><Button type="primary">Tablero de vida</Button></Link>
        </div>
      </div >
    )
  }
}

export default QuizVida;