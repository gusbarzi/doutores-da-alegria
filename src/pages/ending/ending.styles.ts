import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const EndingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 1000px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
  background-color: ${DalegriaColorsEnum.Yellow};
`;

export const Twenty = styled.img`
  width: 90%;

  ${breakpoints.higherThan('desktop')} {
    width: 30%;
  }
`;