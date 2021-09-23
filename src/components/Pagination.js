import React from "react";
import { Link } from "gatsby";

const Pagination = ({ currentPage, pageCount, base }) => {
  return (
    <div className="pagination">
      {currentPage > 1 ? (
        <Link
          title="Go to previous page"
          to={currentPage === 2 ? "/" : `/page/${currentPage - 1}`}
        >
          ← Newer
        </Link>
      ) : (
        <span />
      )}
      <p>
        Page {currentPage} of {pageCount}
      </p>
      {currentPage < pageCount ? (
        <Link title="Go to the next page" to={`/page/${currentPage + 1}`}>
          Older →
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
};

export default Pagination;
