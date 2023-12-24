import React, { Component } from 'react';

class CompListaCategorias extends Component {
  
  state = {
    dataJsonListaCategorias: []
  }

  async componentDidMount() {
    const respuestaGet = await fetch('https://localhost:7267/api/Categorias/activas');
    const respuestaJson = await respuestaGet.json();
    this.setState({
      dataJsonListaCategorias: respuestaJson
    })
  }

  render() {
    return (
      <div className="col-3">
        <p className="h5 text-secondary">Categorías</p>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><a href="productos/destacados" className="text-secondary">DESTACADOS</a></li>
            {
              this.state.dataJsonListaCategorias.map((categoria, indice) => {
                var url = "productos/porcategoria/" + categoria.id;
                return <li className="list-group-item" key={categoria.id}><a href={url} className="text-secondary">{categoria.nombre}</a></li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default CompListaCategorias;