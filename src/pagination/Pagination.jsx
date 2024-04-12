// Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="pagination">
            {pages.map((page) => (
                <div className="join grid grid-cols-2">
                    <button
                        className="join-item btn btn-outline"
                        key={page}
                        onClick={() => onPageChange(page)}
                        disabled={currentPage === page}
                    >
                        {` Page ${page}`}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Pagination;
