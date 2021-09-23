const React = require("react");
const path = require("path");

const katexStylesheet = path.resolve(`src/assets/styles/katex/katex.min.css`);

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("style", {
      key: "katex-inline-stylesheet",
      dangerouslySetInnerHTML: { __html: katexStylesheet.toString() },
    }),
  ]);
};
