import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const TextBoardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

export const BoardDescriptionText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${breakpoints.higherThan('desktop')} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 100px;
    margin-bottom: 32px;
  }
`;

export const BoardText = styled.span`
  font-family: ${DalegriaFontesEnum.StdLight};
  color: ${DalegriaColorsEnum.Black};
  font-size: 20px;

  ${breakpoints.higherThan('desktop')} {
    text-align: left;
    width: 600px;
  }
`;