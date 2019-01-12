// PM Modules
import React , { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

// components from files
import Input from './input';
import Button from './button';

// styles
import styles from '../styles';

class Login extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeUsername (event) {
    this.setState({username: event.target.value});
  }

  changePassword (event) {
    this.setState({password: event.target.value});
  }

  handleSubmit () {
    console.log(this.state.username, this.state.password);
    this.props.login();
  }

  render () {
    return (
      <div>
        <Input ref={'username'} placeholder={'username'} func={this.changeUsername} special={styles.uiInput.base}/>
        <Input ref={'password'} placeholder={'password'} func={this.changePassword} special={styles.uiInput.base} type={'password'}/>
        <Button text={'enter'} func={this.handleSubmit}/>
      </div>
    )
  }
}

export default Login;