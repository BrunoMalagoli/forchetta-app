import Logo from "../../images/forchetta-no-bg.png"
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
import NavBarSwiper from "./NavBarSwiper/NavBarSwiper";
const NavBarContainer = styled.nav`
width: 100vw;
height: 25vh;
display: flex;
justify-content: space-evenly;
align-items: flex-start;
background: rgb(151,185,162);
background: linear-gradient(0deg, rgba(151,185,162,0) 0%, rgba(151,185,162,1) 35%);
gap: 50%;
`
const NavBarUl = styled.ul`
    background-color: transparent;
    display: flex;
    position: inline-block;
    width: 20%;
    height: 60%;
    justify-content: space-between;
    align-items: center;
`
const NavBarLi = styled.li`
    text-decoration: none;
    list-style: none;
`
const StyledLogo = styled.img`
    height: 80%;
    width: auto;
    @media (max-width: 480px) {
        position: relative;
        left: 1rem;
    }
`

const NavBar=()=>{
    const matches = useMediaQuery("(max-width: 768px)")
    return(
        <>
        <NavBarContainer>
            <StyledLogo src={Logo}/>
            {
            matches?
            <NavBarSwiper/>
            :
            <NavBarUl>
                <NavBarLi>Inicio</NavBarLi>
                <NavBarLi>Menú</NavBarLi>
                <NavBarLi>Contacto</NavBarLi>
            </NavBarUl>
            }
        </NavBarContainer>
        </>
    )}

export default NavBar