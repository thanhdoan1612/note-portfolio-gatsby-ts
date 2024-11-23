import { Link } from "gatsby";
import styled from "styled-components";
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #111111;
  border-radius: 40px;
  font-size: 25px;
`;

export const LogoContainer = styled(Link)`
  margin-left: 5%;
  width: 20%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 25px;
`;

export const Main = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1; /* Ensures Main takes all available space, pushing footer to the bottom */
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* To make the container take the full height of the screen */
  // margin: 0 5%;
`;
