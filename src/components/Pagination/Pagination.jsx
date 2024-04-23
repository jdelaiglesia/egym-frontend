const Pagination = ({ currentPage, totalPages, setPage }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const resetScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const handleClick = (page) => {
    setPage(page);
    resetScrollTop();
  };

  return (
    <div className="flex gap-2 pb-8 justify-center">
      {pages.map((page) => (
        <button
          className="btn btn-outline"
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
