import { graphql } from "gatsby";
import React from "react";
import { ImageNode } from "../components-layout/image-layout";
import { Seo } from "../components-layout/seo";
import Category from "../components/category";
import Index from "../pages";

type HomepageThumbnailQuery = {
  data: {
    allFile: {
      group: NodesType[];
    };
    titlePage: string;
  };
  pageContext: {
    name: string;
    titlePage: string;
  };
};

type NodesType = {
  nodes: ImageNode[];
};

// Query GraphQL để lấy dữ liệu hình ảnh
export const query = graphql`
  query ($folderPrefix: String!) {
    allFile(
      filter: {
        relativeDirectory: { regex: $folderPrefix }
        extension: { in: ["jpg"] }
      }
    ) {
      group(field: { relativeDirectory: SELECT }, limit: 1) {
        nodes {
          id
          relativeDirectory
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

const Homepage: React.FC<HomepageThumbnailQuery> = ({ data, pageContext }) => {
  data.titlePage = pageContext.titlePage;
  return <Index data={data}></Index>;
};

export default Homepage;
export const Head = () => <Seo subTitle="Our categories"></Seo>;
