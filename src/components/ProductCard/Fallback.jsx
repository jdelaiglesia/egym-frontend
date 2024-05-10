const Fallback = () => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl">
      <figure className="w-full h-64">
        <div className="w-full h-64 skeleton"></div>
      </figure>
      <div className="card-body flex flex-col gap-4">
        <h2 className="skeleton w-28 h-6"></h2>
        <div className="flex flex-col">
          <p className={"text-lg skeleton w-20 h-6"}></p>
        </div>
      </div>
    </div>
  );
};

export default Fallback;
