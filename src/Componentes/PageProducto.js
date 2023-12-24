import React, {Component} from 'react';
import CompCabecera from './CompCabecera';
import CompListaCategorias from './CompListaCategorias';
import CompProductoDetalle from './CompProductoDetalle';
import CompPiePagina from './CompPiePagina';

class PageProducto extends Component {

  render(){
    return  <div >
                <CompCabecera />
                <main role="main" className="container">      
                    <div className="row">
                        <CompListaCategorias />
                        <CompProductoDetalle />
                    </div>
                </main>
                <CompPiePagina />
            </div>
  }
}

export default PageProducto;