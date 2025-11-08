import React from 'react';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import './App.css';

// Exemple de données : remplacez par vos vraies images
const products = [
  {
    title: 'Fauteuil 2',
    image: '/images/fauteuil-2.jpg',
  },
];

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        {products.map((p, index) => (
          <ProductCard key={index} title={p.title} imageSrc={p.image} />
        ))}
      </main>
    </div>
  );
}

export default App;
