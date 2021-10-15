import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

const SEO = ({ postTitle, postSlug, postSEO, customDescription }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          siteLogo
          siteTitle
          siteUrl
        }
      }
    }
  `);

  const { siteTitle, description, siteUrl, siteLogo } = data.site.siteMetadata;

  let postURL;
  let schemaOrgJSONLD;

  if (postSEO) {
    postURL = `${siteUrl}${postSlug}`;

    schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "Website",
        url: siteUrl,
        name: siteTitle,
        alternateName: siteTitle,
      },
    ];

    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": postURL,
              name: postTitle,
              image: siteLogo,
            },
          },
        ],
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: siteUrl,
        name: siteTitle,
        image: {
          "@type": "ImageObject",
          url: siteLogo,
        },
        description: customDescription || description,
      }
    );
  }

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={siteLogo} />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      <meta property="og:url" content={postSEO ? postURL : siteUrl} />
      {postSEO && <meta property="og:type" content="article" />}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteLogo} />
    </Helmet>
  );
};

SEO.defaultProps = {
  postTitle: "",
  postSlug: "",
  postSEO: "",
  customDescription: "",
};

SEO.propTypes = {
  postTitle: PropTypes.string,
  postSlug: PropTypes.string,
  customDescription: PropTypes.string,
  postSEO: PropTypes.bool,
};

export default SEO;
