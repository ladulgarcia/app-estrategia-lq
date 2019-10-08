import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Card } from 'antd';
import { Card, Col, Row, Input, Form } from 'antd'
// const { TextArea } = Input;

class QuizVida extends Component {
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
        <div >
          <div>
            <h2>FORMULARIO DE ESTRATEGIA LQ® DE VIDA EN TRES FASES</h2>

            <h4>RECUERDA: Es importante que las respuestas en el tablero sean palabras/ideas clave para que puedas revisarlo en una vista.</h4>
            <br />
            <p> <b>FASE 1:</b> Lee, revisa cada pregunta con tu coach y escribe palabras clave por cada pregunta.</p>

            {/* *********************** ESTADO ACTUAL *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3>ESTADO ACTUAL</h3>
              <Row gutter={30}>
                <Col span={4} offset={2}>
                  <Card title="1. FAMILIA Y PAREJA" style={{ width: 230 }}>
                    <p>¿Cómo es tu situación actual con….?
                      tu familia de origen (Ej. Estoy peleado con mi familia de origen)
                      Tu pareja (Ej. No tengo pareja desde hace un año)
              Tus hijos (Ej. Veo muy poco a mis hijos porque trabajo mucho)</p>
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="2. SALUD" style={{ width: 230 }}>
                    <p>¿Cómo consideras tu salud actualmente? (Ej. Bueno, regular, malo)
              ¿Cuáles son tus enfermedades más frecuentes y con qué las asocias? (Ej. Estreñimiento, lo asocio con que me cuesta trabajo soltar el control)</p>
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="3. EMOCIONES" style={{ width: 230 }}>
                    <p>En este momento, emocionalmente:
                  ¿Cómo es tu vida? (Califica del 1 al 10)
                  ¿Cuáles son las emociones más frecuentes? (Califica del 1 al 10)
              (Por ejemplo 8 emocionalmente inestable, enojado, desmotivado…..)</p>
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="4. PROFESIONAL" style={{ width: 230 }}>
                    <p>¿Cuál es tu actividad profesional actual? (ej. Maestro)
                  ¿Por qué estás ahí? (Ej. Porque mi papá era maestro)
                  ¿Cómo calificas tu desempeño? (Ej. Desempeño 10….)
              ¿Cuál es tu nivel de satisfacción? (Ej.Satisfacción 2….)</p>
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="5. ESPIRITUALIDAD" style={{ width: 230 }}>
                    <p>¿Cómo vives tu espiritualidad en este momento?
                      <br />
                      ¿Qué tan importante es para ti la espiritualidad?
                  <br />
                      ¿Qué tan satisfecho te sientes con tu espiritualidad?</p>
                    <br />
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>

            {/* *********************** RECURSOS *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3>RECURSOS</h3>
              <Row gutter={30}>
                <Col span={4} offset={2}>
                  <Card title="6. APRENDIZAJE" style={{ width: 230 }}>
                    <p>¿Cuál es tu formación académica? (Ej. mercadólogo)
                  ¿Qué conocimientos alternativos has adquirido? (Ej. inglés y portugués)
              ¿En qué áreas tienes experiencia? (Ej. cocina, pintura, análisis financieros)</p>
                    <br />
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="7. SOCIAL" style={{ width: 230 }}>
                    <p>¿Con qué relaciones contactos clave y apoyos cuentas para impulsar tu proyecto de vida?
                      <br />(Ej. Cuento con un maestro de vida y contactos clave de años que he pasado como vendedor)</p>
                    <br />
                    <br />
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="8. FINANCIERO" style={{ width: 230 }}>
                    <p>¿Qué tan conectado estás con la abundancia? (Ej. Extremadamente precavido)
                      ¿Cómo manejas tus recursos financieros? (Ej. Sin deudas)
                      ¿Con qué recursos financieros cuentas para tu proyecto de vida? (Ej. Pero tampoco tengo inversiones)</p>
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="9. TALENTO" style={{ width: 230 }}>
                    <p>¿Cuáles son tus dos principales talentos en la vida?
                      <br />(Ej. Mi talento son las relaciones públicas, pero no las aprovecho al 100%)
                      <br />
                      Talento 1:
                      <br />
                      <br />
                      Talento 2:</p>
                    <br />
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="10. RECREATIVO" style={{ width: 230 }}>
                    <p>¿Cuál es(son) tu(s) hobbies? (Ej. Jugar tenis)
                    ¿Qué tan satisfecho estás con el tiempo que le(s dedicas? (Ej. Dedico máximo 1 hora a la semana)
                   ¿Cuál es la consecuencia de ello? (Ej. Consecuencia: mucho estrés y sobrepeso)</p>
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>

            {/* *********************** OBSTÁCULOS *********************** */}
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3>OBSTÁCULOS</h3>
              <Row gutter={30}>
                <Col span={4} offset={4}>
                  <Card title="11. EXTERNO" style={{ width: 230 }}>
                    <br />
                    <br />
                    <p>¿Qué factores son en este momento un obstáculo en tu proyecto de vida?</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="12. SOMBRA" style={{ width: 230 }}>
                    <br />
                    <p>¿Qué parte(s) de ti está saboteando tu proyecto de vida? Tómate 30 segundos en silencio antes de responder. (Ej. Mi miedo a arriesgarme y mi perfeccionismo extremo)</p>
                    <br />
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="13. PATRÓN" style={{ width: 230 }}>
                    <p>¿Qué patrones son un obstáculo en tu proyecto de vida? Los patrones son situaciones, conductas y/o decisiones que has venido repitiendo en tu vida. (Ej. Dar demasiado y luego hacerme la víctima / Mi tendencia a endeudarme)</p>
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="14. CREENCIA" style={{ width: 230 }}>
                    <br />
                    <p>Identifica una creencia que esté obstaculizando tu proyecto de vida. (Ej. 1. Si gano mucho dinero me quedaré solo / 2. Hay que esforzarse mucho para merecer algo).</p>
                    <br />
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>

