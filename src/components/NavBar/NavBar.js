import Logo from "../../images/forchetta-no-bg.png";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
import NavBarSwiper from "./NavBarSwiper/NavBarSwiper";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavBarContainer = styled.nav`
  width: 100vw;
  height: 25vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgb(151, 185, 162);
  background: linear-gradient(
    0deg,
    rgba(151, 185, 162, 0) 0%,
    rgba(151, 185, 162, 1) 35%
  );
  gap: 40%;
`;
const NavBarUl = styled.ul`
  background-color: transparent;
  display: flex;
  position: inline-block;
  width: 20%;
  height: 60%;
  justify-content: space-evenly;
  gap: 5%;
  align-items: center;
`;
const NavBarLi = styled.li`
  text-decoration: none;
  list-style: none;
  color: white;
  font-family: "Roboto Slab", sans-serif;
`;
const StyledLogo = styled.img`
  height: 80%;
  width: auto;
  @media (max-width: 480px) {
    position: relative;
    left: 1rem;
  }
`;
const DrawerButton = styled.button`
  height: 50px;
  padding: 3%;
  width: 130px;
  background-color: #b57545;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 7%;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-family: "Roboto Slab", sans-serif;
  transition: 0.5s ease-out;
  @media (max-width: 480px) {
    margin-right: 2rem;
  }
  :hover {
    background-color: #b4825b;
    cursor: pointer;
    transition: 0.5s ease-out;
  }
`;
const DrawerSpan = styled.span``;
const NavBar = () => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <NavBarContainer>
        <StyledLogo src={Logo} />
        {matches ? (
          <>
            <DrawerButton onClick={() => toggleDrawer()}>
              <DrawerSpan>Menú</DrawerSpan>
              <MenuIcon></MenuIcon>
            </DrawerButton>
            <NavBarSwiper
              onOpen={() => toggleDrawer()}
              onClose={() => toggleDrawer()}
              drawer={drawer}
            />
          </>
        ) : (
          <NavBarUl>
            <NavBarLi>Inicio</NavBarLi>
            <NavBarLi>Menú</NavBarLi>
            <NavBarLi>Contacto</NavBarLi>
          </NavBarUl>
        )}
      </NavBarContainer>
    </>
  );
};

export default NavBar;
