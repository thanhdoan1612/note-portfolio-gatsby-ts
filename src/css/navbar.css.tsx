import styled from "styled-components";

export const NavItem = styled.li`
  margin-left: 20px;
`;
export const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5%;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row; // Mặc định các NavItem hiển thị ngang
  list-style: none;
  margin: 0;
  padding: 0;
`;
