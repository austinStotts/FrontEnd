import React , { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Mouse extends PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div 
        onMouseMove={this.props.func}
        style={{
          display:'inline',
          width:'100%',
          height:'100%',
          backgroundColor:'red'
        }}
      >
      </div>
    )
  }
}

export default Mouse;