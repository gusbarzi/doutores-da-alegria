import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  DalegriaContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";
import {
  HiperContainer,
  InsideOutBannerContainerDesktop,
  InsideOutBannerContentDesktop,
  InsideOutBannerDetailsContainer,
  InsideOutContainer,
} from "./insideOut.styles";

export const InsideOut: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  return (
    <>
      {isDesktop ? (
        <>
          <InsideOutBannerContainerDesktop>
            <InsideOutBannerContentDesktop>
              <InsideOutBannerDetailsContainer>
                <TextContainer
                  align="flex-end"
                  justifyContent="center"
                  textAlign="center"
                  chooseHeight={400}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasicS}
                    textColor={DalegriaColorsEnum.Pink}
                    fontSize={100}
                    style={{ marginRight: "116px" }}
                  >
                    de dentro
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasicS}
                    textColor={DalegriaColorsEnum.Yellow}
                    fontSize={100}
                    lineHeight={0.8}
                    style={{ marginRight: "100px", marginBottom: "24px" }}
                  >
                    para fora
                  </Typography>
                </TextContainer>
              </InsideOutBannerDetailsContainer>
            </InsideOutBannerContentDesktop>
          </InsideOutBannerContainerDesktop>
          <InsideOutContainer>
            <HiperContainer>
              <TextContainer
                textAlign="left"
                marginBottom={16}
                justifyContent="flex-end"
                align="flex-end"
                chooseWidth={600}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.Black}
                  fontSize={16}
                >
                  {t("inside_out.main_description")}
                </Typography>
              </TextContainer>
            </HiperContainer>

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
        </>
      ) : (
        <>
          <a href=""></a>
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
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/texto-diretoria")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/raio-x-01")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
