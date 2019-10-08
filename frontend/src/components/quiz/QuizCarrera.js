import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import { Card } from 'antd'

// const { TextArea } = Input;

class QuizCarrera extends Component {
  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card title="Card title" bordered={true} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    )
  }
}

export default QuizCarrera;