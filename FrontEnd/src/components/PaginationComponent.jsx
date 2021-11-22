import React from "react";

export default function PaginationComponent({
  goToPreviousPage,
  currentPage,
  getPaginationGroup,
  changePage,
  pages,
  goToNextPage,
}) {
  return (
    <div className="pagination">
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? "disabled" : ""}`}
      >
        Prev
      </button>

      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? "active" : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? "disabled" : ""}`}
      >
        Next
      </button>
    </div>
  );
}
