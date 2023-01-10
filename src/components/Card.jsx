import Swim from '../assets/swim.jpg';
export default function Card() {
  return (
    <div className="card">
      <figure>
        <img src={Swim} alt="life lesson" />
        <figcaption>SOLD OUT</figcaption>
      </figure>
      <div className="exp-rating">
        <span className="exp-rating--grade">5.0 </span>
        <span className="exp-rating--numbers">(6)</span>
        <span className="exp-rating--location">USA</span>
      </div>
      <div className="exp-desc">Life Lessons with Katie Zaferes</div>
      <div className="exp-price">
        <strong>From $136</strong>/ person
      </div>
    </div>
  );
}
