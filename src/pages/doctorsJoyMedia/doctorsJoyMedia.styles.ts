import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";
import { Link } from "react-router-dom";

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

export const BackgroundYellowDesktop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Yellow};
  gap: 60px;
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

export const DoctorsJoyMediaContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 60px;
  gap: 8px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const JokerImage = styled.img`
  width: 50%;

  ${breakpoints.higherThan('desktop')} {
    width: 100%;
  }
`;

export const JokerImageTwo = styled.img`
  width: 100%;

  ${breakpoints.higherThan('desktop')} {
    width: 100%;
  }
`;

export const LinkPersonalNaMidia = styled(Link)`
  text-decoration: none;
  color: ${DalegriaColorsEnum.Black};

  &:hover {
    color: ${DalegriaColorsEnum.Pink};
    text-decoration: underline;
  }
`;
