import React, {Component} from 'react';
import CompCabecera from './CompCabecera';
import CompFormAgregarCliente from './CompFormAgregarCliente';
import CompPiePagina from './CompPiePagina';

class PagePedidoCliente extends Component {

  render(){
    return  <div >
                <CompCabecera />
                <main role="main" className="container">      
                    <CompFormAgregarCliente />
                </main>
                <CompPiePagina />
            </div>
  }
}

export default PagePedidoCliente;