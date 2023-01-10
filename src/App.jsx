import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
function App() {
  console.log('data', data);
  const cardElements = data.map((card) => {
    return <Card key={card.id} card={card} />;
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
