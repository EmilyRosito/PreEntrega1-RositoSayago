import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

const CardWidget = () => {
  const cartItemCount = 5; // Número hardcodeado para la cantidad de elementos en el carrito

  return (
    <div className="card" style={{ width: '10rem' }}>
      <div className="card-body">
      <i class="bi bi-cart"></i> {/* Icono de carrito usando Bootstrap Icons */}
        <span className="badge bg-secondary">{cartItemCount}</span> {/* Notificación con el número de elementos */}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default CardWidget;