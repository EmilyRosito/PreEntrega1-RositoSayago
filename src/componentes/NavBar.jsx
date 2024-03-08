import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import CardWidget from './CardWidget';

const NavBar = () => {
  const categories = ['Electrónica', 'Ropa', 'Hogar', 'Deportes'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Todo lo que necesitas</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((category, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href="#">{category}</a>
              </li>
            ))}
          </ul>
          <CardWidget/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;