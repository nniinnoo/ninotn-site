import React, { useState, useRef } from "react";
import { useFlexSearch } from "react-use-flexsearch";
import { useStaticQuery, graphql } from "gatsby";
// import { useLocation, navigate } from "@reach/router";

import Corpus from "@components/Corpus";
import SearchIcon from "@mui/icons-material/SailingRounded";

const Search = () => {
  // const { location } = useLocation();
  // const search = new URLSearchParams(location).get("");

  const searchRef = useRef(null);
  const [query, setQuery] = useState("");

  const { localSearchPages, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
      allMarkdownRemark(
        filter: {
          frontmatter: { template: { eq: "post" }, published: { eq: true } }
        }
      ) {
        nodes {
          frontmatter {
            title
            slug
            date(formatString: "MMMM D, YYYY")
          }
          id
        }
      }
    }
  `);

  const allData = allMarkdownRemark.nodes;

  const results = useFlexSearch(
    query,
    localSearchPages.index,
    localSearchPages.store
  );

  return (
    <div className="search__container">
      <h2>Archive</h2>
      <div className="search__bar">
        <input
          ref={searchRef}
          value={query}
          type="search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search articles by title or specific context..."
        />
        <SearchIcon />
      </div>
      <div className="search__result">
        {query ? (
          results.length > 0 ? (
            <Corpus data={results} query={query} />
          ) : (
            <p>
              No results for <b>{`'${query}'`}</b>
            </p>
          )
        ) : (
          <Corpus data={allData} />
        )}
      </div>
    </div>
  );
};

export default Search;
