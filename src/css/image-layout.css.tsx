import { Link } from "gatsby";
import styled from "styled-components";

export const ImageListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* Hiệu ứng nhích lên */
  }
`;

export const ImageTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 2/ 3; /* Điều chỉnh tỷ lệ theo ý muốn */
  overflow: hidden;
  border-radius: 10px;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SubImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* Hiệu ứng nhích lên */
    cursor: pointer;
  }
`;
