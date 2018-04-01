// Dependencias
import React, { Component } from 'react';
import { auth, provider } from '../firebase.js';
import Home from './Home';
import Header from './Header';

// Assest
import './../App.css';

class Login extends Component {
  constructor() {
  super();
  this.state = {
    user: null // estado inicial del usuario null
  };
  this.log = this.log.bind(this);
  this.logout = this.logout.bind(this);
}
// mantener la sesión del usuario abierta
componentDidMount() {
  auth.onAuthStateChanged(user => {
    if (user) {
      this.setState({ user });
    }
  });
}
// funciones de logeo y deslogeo
log() {
  auth.signInWithPopup(provider).then(result => {
    const user = result.user;
    // console.log(user)
    this.setState({
      user
    });
  });
}
logout() {
  auth.signOut().then(() => {
    this.setState({
      user: null
    });
  });
}
  render() {
    return (
      <div className="Login">
        {this.state.user ? (
          <div>
            <Header />
            <Home
              src={this.state.user.photoURL}
              name={this.state.user.displayName}
              onClick={this.logout}/>
            </div>
        ) : (
          <div>
            <Header />
            <button onClick={this.log}>Inicio sesión</button>
          </div>
        )}
      </div>
    )
}
}

export default Login;
