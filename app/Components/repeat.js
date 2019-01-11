import React , { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const Repeat = (props) => {
  let comps = [];
  for(let i = 0; i < props.times; i++) {
    comps.push(props.children(i));
  }
  return (
    <div style={{margin:'10px'}}>
      {comps}
    </div>
  )
}

export default Repeat;