import React, { Component } from 'react';
import Pagina from './Pagina';

class Home extends Component {
  constructor(src, name, onClick) {
    super(src, name, onClick);
    this.state = {
      src,
      name,
      onClick,
      counter: 0
    };
    // uso del bind acá para después poder usar solo el this.algo
    this.handleClickPag = this.handleClickPag.bind(this);
  }

  // función para cambiar de página
  handleClickPag(event) {
    console.log('Hola');
    this.setState({
      counter: 1,
    });
    // para recargar la página
    // window.location.reload();
  }
  render() {
    const { src } = this.props;
    const { name } = this.props;
    const { onClick } = this.props;
    const { counter } = this.state;
    console.log(counter);
    return (
      <div>
        {this.state.counter === 1 ? (
          <Pagina />
        ) : (
          <div>
            <h1>Hola</h1>
            <img src={src} alt = {name}/>
            <p>{name}</p>
            <button onClick={onClick}>logout</button>
            <button onClick={this.handleClickPag}>Otra página</button>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
