import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const FilesContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Yellow};
  padding: 16px;
  gap: 16px;
`;

export const FilesContainerDesktop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.White};
  padding: 16px;
`;

export const FilesContentDesktop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Yellow};
  padding: 32px;
  gap: 16px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const GridItemOne = styled.div`
  width: 180px;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

export const GridItemTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 335px;
`;