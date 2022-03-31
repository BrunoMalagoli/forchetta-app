import styled from "styled-components";
import HeroImg from "../../images/image-hero.jpg";

const HeroStyled = styled.img`
  height: auto;
  width: 100%;
  position: absolute;
  top: 1%;
  z-index: -1;
`;
const HeroMain = () => {
  return (
    <>
      <HeroStyled src={HeroImg} />
    </>
  );
};
export default HeroMain;
