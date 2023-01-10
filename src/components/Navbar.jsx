import airbnbLogo from '../assets/airbnb.png';

export default function Navbar() {
  return (
    <header>
      <img src={airbnbLogo} className="logo" alt="airbnb" />
    </header>
  );
}
