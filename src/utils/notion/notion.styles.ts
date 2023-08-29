import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ManualBasic = styled.span`
  font-family: ${DalegriaFontesEnum.ManualBasic};
  color: ${DalegriaColorsEnum.Yellow};
  font-size: 40px;
`;

export const ManualBasicS = styled.span`
  font-family: ${DalegriaFontesEnum.ManualBasicS};
  color: ${DalegriaColorsEnum.Salmon};
  font-size: 40px;
`;

export const ManualInline = styled.span`
  font-family: ${DalegriaFontesEnum.ManualInline};
  color: ${DalegriaColorsEnum.Red};
  font-size: 40px;
`;

export const ManualSombra = styled.span`
  font-family: ${DalegriaFontesEnum.ManualSombra};
  color: ${DalegriaColorsEnum.Green};
  font-size: 40px;
`;

export const SimplesBasic = styled.span`
  font-family: ${DalegriaFontesEnum.SimplesBasic};
  color: ${DalegriaColorsEnum.LightBlue};
  font-size: 40px;
`;

export const SimplesCirco = styled.span`
  font-family: ${DalegriaFontesEnum.SimplesCirco};
  color: ${DalegriaColorsEnum.DarkBlue};
  font-size: 40px;
`;

export const SimplesInlineS = styled.span`
  font-family: ${DalegriaFontesEnum.SimplesInlineS};
  color: ${DalegriaColorsEnum.Pink};
  font-size: 40px;
`;

export const StdBlack = styled.span`
  font-family: ${DalegriaFontesEnum.StdBlack};
  color: ${DalegriaColorsEnum.Purple};
  font-size: 40px;
`;

export const StdBold = styled.span`
  font-family: ${DalegriaFontesEnum.StdBold};
  font-size: 40px;
`;

export const StdLight = styled.span`
  font-family: ${DalegriaFontesEnum.StdLight};
  font-size: 40px;
`;

export const StdThin = styled.span`
  font-family: ${DalegriaFontesEnum.StdThin};
  font-size: 40px;
`;