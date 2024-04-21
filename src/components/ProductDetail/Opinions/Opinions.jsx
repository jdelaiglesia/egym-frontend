import OpinionCard from "../OpinionCard/OpinionCard";

const Opinions = ({ opinions }) => {
  return (
    <div className="detail-comments flex flex-col gap-2 mx-40 mb-10">
      <h2 className="font-bold text-2xl">Opiniones</h2>
      <div className="flex flex-col gap-4">
        {opinions.map((opinion) => (
          <OpinionCard opinion={opinion} />
        ))}
      </div>
    </div>
  );
};

export default Opinions;
