import React, { Component } from 'react';
import AUTH_SERVICE from '../../services/index';
//import { Link } from 'react-router-dom'
import { Input, Form } from 'antd';

class Signup extends Component {
  state = {
    user: {}
  };

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  };

  onSelect = (e) => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.user)
    AUTH_SERVICE.signup(this.state.user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.history.push('/profile');
  };

  render() {
    return (
      <div>
         <div style={{ background: '#ECECEC', padding: '5px' }}>
          <div>
            <div>
              <h1>Sign Up</h1>
              <div>
                <Form onSubmit={this.onSubmit} style={{ marginTop: '5vh' }}>
                  <Form.Item>
                    <label>Username</label>
                   <br/>
                    <Input onChange={this.handleInput} type="text" name="username" style={{ width: '20vw', backgroundColor: "#f0efe9" }} />
                  </Form.Item>
                  <Form.Item>
                    <label>email</label>
                    <br/>
                    <Input onChange={this.handleInput} type="email" name="email" style={{ width: '20vw', backgroundColor: "#f0efe9" }} />
                  </Form.Item>
                  <Form.Item>
                    <label>Password</label>
                    <br/>
                    <Input
                      onChange={this.handleInput}
                      type="password"
                      name="password"
                      style={{ width: '20vw', backgroundColor: "#f0efe9" }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <label style={{ fontSize: '1rem', color: "#bdbdbb" }}>Role</label>
                    <br/>
                    <select
                      onChange={this.onSelect}
                      type="text"
                      name="role"
                      placeholder="Role"
                      style={{ width: '20vw', height: '4vh', backgroundColor: "#f0efe9" }}
                    >
                      <option>Select Role</option>
                      <option value='Coachee'>Coachee</option>
                      <option value='Coach'>Coach</option>
                    </select>
                  </Form.Item>
                  <Form.Item>
                    <Input type="submit" value="Signup" style={{ width: '20vw' }} />
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;