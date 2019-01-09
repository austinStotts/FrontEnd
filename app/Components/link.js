import React , { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Link extends PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div style={this.props.specialDiv}>
        <a
          href={this.props.link}
          style={this.props.special}
        >
        {this.props.text}
        </a>
      </div>
    )
  }
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  special: PropTypes.object,
  specialDiv: PropTypes.object
}

export default Link;

