// Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="flex space-x-2">
            {pages.map((page) => (
                <button
                    className="btn btn-outline"
                    key={page}
                    onClick={() => onPageChange(page)}
                    disabled={currentPage === page}
                >
                    {`Page ${page}`}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
