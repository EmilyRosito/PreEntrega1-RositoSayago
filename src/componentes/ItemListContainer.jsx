import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1>{greeting}</h1> 
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;