import React from "react";
import { Link } from "gatsby";
import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import ArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeftRounded";

const Pagination = ({ currentPage, pageCount, base }) => {
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
};

export default Pagination;
