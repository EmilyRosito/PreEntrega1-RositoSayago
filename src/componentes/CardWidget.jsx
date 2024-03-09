import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CardWidget = () => {
  const cartItemCount = 5; // Número hardcodeado para la cantidad de elementos en el carrito

  return (
    <div className="card" style={{ width: '10rem' }}>
      <div className="card-body">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge bg-secondary">{cartItemCount}</span> 
      </div>
    </div>
  );
};

export default CardWidget;