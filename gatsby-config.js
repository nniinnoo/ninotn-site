const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ninotn.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-03JHFY9B3R",
        head: true,
      },
    },
    "gatsby-plugin-netlify",
    {
      /// ALIAS IMPORTS
      // aliasing import statements from this '/../../components/' to this '@components'
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@": path.resolve(__dirname, "src"),
          "@assets": path.resolve(__dirname, "src/assets"),
          "@components": path.resolve(__dirname, "src/components"),
          "@utils": path.resolve(__dirname, "src/utils"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@templates": path.resolve(__dirname, "src/templates"),
        },
        extensions: ["js", "css", "md", "jsx"], // to omit extensions when importing files
      },
    },
    /// TYPESCRIPT
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: "jsx",
        allExtensions: true,
      },
    },
    /// IMAGE
    "gatsby-plugin-image",

    // REACT-HELMET
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/favicon.png",
      },
    },
    /// SHARP
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    /// SOURCE FILESYSTEM
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts`,
        name: "posts",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 720,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: "gatsby-remark-katex",
            options: {
              strict: "ignore",
            },
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: true,
              },
            },
          },
        ],
      },
    },
  ],
};
