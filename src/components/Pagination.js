import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { ChevronRight, ChevronLeft } from "lucide-react";

function Pagination({ currentPage, pageCount }) {
  return (
    <div className="pagination">
      <div className="pagination__prev">
        <Link
          style={{
            pointerEvents: currentPage <= 1 && "none",
          }}
          className={currentPage <= 1 && "pagination__prev-inactive"}
          title="Previous page"
          to={currentPage === 2 ? "/" : `/page/${currentPage - 1}`}
        >
          <ChevronLeft size={24} />
        </Link>
      </div>
      <div className="pagination__number">
        <p>
          {currentPage} | {pageCount}
        </p>
      </div>
      <div className="pagination__next">
        <Link
          style={{
            pointerEvents: currentPage >= pageCount && "none",
          }}
          className={currentPage >= pageCount && "pagination__next-inactive"}
          title="Next page"
          to={`/page/${currentPage + 1}`}
        >
          <ChevronRight size={24} />
        </Link>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default Pagination;
