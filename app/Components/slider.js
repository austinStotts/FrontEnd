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
        <input min={1} max={255} onChange={this.changeColor} type={'range'} style={{width:'200px'}}></input>
      </div>
    )
  }
}

export default Slider;