// NPM Modules
import React , { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

// components from files
import Link from './link';

// styles
import styles from '../styles';

class Rooms extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      rooms:  [
        <Link key={'a'} text={'room1'}/>,
        <Link key={'b'} text={'best room'}/>,
        <Link key={'c'} text={'just a normal room'}/>
      ]
    }
  }

  render () {
    return (
      <div>
        {this.state.rooms}
      </div>
    )
  }
}

export default Rooms;