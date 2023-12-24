import React, {Component} from 'react';
import CompCabecera from './CompCabecera';
import CompListaCategorias from './CompListaCategorias';
import CompPiePagina from './CompPiePagina';
import CompListaProductos from './CompListaProductos';

class PageListaProductos extends Component {

  state = {
    dataJsonListaProductos: []
  }

  async componentDidMount() {
    const respuestaGet = await fetch('https://localhost:7267/api/Productos/destacados');
    const respuestaJson = await respuestaGet.json();
    this.setState({
      dataJsonListaProductos: respuestaJson
    })
  }

  render(){
    return  <div >
                <CompCabecera />
                <main role="main" className="container">      
                    <div className="row">
                        <CompListaCategorias />
                        <CompListaProductos pListaDeProductos={this.state.dataJsonListaProductos}/>
                    </div>
                </main>
                <CompPiePagina />
            </div>
  }
}

export default PageListaProductos;