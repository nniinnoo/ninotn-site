import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import ArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

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
          <ArrowLeftIcon />
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
          <ArrowRightIcon />
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
