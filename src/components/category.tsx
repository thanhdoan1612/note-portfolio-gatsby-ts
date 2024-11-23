import React from "react";
import styled from "styled-components";
import ImageLayout, { ImageNode } from "../components-layout/image-layout";
import Layout from "../components-layout/layout";

export interface CategoryProps {
  images: ImageNode[];
  title: string;
}

const Category = ({ images, title }: CategoryProps) => {
  return (
    <Layout>
      <HomePageContainer>
        <Title>Explore Our {title} Categories</Title>
        <ImageLayout images={images}></ImageLayout>
      </HomePageContainer>
    </Layout>
  );
};

const HomePageContainer = styled.div`
  max-width: 100vw;
  margin: 0 5%;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

export default Category;
