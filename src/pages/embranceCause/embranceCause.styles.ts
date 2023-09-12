import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const EmbranceCauseContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
`;

export const EmbranceCauseContainerDesktop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 16px 60px;
  gap: 8px;
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

export const BackgroundPurple = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Purple};
  padding: 16px;
`;

export const JokerImage = styled.img`
  width: 60%;
`;

export const JokerImageTwo = styled.img`
  width: 100%;
`

export const ImagemDiv = styled.div`
  display: flex;
  margin-bottom: -30px;
`;
