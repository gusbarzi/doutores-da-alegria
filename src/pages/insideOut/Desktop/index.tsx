import React from "react";
import {
  Division,
  InsideOutBannerContainerDesktop,
  InsideOutBannerContentDesktop,
  InsideOutBannerDetailsContainer,
  InsideOutContainer,
  JokerImage,
  Left,
  Right,
} from "../insideOut.styles";
import {
  GlobalContainer,
  TextContainer,
  Typography,
} from "../../../styles/global.styles";
import { DalegriaFontesEnum } from "../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../utils/colors";
import { useTranslation } from "react-i18next";
import jokerSix from "../../../../public/assets/jokersPng/mobile-recortes6.png";

export const InsideOutDesktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <GlobalContainer>
      <InsideOutBannerContainerDesktop>
        <InsideOutBannerContentDesktop>
          <InsideOutBannerDetailsContainer>
            <Division>
              <Left>
                <JokerImage src={jokerSix} />
              </Left>
              <Right>
                <TextContainer
                  align="center"
                  justifyContent="center"
                  textAlign="left"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasicS}
                    textColor={DalegriaColorsEnum.Pink}
                    fontSize={100}
                    style={{ marginRight: "150px", marginTop: "30px" }}
                    whiteSpace="nowrap"
                  >
                    de dentro
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasicS}
                    textColor={DalegriaColorsEnum.Yellow}
                    fontSize={100}
                    lineHeight={0.8}
                    style={{ marginRight: "150px" }}
                    whiteSpace="nowrap"
                  >
                    para fora
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-end"
                  align="flex-end"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={20}
                  >
                    {t("inside_out.main_description")}
                  </Typography>
                </TextContainer>
              </Right>
            </Division>
          </InsideOutBannerDetailsContainer>
        </InsideOutBannerContentDesktop>
      </InsideOutBannerContainerDesktop>

      <InsideOutContainer>
        <TextContainer
          textAlign="left"
          justifyContent="flex-start"
          align="flex-start"
          marginTop={60}
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
            fontSize={18}
          >
            {t("inside_out.way_being.first_stanza")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={18}
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

        <TextContainer textAlign="left" chooseGap={16} align="flex-start">
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={18}
          >
            {t("inside_out.integraty_code.first_stanza")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={18}
          >
            {t("inside_out.integraty_code.second_stanza")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={18}
          >
            {t("inside_out.integraty_code.third_stanza")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={18}
          >
            {t("inside_out.integraty_code.fourth_stanza")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={18}
          >
            {t("inside_out.integraty_code.fifth_stanza")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={18}
          >
            {t("inside_out.integraty_code.sixth_stanza")}
          </Typography>
        </TextContainer>
      </InsideOutContainer>
    </GlobalContainer>
  );
};
