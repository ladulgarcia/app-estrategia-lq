import React, { Component } from 'react';
import AUTH_SERVICE from '../../services/index';
// import { Link } from 'react-router-dom'
import { Input, Form, Breadcrumb, Icon } from 'antd';
import { MyContext } from '../../context';

class Login extends Component {
  state = {
    user: {}
  };

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  };

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.login(this.state.user)
      .then((response) => {
        console.log(this.state.user);
        this.context.logUser(response.data.user);
        if (response.data.user.role === 'Coach') {
          this.props.history.push('/CoachInst');
        } else {
          this.props.history.push('/coacheeInst');
        }

      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          </Breadcrumb>
        </div>
        <br />

        <div style={{ display: '', flexDirection: '', justifyContent: '' }}>
          <h1>Comencemos</h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '' }}>¿Ya sabes en qué Estrategia LQ® vas a trabajar hoy?</p>
          <p><h3>Ingresa aquí con tu usuario y contraseña</h3></p>
          <Form onSubmit={this.onSubmit} style={{ marginTop: '', width: '' }}>
            <Form.Item>
              <label style={{ fontSize: '', color: "", padding: "" }}>Usuario</label>
              <br></br>
              <Input onChange={this.handleInput} type="text" name="username" style={{ width: '20vw', backgroundColor: "" }} />
            </Form.Item>
            <Form.Item>
              <label style={{ fontSize: '', color: "", padding: "" }}>Contraseña</label>
              <br></br>
              <Input
                onChange={this.handleInput}
                type="password"
                name="password"
                style={{ width: '20vw', backgroundColor: "#f0efe9" }}
              />
            </Form.Item>
            <Form.Item>
              <Input type="submit" value="Log In" style={{ width: '20vw' }} />
            </Form.Item>
          </Form>
          <div style={{ margin: '0', padding: "0" }}>
          </div>
        </div>
      </div>

    );
  }
}
Login.contextType = MyContext;
export default Login;