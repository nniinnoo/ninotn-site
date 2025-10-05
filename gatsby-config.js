const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ninotn.com",
    siteTitle: "Rising Fire",
    siteLogo: "src/assets/favicon.png",
    description: "Personal blog by Nino Tannio",
  },
  plugins: [
    // ANALYTICS
    // =========
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-03JHFY9B3R"],
        pluginConfig: {
          head: true,
        },
      },
    },

    // ALIAS IMPORTS
    // =============
    // Aliasing import -> '/../../components/' to this '@components'
    {
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
        extensions: ["js", "css", "md", "jsx"],
        // to omit extensions when importing files
      },
    },

    // FOOTNOTES MARKDOWN
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-numbered-footnotes"],
      },
    },

    // HELMET
    // ======
    "gatsby-plugin-react-helmet",

    // IMAGE
    // =====
    "gatsby-plugin-image",

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/favicon.png",
      },
    },

    // NETLIFY
    // =======
    "gatsby-plugin-netlify",

    // SHARP
    // =====
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    "gatsby-transformer-sharp",

    // SOURCE FILESYSTEM
    // =================
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts/`,
        name: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/fragments`,
        name: "fragments",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/patterns`,
        name: "patterns",
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/content/altitudes`,
    //     name: "altitudes",
    //   },
    // },
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

    // SEARCH
    // ======
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "pages",
        engine: "flexsearch",
        engineOptions: {
          encode: "icase",
          tokenize: "forward",
          async: false,
        },
        query: `{
             allMarkdownRemark(
             filter: {frontmatter: {template: {eq: "post"}, published: {eq: true}}}) {
                nodes {
                  frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    published
                    slug
                    tags
                    categories
                    no
                    description
                  }
                  id
                  rawMarkdownBody
                }
              }
        }`,
        ref: "id",
        index: ["title", "body", "description", "tags"],
        store: ["id", "slug", "title", "categories", "date", "tags"],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map((node) => ({
            id: node.id,
            slug: node.frontmatter.slug,
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
            categories: node.frontmatter.categories,
            date: node.frontmatter.date,
            tags: node.frontmatter.tags,
          })),
      },
    },

    // TYPESCRIPT
    // ==========
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: "jsx",
        allExtensions: true,
      },
    },
  ],
};
