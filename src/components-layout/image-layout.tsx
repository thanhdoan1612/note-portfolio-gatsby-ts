import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import React from "react";
import {
  ImageListWrapper,
  ImageTitle,
  ImageWrapper,
  LinkWrapper,
} from "../css/image-layout.css";

export interface ImageListProps {
  images: ImageNode[];
}
export interface ImageNode {
  id: string;
  name: string;
  relativeDirectory: string; // Dùng name làm title
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
    original: { src: string };
  };
  to: string;
  title: string;
}
const ImageLayout: React.FC<ImageListProps> = ({ images }) => {
  images.forEach((item) => {
    item.to = "/" + item.relativeDirectory;
    item.title = item.title;
  });

  return (
    <ImageListWrapper>
      {images.map((image) => {
        const img = getImage(image.childImageSharp);

        // Kiểm tra nếu img có giá trị hợp lệ trước khi render
        if (!img) {
          return null; // Nếu img là undefined, không render gì
        }

        return (
          <LinkWrapper key={image.id} to={image.to}>
            <ImageTitle>{image.title}</ImageTitle>
            <ImageWrapper>
              <GatsbyImage image={img} alt={image.relativeDirectory} />
            </ImageWrapper>
          </LinkWrapper>
        );
      })}
    </ImageListWrapper>
  );
};
export default ImageLayout;
