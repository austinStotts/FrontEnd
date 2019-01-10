import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';

import Link from './Components/link';
import Button from './Components/button';
import Mouse from './Components/mouse';
import Input from './Components/input';

const btn = {
  width:'80px',
  height:'20px',
  borderRadius:'10px',
  outline:'none',
  fontSize:'14px'
}

const link = {
  fontSize:'18px',
}

const linkDiv = {
  border:'0px',
  padding:'0px',
  margin:'0px'
}

const div = {
  minWidth:'100%',
  minHeight:'100%',
  padding:'0%',
  margin:'0%',
}

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      x: '50%',
      y: '50%',
      input: ''
    }
    this.handleMouse = this.handleMouse.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  handleMouse (event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  changeInput (event) {
    this.setState({input:event.target.value});
  }

  render () {
    return (
      <div 
        onMouseMove={this.handleMouse}
        style={div}
      >
        <Link text={'hello :)'} special={{position:'absolute', left:this.state.x + 20, top:this.state.y}}/>
        <Input ref={'myInput'} placeholder={'input...'} func={this.changeInput}/>
        <Button text={'enter'} func={() => this.refs.myInput.value = ''} special={btn}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));