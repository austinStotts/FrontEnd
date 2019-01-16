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
      clear: '', // when changed, canvas rerenders
      red: Math.floor(Math.random() * 255), // red value for canvas
      green: Math.floor(Math.random() * 255), // green value for canvas
      blue: Math.floor(Math.random() * 255), // blue value for canvas
      weight:'3' // draw width for canvas
    }

    // bind functions
    this.red = this.red.bind(this);
    this.green = this.green.bind(this);
    this.blue = this.blue.bind(this);
    this.weight = this.weight.bind(this);
    this.clear = this.clear.bind(this);
  }

  red (value) { // set red value from slider
    this.setState({red:value});
  }

  green (value) { // set green value from slider
    this.setState({green:value});
  }

  blue (value) { // set blue value from slider
    this.setState({blue:value});
  }

  weight (value) { // set line width from slider
    this.setState({weight:value})
  }

  clear () {
    this.setState({clear:Math.random()});
  }




  render () {
    return (
      <div style={{margin:'0px'}}>
        <div style={{margin:'30px'}}>
          <Canvas 
            clearFunc={this.clear} 
            clear={this.state.clear} 
            weight={this.state.weight} 
            color={`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`} 
            width={window.innerWidth - 65} 
            height={window.innerHeight - 350}
          />
        </div>
        <div className="options">
          <div style={{border:'1px solid black',borderRadius:'5px',width:'150px', height:'110px', margin:'0px 5px 0px 0px', display:'inline-block', backgroundColor:`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}}></div>
          <div className="colors">
            <div style={{display:'inline-block', margin:'3px'}}>
              <Button text={'clear'} class={'clear'} func={_=>this.setState({clear:Math.random()})}/>
              <Button text={'red'} class={'red'} func={_=>this.setState({red:255,green:65,blue:54})}/>
              <Button text={'blue'} class={'blue'} func={_=>this.setState({red:0,green:116,blue:217})}/>
              <Button text={'green'} class={'green'} func={_=>this.setState({red:1,green:255,blue:112})}/>
            </div>
            <div style={{display:'inline-block'}}>
              <Button text={'orange'} class={'orange'} func={_=>this.setState({red:255,green:133,blue:27})}/>
              <Button text={'purple'} class={'purple'} func={_=>this.setState({red:177,green:13,blue:201})}/>
              <Button text={'teal'} class={'teal'} func={_=>this.setState({red:57,green:204,blue:204})}/>
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

ReactDOM.render(<App />, document.getElementById('root'));
