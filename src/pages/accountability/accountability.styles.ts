import { keyframes, styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const AccountabilityContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
`;

export const AccountabilityContainerDesktop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const AccountabilityContainerTwo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

export const InformationsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  padding: 16px 0;

  ${breakpoints.higherThan("desktop")} {
    width: 700px;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const RightSide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 80%;

  ${breakpoints.higherThan("desktop")} {
    width: 60%;
  }
`;

export const SquareContainer = styled.div`
  display: flex;
  gap: 12px;

  ${breakpoints.higherThan("desktop")} {
    width: 100%;
  }
`;

export const RectangleContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 28px;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BackgroundPink = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Pink};
  padding: 16px 16px 0 16px;

  ${breakpoints.higherThan("desktop")} {
    width: 320px;
  }
`;

export const BackgroundYellow = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Yellow};
  padding: 16px;
`;

export const BackgroundBlue = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.LightBlue};
  padding: 16px;
`;

export const RectangleBlue = styled.div`
  width: 15px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.LightBlue};
`;

export const RectanglePink = styled.div`
  width: 15px;
  height: 520px;
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Pink};
`;

export const PinkBoxContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
`;

export const PinkBox = styled.div`
  width: 700px;
  height: 630px;
  background-color: ${DalegriaColorsEnum.Pink};
`;

export const PinkTwo = styled.div`
  width: 700px;
  height: 150px;
  padding: 24px;
  background-color: ${DalegriaColorsEnum.Pink};
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
`;

export const Bar = styled.div`
  position: relative;
`;

export const BarImage = styled.img`
  width: 30px;
  display: flex;
  margin-left: 8px;
  animation: ${fadeInUp} 1.5s ease-out;
  transform-origin: bottom;

  ${breakpoints.higherThan("desktop")} {
    width: 55px;
    margin-left: 28px;
  }
`;
export const NumbersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  margin-left: 10px;

  ${breakpoints.higherThan("desktop")} {
    margin-left: 24px;
  }
`;

export const YearLabel = styled.div`
  position: absolute;
  top: -20px;
  left: 60%;
  font-size: 16px;
  transform: translateX(-50%);
  font-family: ${DalegriaFontesEnum.ManualBasic};
  color: ${DalegriaColorsEnum.White};

  ${breakpoints.higherThan("desktop")} {
    font-size: 24px;
    top: -30px;
    left: 65%;
  }
`;

export const BarContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;

  ${breakpoints.higherThan("desktop")} {
    height: 530px;
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: scaleX(0);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
`;

export const BarWrapperHorizon = styled.div`
  position: relative;
  height: 30px;
  margin-bottom: 16px;
`;

export const BarHorizon = styled.div`
  position: relative;
  height: 50px;
`;

export const BarImageHorizon = styled.img`
  height: 100%;
  width: 190%;
  animation: ${fadeInRight} 1.5s ease-out;
  transform-origin: left;

  ${breakpoints.higherThan("desktop")} {
    width: "none";
  }
`;

export const YearLabelHorizon = styled.div`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  padding-left: 10px;
`;

export const NumberLabelHorizon = styled.div`
  position: absolute;
  left: 195%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  padding-left: 10px;
`;

export const BarContainerHorizon = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Division = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 350px;
`;

export const Right = styled.div`
  width: 100%;
  margin-right: -300px;
`;

export const Left = styled.div`
  width: 100%;

  ${breakpoints.higherThan("desktop")} {
    margin-left: -300px;
  }
`;

export const JokerImage = styled.img`
  width: 100%;

  ${breakpoints.higherThan("desktop")} {
    width: 70%;
  }
`;
