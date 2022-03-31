import { SwipeableDrawer } from "@mui/material";
import React from "react";
import styled from "styled-components";
const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  width: 20rem;
  height: 20rem;
  transition: 2s;
`;
const DrawerLi = styled.li`
  width: 10rem;
  text-decoration: underline;
  list-style: none;
  margin-top: 10%;
  text-align: left;
`;
const NavBarSwiper = ({ onOpen, onClose, drawer }) => {
  return (
    <>
      {drawer ? (
        <>
          <StyledSwipeableDrawer
            anchor="right"
            open={drawer}
            onClose={() => onClose()}
            onOpen={() => onOpen()}
          >
            <ul>
              <DrawerLi>Inicio</DrawerLi>
              <DrawerLi>Menu</DrawerLi>
              <DrawerLi>Contacto</DrawerLi>
            </ul>
          </StyledSwipeableDrawer>
        </>
      ) : null}
    </>
  );
};
export default NavBarSwiper;
