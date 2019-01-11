import React , { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Bar extends PureComponent { // not working !!
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div style={{
        gridTemplate:`1fr / repeat(${this.props.children.count}, 1fr)`
      }}>
        {this.props.children}
      </div>
    )
  }
}

export default Bar;