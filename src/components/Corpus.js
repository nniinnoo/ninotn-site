import React, { useMemo } from "react";
import { Link } from "gatsby";

const Corpus = ({ data = [], query }) => {
  const contentByYear = useMemo(() => {
    const collection = {};
    if (query) {
      data.forEach((post) => {
        const year = post.date?.split(", ")[1];
        collection[year] = [...(collection[year] || []), post];
      });
    } else {
      data.forEach((post) => {
        const year = post.frontmatter.date.split(", ")[1];
        collection[year] = [
          ...(collection[year] || []),
          { id: post.id, ...post.frontmatter },
        ];
      });
    }
    return collection;
  }, [data]);

  const yearArr = useMemo(
    () => Object.keys(contentByYear).reverse(),
    [contentByYear]
  );

  const highlightWords = (words) => {
    if (query) {
      const regex = new RegExp(
        query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i"
      );
      const highlightStartIndex = words.search(regex);

      if (highlightStartIndex !== -1) {
        const highlightEndIndex = highlightStartIndex + query.length;
        return (
          <p>
            {words.slice(0, highlightStartIndex)}
            <span>{words.slice(highlightStartIndex, highlightEndIndex)}</span>
            {words.slice(highlightEndIndex)}
          </p>
        );
      }
      return <p>{words}</p>;
    }
    return <p>{words}</p>;
  };

  return (
    <div>
      {yearArr.map((year) => (
        <section key={year}>
          <h1>{year}</h1>
          {contentByYear[year].map((post) => (
            <Link to={`/${post.slug}`}>
              <div key={post.id}>{highlightWords(post.title)}</div>
            </Link>
          ))}
        </section>
      ))}
    </div>
  );
};

export default Corpus;
