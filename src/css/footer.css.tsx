import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";

export const Footer = styled.footer`
  background-color: #11111;
  color: #00000;
  text-align: center;
  border-radius: 40px;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterLinks = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 20px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 25px;

  &:hover {
    text-decoration: underline;
  }
`;
