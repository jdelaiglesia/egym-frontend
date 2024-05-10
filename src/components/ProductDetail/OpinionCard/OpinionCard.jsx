import Rating from "../Rating/Rating";

const OpinionCard = ({ opinion }) => {
  return (
    <div className="flex flex-col gap-4 py-2 justify-start items-start">
      <div className="flex gap-4 items-center">
        <img
          className="w-10 rounded-full"
          alt="Tailwind CSS Navbar component"
          src={opinion.user?.url_image}
        />
        <div className="flex gap-6">
          <p className="text-xl font-bold">{opinion.user?.name}</p>
          <Rating rating={opinion.rating} />
        </div>
      </div>
      <p>{opinion.body}</p>
    </div>
  );
};

export default OpinionCard;
