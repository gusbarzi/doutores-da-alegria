import React from "react";
import { Typography } from "../../../../styles/global.styles";
import {
  Ball,
  RestrospectiveHeaderContainer,
  RestrospectiveHeaderContent,
} from "./retrospectiveHeader.styles";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";

export const RetrospectiveHeader: React.FC = () => {
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  return (
    <RestrospectiveHeaderContainer>
      <RestrospectiveHeaderContent>
        <Ball backgroundColor={DalegriaColorsEnum.Red} />
        <Typography
          fontFamily={DalegriaFontesEnum.ManualBasicS}
          textColor={DalegriaColorsEnum.LightBlue}
          fontSize={isDesktop ? 40 : 32}
        >
          RETROSPECTIVA 2022
        </Typography>
        <Ball backgroundColor={DalegriaColorsEnum.Pink} />
      </RestrospectiveHeaderContent>
    </RestrospectiveHeaderContainer>
  );
};
