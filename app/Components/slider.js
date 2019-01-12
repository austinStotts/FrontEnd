import React , { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Slider extends PureComponent {
  constructor (props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor (event) {
    this.props.func(event.target.value)
  }

  render () {
    return (
      <div>
        <input 
          name={this.props.name}
          min={this.props.min} 
          max={this.props.max}  
          defaultValue={this.props.default}
          onChange={this.changeColor} 
          type={'range'} 
          style={{width:'200px', cursor:'pointer', fontFamily:'Roboto, sans-serif'}}
        >
        </input>
        <label for={this.props.name} style={{fontFamily:'Roboto, sans-serif'}}>{this.props.label}</label>
      </div>
    )
  }
}

export default Slider;