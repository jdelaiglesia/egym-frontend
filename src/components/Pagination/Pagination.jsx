const Pagination = ({ currentPage, totalPages, setPage }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleClick = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex join pb-8 justify-center">
      {pages.map((page) => (
        <button
          className="join-item btn"
          key={page}
          onClick={() => handleClick(page)}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
