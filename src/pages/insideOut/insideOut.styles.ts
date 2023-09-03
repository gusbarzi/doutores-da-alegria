import { css, styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const InsideOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 60px;
  gap: 16px;
`;

export const InsideOutBannerContainerDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  padding: 0 60px;

  justify-content: center;
  align-items: center;
`;

export const InsideOutBannerContentDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 330px;

  background-color: ${DalegriaColorsEnum.Purple};
`;

export const InsideOutBannerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 32px;
`;

export const HiperContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;