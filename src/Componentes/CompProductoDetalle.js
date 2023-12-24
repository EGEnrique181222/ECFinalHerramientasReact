import React, {Component} from 'react';

class CompProductoDetalle extends Component {

  render(){
    return  <div className="col-9">
                <p className="h5 text-secondary">Producto</p>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="imagenes/ricocan.webp" className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-primary">RICOCAN</h5>
                                <p className="card-text">Comida para Perros RICOCAN Adultos Razas Medianas y Grandes Cordero y Cereales Bolsa 15Kg</p>
                                <p className="h4 text-primary">S/94.90</p>
                                <p className="text-right">
                                    <a className="btn btn-lg btn-primary" href="#" role="button">Agregar al carrito</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
  }
}

export default CompProductoDetalle;