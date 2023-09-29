import { styled } from "styled-components";
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
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

export const GridItemTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 335px;
`;

export const JokerImage = styled.img`
  width: 50%;
`;

export const HeartRed = styled.img`
  width: 15%;
`;