import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useState } from "react";
import {
  ImageListWrapper,
  ImageTitle,
  ImageWrapper,
  SubImageWrapper,
} from "../css/image-layout.css";
import {
  CloseButton,
  ModalContent,
  ModalImageWrapper,
  ModalOverlay,
} from "../css/sub-image-layout.css";
import { ImageNode } from "./image-layout";

export interface ImageListProps {
  images: ImageNode[];
}

const SubImageLayout: React.FC<ImageListProps> = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State để mở/đóng modal
  const [modalImage, setModalImage] = useState<IGatsbyImageData | null>(null); // State lưu ảnh modal

  // Hàm mở modal khi click vào ảnh
  const openModal = (image: IGatsbyImageData) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <ImageListWrapper>
      {images.map((image) => (
        <>
          <SubImageWrapper
            onClick={() => openModal(image.childImageSharp.gatsbyImageData)}
            key={image.id}
          >
            <ImageTitle>{image.title}</ImageTitle>
            <ImageWrapper>
              {image && (
                <GatsbyImage
                  image={image.childImageSharp.gatsbyImageData}
                  alt={image.title}
                />
              )}
            </ImageWrapper>
          </SubImageWrapper>
        </>
      ))}
      {isModalOpen && (
        <ModalOverlay id="ModelImage" onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <ModalImageWrapper>
              {modalImage && (
                <GatsbyImage image={modalImage} alt="Full resolution image" />
              )}
            </ModalImageWrapper>
          </ModalContent>
        </ModalOverlay>
      )}
    </ImageListWrapper>
  );
};
export default SubImageLayout;
