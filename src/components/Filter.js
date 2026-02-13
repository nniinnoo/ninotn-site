import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function Filter() {
  const [sortIndex, setSortindex] = useState(0);
  const sortType = ["Newest", "Oldest"];

  return (
    <>
      <div
        className="blog__sortby"
        onClick={() => setSortindex(!sortIndex)}
        aria-hidden="true"
      >
        {sortIndex ? (
          <div>
            <span id="sortby-newest">{sortType[0]}</span>
            {/* <span id="sortby-to">
              <SortByIcon />
            </span> */}
            <span id="sortby-oldest">{sortType[1]}</span>
          </div>
        ) : (
          <div>
            <span id="sortby-oldest">{sortType[1]}</span>
            {/* <span id="sortby-to">
              <SortByIcon />
            </span> */}
            <span id="sortby-newest">{sortType[0]}</span>
          </div>
        )}
      </div>
      <div className="blog__dropdown">
        <button type="button" className="blog__dropdown-btn">
          Category
          <ChevronDown size={20} />
        </button>
        <div className="blog__dropdown-list">
          <p>under reconstruction</p>
        </div>
      </div>
    </>
  );
}

export default Filter;
