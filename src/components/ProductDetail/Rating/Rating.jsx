const Rating = ({ rating }) => {
  return (
    <div className="rating rating-sm items-center gap-2 pointer-events-none">
      <span>{rating}</span>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <input
            type="checkbox"
            name="rating-2"
            className="mask mask-star-2"
            defaultChecked={rating === i + 1}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