            {/* *********************** METAOBJETIVOS *********************** */}

            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3>METAOBJETIVOS</h3>
              <p>¿Cuáles son tus metaobjetivos de trascendencia personal y de trascendencia colectiva?</p>
              <Row gutter={30}>
                <Col span={4} offset={8}>
                  <Card title="16. PERSONAL" style={{ width: 230 }}>
                    <p>¿Para qué quieres lograr tus objetivos?
                      <br />
                      (Pregúntate tres veces “¿para qué?”
                      <br /> Hasta descubrir lo más profundo de tu motivación.
              (Ej. ¿Para qué?: Para crear un patrimonio / ¿Para qué?: Para tener más tiempo para mi / ¿Para qué?: Para sentirme más pleno. )</p>
                    <br />
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="17. COLECTIVA" style={{ width: 230 }}>
                    <p>En lo colectivo, ¿cuál es el propósito superior de tú proyecto de vida?
              (El propósito superior de un proyecto es el impacto que tiene más allá de ti, de tus intereses y tu ego. Los proyectos más exitosos tienen esta característica)
              (Ej. “Que mis hijos tengan un patrimonio” / “impactar la mentalidad de mi país”.)</p>
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>


            <p> <b>FASE 2:</b> De las 5 preguntas que aparecen en pantalla, escoge 3 con las cuales se trabajará la creatividad para la resolución de situaciones de la vida. No tienes que escribir nada, solamente trabajar cada una con tu coach.</p>
            {/* *********************** CREATIVIDAD *********************** */}
            <h3>CREATIVIDAD</h3>
            <b>AQUI APARECEN 5 PREGUNTAS DE MANERA RANDOM </b>
            <p>Pregunta 1:</p>
            <p>Pregunta 2:</p>
            <p>Pregunta 3:</p>
            <p>Pregunta 4:</p>
            <p>Pregunta 5:</p>
            <br />
            {/* ***************************** FASE 3 **************************************** */}
            <p> <b>FASE 3:</b>En esta <b>Fase 3</b>, decidirás tus tres tácticas que te permitirán el logro de tus objetivos. (Ej: Hacer una campaña publicitaria; comunicar a mi equipo o mi familia mi estrategia; bajar los costos.)</p>
            En la <b>Fase 1</b> planteaste dónde éstas y hacia dónde vas, con qué recursos cuentas y a qué obstáculos te enfrentas.
            <br />
            En la <b>Fase 2</b> generaste opciones para la resolución de situaciones de la vida o el trabajo diario.
            <div style={{ background: '#ECECEC', padding: '5px' }}>
              <h3>OBSTÁCULOS</h3>
              <Row gutter={30}>
                <Col span={4} offset={6}>
                  <Card title="TÁCTICA 1" style={{ width: 230 }}>
                    <br />
                    <p>Ejemplo de táctica</p>
                    <br />
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card title="TÁCTICA 2" style={{ width: 230 }}>
                    <br />
                    <p>Ejemplo de táctica</p>
                    <br />
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card title="TÁCTICA 3" style={{ width: 230 }}>
                    <br />
                    <p>Ejemplo de táctica</p>
                    <br />
                    <Input className="inputmeasure" maxlength="70" placeholder="Palabras clave" />
                  </Card>
                </Col>
              </Row>
            </div>





            <p> Cuando termines de trabajar con tu tablero, imprímelo y colócalo en un lugar donde lo tengas a la vista la mayor parte de tu día y que puedas verlo en modo “zoom-out”.
            <Form.Item>
                <Input type="submit" value="Tablero con mi estrategia" style={{ width: '20vw', marginRight: '0vw', marginTop: '1vh' }} />
              </Form.Item>
              <br />
              <i> <b> El tablero de vida y de negocios es una herramienta que nos permite actuar tomando en cuenta todos los espectros en la vida del Ser Humano.</b></i>
            </p>
          </div>
        </div>
      </div >
    )
  }
}

export default QuizVida;