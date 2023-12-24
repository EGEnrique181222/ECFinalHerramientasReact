import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PageListaProductos from './Componentes/PageListaProductos';
import PageProducto from './Componentes/PageProducto';
import PagePedidoDetalle from './Componentes/PagePedidoDetalle';
import PagePedidoCliente from './Componentes/PagePedidoCliente';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<PageListaProductos />} />
            <Route path="/detalleProducto" element={<PageProducto />} />
            <Route path="/miPedido" element={<PagePedidoDetalle />} />
            <Route path="/miPedidoCliente" element={<PagePedidoCliente />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;