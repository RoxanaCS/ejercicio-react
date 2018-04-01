import React, { Component } from 'react';

class Pagina extends Component {

  handleClickBack(event) {
    window.location.reload();
  }
  
  render() {
    return (
      <div>
        <h1>Hola, esta es otra página</h1>
        <button onClick={this.handleClickBack.bind(this)}>volver al inicio</button>
      </div>
    );
  }
}

export default Pagina;
