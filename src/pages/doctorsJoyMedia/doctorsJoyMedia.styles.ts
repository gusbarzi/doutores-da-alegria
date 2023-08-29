import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";

export const DoctorsJoyMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
`;

export const DoctorsJoyMediaContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const LeftSide = styled.div`
  width: 100%;
  height: 500px;
`;

export const RightSide = styled.div`
  width: 100%;
  height: 500px;
`;

export const BackgroundYellow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Yellow};
  padding: 16px;
`;

export const TextSquare = styled.div`
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${DalegriaColorsEnum.Pink};
  padding: 4px 16px;
`;

export const NumbersContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;