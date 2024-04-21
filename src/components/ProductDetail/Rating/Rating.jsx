const Rating = ({ rating }) => {
  return (
    <div className="rating rating-sm items-center">
      <span>{rating}</span>
      <input type="radio" name="rating-9" className="rating-hidden" />
      <input type="radio" name="rating-9" className="mask mask-star-2" />
      <input type="radio" name="rating-9" className="mask mask-star-2" />
      <input type="radio" name="rating-9" className="mask mask-star-2" />
      <input type="radio" name="rating-9" className="mask mask-star-2" />
      <input
        type="radio"
        name="rating-9"
        className="mask mask-star-2"
        checked
      />
    </div>
  );
};

export default Rating;
