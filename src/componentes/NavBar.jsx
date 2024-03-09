import React from 'react';
import CardWidget from './CardWidget';


const NavBar = () => {
  const categories = ['Camping', 'Aire Libre', 'Interior', 'Más'];

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Productos</a>
      <div>
        <ul class="navbar-nav">
          {categories.map((category, index) => (
            <li class="nav-item" key={index}>
              <a class="nav-link" href="#">{category}</a>
            </li>
          ))}
        </ul>
      </div>
      <CardWidget />
    </nav>
  );
};

export default NavBar;