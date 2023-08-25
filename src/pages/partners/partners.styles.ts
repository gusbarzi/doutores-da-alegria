import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const PartnersContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  position: relative;

  &::before, &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: red;
  }

  &::before {
    left: calc(33.33% - 4px);
  }

  &::after {
    left: calc(66.66% + 2px);
  }
`;

export const GridItemOne = styled.div`
  width: 110px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const GridItemTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 110px;
  height: 500px;
`;
export const GridItemTree = styled.div`
  display: flex;
  flex-direction: column;
  width: 110px;
  height: 500px;
`;