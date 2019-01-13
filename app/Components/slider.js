import React , { Component, PureComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

const Slider = forwardRef((props, ref) => {

  const changeColor = (event) => {
    props.func(event.target.value);
  }

  return (
    <div style={props.specialDiv}>
      <input 
        ref={ref}
        type={'range'} 
        min={props.min} 
        max={props.max}  
        name={props.name}
        defaultValue={props.default}
        onChange={changeColor} 
        style={props.special}
      >
      </input>
      <label 
        htmlFor={props.name} 
        style={props.specialLbl}
      >
      {props.label}
      </label>
    </div>
  )
})

Slider.propTypes = {
  func: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string,
  default: PropTypes.string,
  special: PropTypes.object,
  specialLbl: PropTypes.object,
  specialDiv: PropTypes.object,
}

export default Slider;