import React, { Component } from 'react';

class CompFormAgregarProducto extends Component {

    state = {
        id: 0,
        nombre: "",
        marca: "",
        precio: "",
        cantidad: ""
    }

    agregarProducto = e => {
        this.setState({
            id: this.state.id + 1
        });
        this.props.pFuncionAgregarProducto(this.state.id, this.state.nombre, this.state.marca, this.state.precio, this.state.cantidad);
        e.preventDefault();
    }

    actualizarEstado = e => {
        if (e.target.name == "txtNombre"){
            this.setState({
                nombre: e.target.value
            })
        }else if(e.target.name == "txtMarca"){
            this.setState({
                marca: e.target.value
            })
        }else if(e.target.name == "txtPrecio"){
            this.setState({
                precio: e.target.value
            })
        }else if(e.target.name == "txtCantidad"){
            this.setState({
                cantidad: e.target.value
            })
        }

    }
    render() {
        return <form onSubmit={this.agregarProducto}>
            <p className="h5 text-secondary"> Producto</p>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="txtNombre" placeholder="Nombre" 
                        value={this.state.nombre} onChange={this.actualizarEstado}/>
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="txtPrecio" placeholder="Precio unitario" 
                        value={this.state.precio} onChange={this.actualizarEstado}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="txtMarca" placeholder="Marca" 
                        value={this.state.marca} onChange={this.actualizarEstado}/>
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="txtCantidad" placeholder="Cantidad" 
                        value={this.state.cantidad} onChange={this.actualizarEstado}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12 text-right">
                    <button type="submit" className="btn btn-secondary">Agregar producto</button>
                </div>
            </div>
        </form>
    }
}

export default CompFormAgregarProducto;