// src/components/Layout.tsx
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container, Header, LogoContainer, Main } from "../css/layout.css";
import Navbar from "./navbar";
import FooterLayout from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header>
        <LogoContainer to="/">
          <StaticImage
            src="../images/logo.png"
            alt="Logo"
            placeholder="blurred"
            height={50}
          />
        </LogoContainer>
        <Navbar />
      </Header>
      <Main>{children}</Main>
      <FooterLayout />
    </Container>
  );
};

export default Layout;
