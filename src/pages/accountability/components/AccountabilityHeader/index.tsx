import React from "react";
import { HeaderContainer } from "../../accountability.styles";
import { TextContainer, Typography } from "../../../../styles/global.styles";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { useTranslation } from "react-i18next";

export const AccountabilityHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <TextContainer
        textAlign="left"
        justifyContent="flex-start"
        align="flex-start"
        marginBottom={16}
      >
        <Typography
          fontFamily={DalegriaFontesEnum.ManualBasicS}
          textColor={DalegriaColorsEnum.LightBlue}
          lineHeight={1}
          fontSize={68}
        >
          {t("retrospective.accountability.title_01")}
        </Typography>
      </TextContainer>
      <TextContainer
        textAlign="left"
        justifyContent="flex-start"
        align="flex-start"
        marginBottom={16}
      >
        <Typography
          fontFamily={DalegriaFontesEnum.StdBold}
          textColor={DalegriaColorsEnum.Pink}
          lineHeight={1}
          fontSize={16}
        >
          {t("retrospective.accountability.subtitle_01")}
        </Typography>
      </TextContainer>
      <TextContainer
        textAlign="left"
        justifyContent="flex-start"
        align="flex-start"
        marginBottom={12}
      >
        <Typography
          fontFamily={DalegriaFontesEnum.StdLight}
          textColor={DalegriaColorsEnum.Black}
          lineHeight={1}
          fontSize={12}
        >
          {t("retrospective.accountability.sub_description")}
        </Typography>
      </TextContainer>
    </HeaderContainer>
  );
};
