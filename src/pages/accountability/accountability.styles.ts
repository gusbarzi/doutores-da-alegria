import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const AccountabilityContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
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
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 16px;
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
`;

export const SquareContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
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
  width: 320px;
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Pink};
  padding: 16px;
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
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.LightBlue};
`;

export const RectanglePink = styled.div`
  width: 15px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Pink};
`;
