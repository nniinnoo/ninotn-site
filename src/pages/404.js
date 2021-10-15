import * as React from "react";
import Layout from "@components/Layout";
import blackhole from "@assets/blackhole.gif";

// markup
const NotFoundPage = () => (
  <Layout>
    <center>
      <h1>
        <i>It looks like you're lost my lord..</i>
      </h1>
      <img style={{ borderRadius: "50%" }} src={blackhole} alt="" />
    </center>
  </Layout>
);

export default NotFoundPage;
