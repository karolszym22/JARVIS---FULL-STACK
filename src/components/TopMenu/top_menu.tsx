import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Menu = () => (

    <TopMenu>
      <MenuContainer>
        <MenuNav>
          Interfejs
        </MenuNav>
        <MenuNav>
          Wikipedia
        </MenuNav>
        <MenuNav>
          Notatki
        </MenuNav>
        <MenuNav>
          Pomoc
        </MenuNav>
      </MenuContainer>
    </TopMenu>
  
);

export default Menu;

const TopMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 568px) {
    display: none;
  }
`;
const MenuContainer = styled.div`
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuNav = styled.p`
  color: #00cdd1;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #b2dbe6;
  }
`;
