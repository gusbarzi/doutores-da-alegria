import React from "react";
import {
  BannerContainer
} from "../insideOut.styles";
import { DalegriaContainer, TextContainer, Typography } from "../../../styles/global.styles";
import { DalegriaFontesEnum } from "../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../utils/colors";
import { useTranslation } from "react-i18next";
import { ArtboardImage } from "../../socialImpact/socialImpact.styles";
import artImage from "../../../../public/assets/PNGS/Outros/Artboard 5.png";


export const InsideOutMobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <BannerContainer>
        <ArtboardImage src={artImage} />
      </BannerContainer>
      <DalegriaContainer choosePadding={16}>
        <TextContainer textAlign="left" marginBottom={16}>
          <Typography
            fontFamily={DalegriaFontesEnum.StdBold}
            textColor={DalegriaColorsEnum.Black}
            fontSize={16}
          >
            {t("inside_out.main_description")}
          </Typography>
        </TextContainer>

        <TextContainer
          textAlign="left"
          justifyContent="flex-start"
          align="flex-start"
          marginBottom={16}
        >
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasic}
            textColor={DalegriaColorsEnum.LightBlue}
            fontSize={28}
          >
            {t("inside_out.titles.title_01")}
          </Typography>
        </TextContainer>

        <TextContainer textAlign="left" chooseGap={16} marginBottom={16}>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={16}
          >
            {t("inside_out.way_being.first_stanza")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={16}
          >
            {t("inside_out.way_being.second_stanza")}
          </Typography>
        </TextContainer>

        <TextContainer
          textAlign="left"
          justifyContent="flex-start"
          align="flex-start"
          marginBottom={16}
        >
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasic}
            textColor={DalegriaColorsEnum.LightBlue}
            fontSize={28}
          >
            {t("inside_out.titles.title_02")}
          </Typography>
        </TextContainer>

        <TextContainer textAlign="left" chooseGap={16}>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={16}
          >
            {t("inside_out.integraty_code.first_stanza")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={16}
          >
            {t("inside_out.integraty_code.second_stanza")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={16}
          >
            {t("inside_out.integraty_code.third_stanza")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={16}
          >
            {t("inside_out.integraty_code.fourth_stanza")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={16}
          >
            {t("inside_out.integraty_code.fifth_stanza")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={16}
          >
            {t("inside_out.integraty_code.sixth_stanza")}
          </Typography>
        </TextContainer>
      </DalegriaContainer>
    </>
  );
};
