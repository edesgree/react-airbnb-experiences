export default function Card(props) {
  console.log('props', props);
  return (
    <div className="card">
      <figure>
        <img src={`images/${props.img}`} alt="life lesson" />
        {props.isSoldOut && <figcaption>SOLD OUT</figcaption>}
      </figure>
      <div className="exp-rating">
        <span className="exp-rating--grade">{props.rating} </span>
        <span className="exp-rating--numbers">({props.reviewCount})</span>
        <span className="exp-rating--location">{props.country}</span>
      </div>
      <div className="exp-desc">{props.title}</div>
      <div className="exp-price">
        <strong>From ${props.price}</strong>/ person
      </div>
    </div>
  );
}
