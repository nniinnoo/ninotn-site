import React from "react";
import { Link } from "gatsby";
import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import ArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeftRounded";

const Pagination = ({ currentPage, pageCount, base }) => {
  return (
    <div className="pagination">
      <div className="pagination__prev">
        {currentPage > 1 ? (
          <Link
            title="Go to previous page"
            to={currentPage === 2 ? "/" : `/page/${currentPage - 1}`}
          >
            <ArrowLeftIcon />
          </Link>
        ) : (
          <span />
        )}
      </div>
      <div className="pagination__number">
        <p>
          {currentPage} | {pageCount}
        </p>
      </div>
      <div className="pagination__next">
        {currentPage < pageCount ? (
          <Link title="Go to the next page" to={`/page/${currentPage + 1}`}>
            <ArrowRightIcon />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
};

export default Pagination;
