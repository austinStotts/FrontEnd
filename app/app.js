// NPM Modules
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';

// components from files
import Link from './Components/link';
import Button from './Components/button';
import Mouse from './Components/mouse';
import Input from './Components/input';
import Bar from './Components/bar';
import Repeat from './Components/repeat';
import Login from './Components/login';
import Rooms from './Components/rooms';
import Canvas from './Components/canvas';
import Slider from './Components/slider';

// styles
import styles from './styles';


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      color: 'red',
      clear: '',
      red: Math.floor(Math.random() * 255),
      green: Math.floor(Math.random() * 255),
      blue: Math.floor(Math.random() * 255),
      weight: 3
    }
    this.login = this.login.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.red = this.red.bind(this);
    this.green = this.green.bind(this);
    this.blue = this.blue.bind(this);
    this.weight = this.weight.bind(this);
  }

  login () {
    this.setState({login:true})
  }

  changeColor (color) {
    this.setState({color})
  }

  red (value) {
    this.setState({red:value});
  }

  green (value) {
    this.setState({green:value});
  }

  blue (value) {
    this.setState({blue:value});
  }

  weight (value) {
    this.setState({weight:value})
  }




  render () {
    if(this.state.login) {
      return (
        <div style={styles.uiDiv.base}>
          <Login login={this.login}/>
        </div>
      )
    }

    else {
      return (
        <div>
          <div style={{margin:'30px'}}>
            <Canvas clear={this.state.clear} weight={this.state.weight} color={`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`} width={screen.width - 100} height={screen.height - 400}/>
          </div>
          <div style={{margin:'20px'}}>
            <Button special={styles.uiButton.base} text={'clear'} func={_=>this.setState({clear:Math.random()})}/>
            <div style={{width:'100px', height:'70px', backgroundColor:`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}}></div>
            <Slider min={1} max={255} func={this.red} default={this.state.red}/>
            <Slider min={1} max={255} func={this.green} default={this.state.green}/>
            <Slider min={1} max={255} func={this.blue} default={this.state.blue}/>
            <Slider min={2} max={50} func={this.weight} default={3}/>
          </div>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
