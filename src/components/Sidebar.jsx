import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Galerie Caractère</h2>
      <p>Bienvenue chez Galerie Caractère dans le quartier du sablon et de la rue Blaes à Bruxelles.</p>
      <p>Contactez‑nous au 0479 920 956</p>
      <nav>
        <button className="nav-btn">Pictures</button>
        <button className="nav-btn">Events</button>
      </nav>
    </aside>
  );
}
