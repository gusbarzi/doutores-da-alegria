import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const SocialImpactContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px;

  ${breakpoints.higherThan('desktop')} {
    justify-content: flex-end;
    align-items: flex-start;

    width: 1000px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: justify;
`;

export const StanzaText = styled.span`
  font-family: ${DalegriaFontesEnum.StdLight};
  color: ${DalegriaColorsEnum.Black};
  font-size: 16px;
`;

export const SubTitle = styled.span`
  font-family: ${DalegriaFontesEnum.SimplesBasic};
  color: ${DalegriaColorsEnum.Pink};
  font-size: 20px;
`

export const ItemsListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Yellow};
`;

export const SocialImpactContentDesktop = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const SocialBannerContainerDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  padding: 0 60px;

  justify-content: center;
  align-items: center;
`;

export const SocialBannerContentDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 300px;

  background-color: ${DalegriaColorsEnum.Yellow};
`;

export const BannerDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const SocialImpactTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
  position: absolute;
  top: 125px;
  left: 30px;
`
