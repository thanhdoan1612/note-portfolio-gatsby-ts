import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ModalImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Sử dụng gatsby-image wrapper và điều chỉnh ảnh */
  .gatsby-image-wrapper {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    object-fit: contain;
  }
  .gatsby-image-wrapper img {
    max-width: 85vw;
    max-height: 90vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
