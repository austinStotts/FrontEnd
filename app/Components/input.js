import React , { Component, PureComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

// ForwardRef allows access to that ref further down the tree.
// -> used here to allow clearing the input from outside the component.
const Input = forwardRef((props, ref) => {
  return (
    <div 
      style={props.specialDiv}
    >
      <input
        ref={ref}
        className={props.class}
        placeholder={props.placeholder}
        onChange={props.func}
        type={props.type}
      >
      </input>
    </div>
  )
}) 

Input.propTypes = {
  func: PropTypes.func.isRequired,
  text: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  special: PropTypes.object,
  specialDiv: PropTypes.object,
}


export default Input;
