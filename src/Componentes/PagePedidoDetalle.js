import React, { Component } from 'react';
import CompCabecera from './CompCabecera';
import CompListaCategorias from './CompListaCategorias';
import CompPedidoDetalle from './CompPedidoDetalle';
import CompPiePagina from './CompPiePagina';

import dataJsonPedido from '../DataJson/DataJsonPedido.json';
import dataJsonListaDetallePedido from '../DataJson/DataJsonListaDetallePedido.json';

class PagePedidoDetalle extends Component {

    state = {
        miPedido: dataJsonPedido,
        miPedidoDetalle: dataJsonListaDetallePedido
    }

    agregarProductoAlPedido = (pId, pProducto, pMarca, pPrecio, pCantidad) => {
        console.log(pProducto);
        const nuevoItemDetalle = {
            "id": pId,
            "idPedido": 385,
            "idProducto": 0,
            "cantidad": pCantidad,
            "precioUnitario": pPrecio,
            "subTotal": pCantidad * pPrecio,
            "producto": {
                "id": 0,
                "idCategoria": 0,
                "idMarca": 0,
                "nombre": pProducto,
                "precio": pPrecio,
                "categoria": {
                    "id": 0,
                    "nombre": ""
                },
                "marca": {
                    "id": 0,
                    "nombre": pMarca
                }
            }
        };
        let nuevoPedidoDetalle =  [...this.state.miPedidoDetalle, nuevoItemDetalle];
        this.setState({
            miPedidoDetalle: nuevoPedidoDetalle
        })

        this.recalcularTotal(nuevoPedidoDetalle);
    }

    eliminarProductoDelPedido = (id) => {
        let nuevoPedidoDetalle = this.state.miPedidoDetalle.filter(itemDetalle => itemDetalle.id !== id);
        this.setState({
            miPedidoDetalle: nuevoPedidoDetalle
        });

        this.recalcularTotal(nuevoPedidoDetalle);
    }

    recalcularTotal = (pDetalle) => {
        let total = 0;
        let pedido = this.state.miPedido;
        pDetalle.map(itemDetalle => total = total + itemDetalle.subTotal);
        pedido.total = total;
        this.setState({
            miPedido: pedido
        })
    }

    render() {
        return <div >
            <CompCabecera pCantidadProductos={this.state.miPedidoDetalle.length} pTotal={this.state.miPedido.total}/>
            <main role="main" className="container">
                <div className="row">
                    <CompListaCategorias />
                    <CompPedidoDetalle pPedido={this.state.miPedido}
                        pPedidoDetalle={this.state.miPedidoDetalle}
                        pFuncionEliminarProducto={this.eliminarProductoDelPedido} 
                        pFuncionAgregarProducto={this.agregarProductoAlPedido}/>
                </div>
            </main>
            <br />
            <CompPiePagina />
        </div>
    }
}

export default PagePedidoDetalle;