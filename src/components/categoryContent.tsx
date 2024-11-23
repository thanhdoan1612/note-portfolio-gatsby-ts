import React from "react";
import styled from "styled-components";
import ImageLayout, { ImageNode } from "../components-layout/image-layout";
import Layout from "../components-layout/layout";
import SubImageLayout from "../components-layout/sub-image-layout";
import { CategoryProps } from "./category";

export interface CategoryConentProps {
  images: ImageNode[];
  title: string;
}

const CategoryConent = ({ images, title }: CategoryProps) => {
  return (
    <Layout>
      <HomePageContainer>
        <Title>{title}</Title>
        <SubImageLayout images={images}></SubImageLayout>
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

export default CategoryConent;
