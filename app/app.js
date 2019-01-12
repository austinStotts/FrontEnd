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
        <div style={{margin:'30px'}}>
          <div style={{margin:'0px'}}>
            <Canvas clear={this.state.clear} weight={this.state.weight} color={`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`} width={screen.width - 70} height={screen.height - 500}/>
          </div>
          <div style={{margin:'20px'}}>
            <div style={{border:'1px solid black',borderRadius:'5px',width:'100px', height:'70px', display:'inline-block', backgroundColor:`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}}></div>
            <div style={{display:'inline-block'}}>
              <div style={{display:'inline-block', margin:'3px'}}>
                <Button special={styles.uiButton.base} text={'clear'} func={_=>this.setState({clear:Math.random()})}/>
                <Button text={'red'} special={styles.uiButton.base} func={_=>this.setState({red:255,green:65,blue:54})}/>
                <Button text={'blue'} special={styles.uiButton.base} func={_=>this.setState({red:0,green:116,blue:217})}/>
                <Button text={'green'} special={styles.uiButton.base} func={_=>this.setState({red:1,green:255,blue:112})}/>
              </div>
              <div style={{display:'inline-block'}}>
                <Button text={'orange'} special={styles.uiButton.base} func={_=>this.setState({red:255,green:133,blue:27})}/>
                <Button text={'purple'} special={styles.uiButton.base} func={_=>this.setState({red:177,green:13,blue:201})}/>
                <Button text={'teal'} special={styles.uiButton.base} func={_=>this.setState({red:57,green:204,blue:204})}/>
              </div>
            </div>
            <Slider name={'red'} label={' R'} min={1} max={255} func={this.red} default={this.state.red}/>
            <Slider name={'green'} label={' G'} min={1} max={255} func={this.green} default={this.state.green}/>
            <Slider name={'blue'} label={' B'} min={1} max={255} func={this.blue} default={this.state.blue}/>
            <Slider name={' size'} label={' SIZE'} min={2} max={50} func={this.weight} default={3}/>
          </div>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
