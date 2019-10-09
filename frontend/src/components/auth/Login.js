import React, { Component } from 'react';
import AUTH_SERVICE from '../../services/index';
import { Link } from 'react-router-dom'
import { Card, Input, Form } from 'antd';
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
        <Card style={{ width: '80vw', height: '80vh', backgroundImage: 'url("/assets/oval-bg.png")', backgroundSize: 'cover' }}>
          <div>
            <div style={{ width: '30vw' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h1 style={{ lineHeight: '2.2rem', marginTop: "7vh" }}>Vamos a comenzar</h1>
                <p style={{ fontSize: '2rem', lineHeight: '2.2rem' }}>¿Ya sabes en qué Estrategia LQ® vas a trabajar hoy?</p>
                <p>Login</p>
                  <Form onSubmit={this.onSubmit} style={{ marginTop: '5vh', width: '20vw' }}>
                    <Form.Item>
                      <label style={{ fontSize: '1rem', color: "#bdbdbb", padding: "0" }}>Username</label>
                      <br></br>
                      <Input onChange={this.handleInput} type="text" name="username" style={{ width: '20vw', backgroundColor: "#f0efe9" }} />
                    </Form.Item>
                    <Form.Item>
                      <label style={{ fontSize: '1rem', color: "#bdbdbb", padding: "0" }}>Password</label>
                      <br></br>
                      <Input
                        onChange={this.handleInput}
                        type="password"
                        name="password"
                        style={{ width: '20vw', backgroundColor: "#f0efe9" }}
                      />
                    </Form.Item>
                  </Form>
            <div style={{ margin: '0', padding: "0" }}>
              <Form onSubmit={this.onSubmit} style={{ marginTop: '5vh', width: '20vw' }}>
                <Form.Item>
                  <Input type="submit" value="Log In" style={{ width: '20vw', marginRight: '10vw', marginTop: '1vh' }} />
                </Form.Item>
              </Form>
            </div>
          </div>
          </div>
            </div>
        </Card>
        <p style={{ fontSize: '.9rem', width: '20vw', color: "#bdbdbb" }}>Si aún no tienes una cuenta, regístrate aquí<Link to="/signup">here</Link></p>
      </div>
      
    );
  }
}
// Login.contextType = MyContext;
export default Login;