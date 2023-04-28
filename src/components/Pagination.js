import "./Pagination.css";

const Pagination = (props) => {
  return (
    <div className="pagination">
      {props.pageNumbers.map((pageNumber, index) => {
        return (
          <button className="btn pageNumber" key={index} onClick={() => props.setCurrentPage(pageNumber)}>
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
