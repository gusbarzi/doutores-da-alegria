import React from "react";
import { Typography } from "../../../../styles/global.styles";
import { Ball, RestrospectiveHeaderContainer, RestrospectiveHeaderContent } from "./retrospectiveHeader.styles";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";

export const RetrospectiveHeader: React.FC = () => {
  return (
    <RestrospectiveHeaderContainer>
      <RestrospectiveHeaderContent>
        <Ball backgroundColor={DalegriaColorsEnum.Red} /> 
        <Typography
          fontFamily={DalegriaFontesEnum.ManualBasicS}
          textColor={DalegriaColorsEnum.LightBlue}
          fontSize={28}
        >RETROSPECTIVA 2022</Typography>
        <Ball backgroundColor={DalegriaColorsEnum.Pink} /> 
      </RestrospectiveHeaderContent>
    </RestrospectiveHeaderContainer>
  )
}