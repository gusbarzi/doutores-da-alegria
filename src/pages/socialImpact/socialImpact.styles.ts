import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const SocialImpactContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
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
