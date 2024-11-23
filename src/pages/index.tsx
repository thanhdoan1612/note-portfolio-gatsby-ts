import { graphql } from "gatsby";
import React from "react";
import { ImageNode } from "../components-layout/image-layout";
import { Seo } from "../components-layout/seo";
import CategoriesPage from "../components/category";

export type CategoryImagesQuery = {
  data: {
    allFile: {
      group: NodesType[];
    };
    titlePage: string;
  };
};

type NodesType = {
  nodes: ImageNode[];
};

// Query GraphQL để lấy dữ liệu hình ảnh
export const query = graphql`
  query HomepageImages {
    allFile(filter: { relativeDirectory: { regex: "/^[^/]+$/" } }) {
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
function titleCase(title: string) {
  if (!title) {
    return "";
  }
  if (title.indexOf("/") != -1) {
    title = title.substring(title.lastIndexOf("/") + 1);
  }
  var splitStr = title.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}
const Index: React.FC<CategoryImagesQuery> = (data) => {
  let images: ImageNode[] = [];
  data.data.allFile.group.forEach((item) =>
    item.nodes.forEach((i: ImageNode) => images.push(i))
  );
  images.forEach((item) => {
    item.to = item.relativeDirectory;
    item.title = titleCase(item.relativeDirectory.replaceAll("-", " "));
  });
  data.data.titlePage = titleCase(data.data.titlePage);
  return (
    <CategoriesPage
      images={images}
      title={data.data.titlePage}
    ></CategoriesPage>
  );
};

export default Index;
export const Head = () => <Seo subTitle="Our categories"></Seo>;
