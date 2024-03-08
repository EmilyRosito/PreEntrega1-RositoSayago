import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1>{greeting}</h1> {/* Mostrar el mensaje recibido a través de la prop */}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;