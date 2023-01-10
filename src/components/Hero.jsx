import HeroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <img src={HeroImg} alt="airbnb" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
