

export const Paginacion = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div className="paginationButtons">
      <button onClick={onPrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};




  