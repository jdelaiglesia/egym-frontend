const Description = ({ name, description }) => {
  return (
    <div className="detail-description flex flex-col gap-2 mx-10 my-10">
      <h2 className="font-bold text-2xl">Descripción</h2>
      <p>
        <strong>{name}</strong>
        <br />
        <br />
        {name} {description}
      </p>
    </div>
  );
};

export default Description;
