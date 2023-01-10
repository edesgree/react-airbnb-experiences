import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import katieImg from './assets/katie.jpg';
import data from './data';
function App() {
  console.log('data', data);
  const cardElements = data.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Hero />
        <section className="cards-list">{cardElements}</section>
      </div>
    </div>
  );
}

export default App;
