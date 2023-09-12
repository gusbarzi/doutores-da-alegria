import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const XRayHiperContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 60px;
`;

export const ColorideBackground = styled.div` 
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Yellow};
  padding: 32px 16px;
  margin-bottom: 16px;
  gap: 16px;
`;

export const ColorideBackgroundDesktop = styled.div` 
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: ${DalegriaColorsEnum.Yellow};
  padding: 32px 16px;
  margin-bottom: 16px;
  gap: 16px;
`;

export const TransparentBackgroundDesktop = styled.div` 
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 32px 16px;
  margin-bottom: 16px;
  gap: 16px;
`;

export const XRayBannerContainerDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  padding: 0 60px;

  justify-content: center;
  align-items: center;
`;

export const XRayBannerContentDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 250px;

  background-color: ${DalegriaColorsEnum.Purple};
`;

export const XRayBannerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 32px;
`;

export const JokerImage = styled.img`
  width: 500px;
`;

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: right;
  position: relative;
  flex-direction: column;
`;