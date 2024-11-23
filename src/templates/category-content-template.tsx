import { graphql } from "gatsby";
import React from "react";
import { ImageNode } from "../components-layout/image-layout";
import CategoryConent from "../components/categoryContent";

interface ImageTemplateProps {
  data: {
    allFile: {
      nodes: ImageNode[];
    };
  };
  pageContext: {
    name: string;
    title: string;
  };
}

export const query = graphql`
  query ($directory: String!) {
    allFile(
      filter: {
        relativeDirectory: { eq: $directory }
        extension: { in: ["jpg"] }
      }
    ) {
      nodes {
        id
        name
        relativeDirectory
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
          original {
            src
          }
        }
      }
    }
  }
`;

const ImageTemplate: React.FC<ImageTemplateProps> = ({ data, pageContext }) => {
  const { title } = pageContext;
  const images = data.allFile.nodes;

  return <CategoryConent title={title} images={images}></CategoryConent>;
};

export default ImageTemplate;
