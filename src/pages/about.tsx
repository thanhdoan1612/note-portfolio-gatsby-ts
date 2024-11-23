import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Layout from "../components-layout/layout";
import { Seo } from "../components-layout/seo";

const AboutUs = () => {
  return (
    <Layout>
      <AboutContainer>
        <HeroSection>
          <HeroTitle>About Note Studio</HeroTitle>
          <HeroDescription>
            We are passionate about creativity and innovation, helping you bring
            ideas to life!
          </HeroDescription>
        </HeroSection>
        <ContentSection>
          <ImageWrapper>
            <StaticImage
              src="../images/about.jpg"
              alt="Team working together"
              height={400}
            />
          </ImageWrapper>
          <TextWrapper>
            <h2>Who We Are</h2>
            <p>- NOTE STUDIO</p>
            <p>
              + Mang tính kể chuyện, tập trung vào câu chuyện của khách hàng qua
              từng hình ảnh
            </p>
            <p>+ Tinh tế chú ý đến từng chi tiết nhỏ để tạo nên sự khác biệt</p>
            <p>+ Tự nhiên, phản ánh phong cách chân thực, không gò bó</p>
            <p>+ Hoài niệm, gợi nhớ về những khoảnh khắc đáng nhớ</p>
            <p>
              + Cao quý, thể hiện sự sang trọng và đẳng cấp trong phong cách và
              chất lượng dịch vụ làm hài lòng khách hàng.
            </p>
          </TextWrapper>
        </ContentSection>
      </AboutContainer>
    </Layout>
  );
};

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 40px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: gray;
`;

const ContentSection = styled.section`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  height: 50%;
  .static-image-wrapper img {
    width: 100%;
    border-radius: 10px;
  }
`;

const TextWrapper = styled.div`
  flex: 1;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: gray;
    line-height: 1.5;
    text-align: justify;
  }
`;

export default AboutUs;
export const Head: HeadFC = () => <Seo subTitle="About"></Seo>;
