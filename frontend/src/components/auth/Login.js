import React, { Component } from 'react';
import AUTH_SERVICE from '../../services/index';
// import { Link } from 'react-router-dom'
import { Input, Form } from 'antd';
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
      <div style={{}}>
        <div style={{ display: '', flexDirection: '', justifyContent: '' }}>
          <h1>Comencemos</h1>
          <p style={{ fontSize: '', lineHeight: '' }}>¿Ya sabes en qué Estrategia LQ® vas a trabajar hoy?</p>
          <p>Igresa aquí con tu usuario y contraseña</p>
          <Form onSubmit={this.onSubmit} style={{ marginTop: '', width: '' }}>
            <Form.Item>
              <label style={{ fontSize: '', color: "", padding: "" }}>Username</label>
              <br></br>
              <Input onChange={this.handleInput} type="text" name="username" style={{ width: '20vw', backgroundColor: "" }} />
            </Form.Item>
            <Form.Item>
              <label style={{ fontSize: '', color: "", padding: "" }}>Password</label>
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