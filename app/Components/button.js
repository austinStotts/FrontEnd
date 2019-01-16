import React , { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div className="buttonDiv" style={this.props.specialDiv}>
        <button
          className={this.props.class}
          onClick={this.props.func}
          style={this.props.special}
        >
          {this.props.text}
        </button>
      </div>
    )
  }
}

Button.propTyps = {
  text: PropTypes.string.isRequired,
  func: PropTypes.func,
  special: PropTypes.object,
  specialDiv: PropTypes.object,
  calss: PropTypes.string
}

export default Button;