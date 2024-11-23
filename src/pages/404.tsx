import { HeadFC } from "gatsby";
import * as React from "react";
import Layout from "../components-layout/layout";

const NotFoundPage = () => {
  return <Layout>404 NOT FOUND</Layout>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
