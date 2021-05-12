import React from "react";

const Pagination = ({ page, info, nextPage, prevPage }) => {
  return (
    <div className="col d-flex justify-content-around">
      <button
        className="btn btn-outline-warning"
        onClick={() => prevPage()}
        disabled={page === 1}
      >
        <i className="fas fa-chevron-left" />
      </button>
      <span className="mx-4 fs-4">
        {page} ... {info.pages}
      </span>
      <button
        className="btn btn-outline-warning"
        onClick={() => nextPage()}
        disabled={page === info.pages}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
