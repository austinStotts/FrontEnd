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
          min={this.props.min} 
          max={this.props.max}  
          defaultValue={this.props.default}
          onChange={this.changeColor} 
          type={'range'} 
          style={{width:'200px', cursor:'pointer'}}
        >
        </input>
      </div>
    )
  }
}

export default Slider;