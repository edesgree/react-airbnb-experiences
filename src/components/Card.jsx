export default function Card(props) {
  console.log('props', props);
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.card.location === 'Online') {
    badgeText = 'ONLINE';
  }
  return (
    <div className="card">
      <figure>
        <img src={`images/${props.card.coverImg}`} alt="life lesson" />
        {badgeText && <figcaption>{badgeText}</figcaption>}
      </figure>
      <div className="exp-rating">
        <span className="exp-rating--grade">{props.card.stats.rating} </span>
        <span className="exp-rating--numbers">
          ({props.card.stats.reviewCount})
        </span>
        <span className="exp-rating--location">{props.card.location}</span>
      </div>
      <div className="exp-desc">{props.card.title}</div>
      <div className="exp-price">
        <strong>From ${props.card.price}</strong>/ person
      </div>
    </div>
  );
}
