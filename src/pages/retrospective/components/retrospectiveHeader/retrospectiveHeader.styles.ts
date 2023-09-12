import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import breakpoints from "../../../../utils/breakpoints";

export const RestrospectiveHeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${DalegriaColorsEnum.Yellow};

  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoints.higherThan("desktop")} {
    height: 80px;
  }
`;

export const RestrospectiveHeaderContent = styled.div`
  width: 350px;
  height: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  ${breakpoints.higherThan("desktop")} {
    width: 500px;
  }
`;

export const Ball = styled.div<{ backgroundColor?: string }>`
  width: 20px;
  height: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;

  ${breakpoints.higherThan("desktop")} {
    width: 30px;
    height: 30px;
  }
`;
