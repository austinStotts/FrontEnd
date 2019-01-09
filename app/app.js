import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';

import Link from './Components/link'
import Button from './Components/button';

const btn = {
  width:'80px',
  height:'20px',
  borderRadius:'10px',
  outline:'none',
  fontSize:'14px'
}

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render () {
    return (
      <div>
        <Link text={'im a link'}/>
        <Button text={'enter'} func={() => console.log('click!')} special={btn}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))