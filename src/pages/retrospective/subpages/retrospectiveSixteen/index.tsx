import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  BackgroundBlueContainer,
  ButtonContainer,
  DalegriaContainer,
  GlobalBackButton,
  GlobalContainer,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../../../styles/global.styles";
import OriginalArt14 from "../../../../../public/assets/photos/originalart-14.png";
import { ReactComponent as BlueHeart } from "../../../../../public/assets/coração-azul.svg";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { SquareColored } from "../../../../components/SquareColored";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospectiveFive/retrospectiveFive.styles";
import { OriginalArtTwo } from "../retrospectiveFour/retrospectiveFour.styles";
import { RetrospectiveContainer } from "../retrospectiveEight/retrospectiveEight.styles";

export const RetrospectiveSixteen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const handleNext = () => {
    navigate("/restrospectiva-17")
    window.scrollTo(0, 0);
  }

  const handleBack = () => {
    navigate("/restrospectiva-15")
    window.scrollTo(0, 0);
  }

  return (
    <>
      {isDesktop ? (
        <>
          <RetrospectiveHeader />
          <GlobalContainer>
            <TextContainer
              textAlign="center"
              justifyContent="center"
              align="center"
              marginBottom={16}
              chooseGap={4}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.LightBlue}
                fontSize={52}
                textTransform="uppercase"
              >
                {t("retrospective.month_to_month")}
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Gray}
                fontSize={18}
                textTransform="uppercase"
              >
                {t("retrospective.month_to_month_description")}
              </Typography>
            </TextContainer>
            <RetrospectiveContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="center"
                flexDirection="row"
              >
                <BlueHeart width={50} height={40} />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.LightBlue}
                  fontSize={18}
                  textTransform="uppercase"
                >
                  SETEMBRO A DEZEMBRO
                </Typography>
              </TextContainer>
              <BackgroundBlueContainer
                style={{
                  position: "relative",
                }}
              >
                <TextDivision>
                  <TextSideDivision
                    style={{
                      width: "550px",
                    }}
                  >
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={32}
                      chooseGap={8}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.ManualBasic}
                        textColor={DalegriaColorsEnum.Yellow}
                        fontSize={32}
                        textTransform="uppercase"
                      >
                        {t(
                          "retrospective.retrospective_sixteen.background_container.doctors_school.title"
                        )}
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        fontSize={24.25}
                      >
                        {t(
                          "retrospective.retrospective_sixteen.background_container.doctors_school.stanza_01"
                        )}
                      </Typography>
                    </TextContainer>
                  </TextSideDivision>
                  <TextSideDivision
                    style={{
                      position: "absolute",
                      width: "730px",
                      height: "700px",
                      right: "40px",
                    }}
                  >
                    <OriginalArtTwo src={OriginalArt14} />
                  </TextSideDivision>
                </TextDivision>
              </BackgroundBlueContainer>
              <TextSideDivision
                style={{
                  display: "flex",
                  width: "600px",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  marginTop: "-40px",
                  marginLeft: "-100px",
                  zIndex: "10",
                }}
              >
                <SquareColored
                  type="primary"
                  backgroundColor={DalegriaColorsEnum.Yellow}
                  style={{
                    height: "140px",
                    width: "460px",
                  }}
                >
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={12}
                    chooseGap={4}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      fontSize={24}
                    >
                      9 ARTISTAS
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdBold}
                      textColor={DalegriaColorsEnum.Black}
                      fontSize={14}
                    >
                      FORAM SELECIONADOS PARA O ELENCO SUBSTITUTO EM SÃO PAULO
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    flexDirection="row"
                    align="flex-end"
                    marginBottom={12}
                    chooseGap={4}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      fontSize={24}
                    >
                      140 PESSOAS
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdBold}
                      textColor={DalegriaColorsEnum.Black}
                      fontSize={16}
                    >
                      SE INSCREVERAM NA SELEÇÃO
                    </Typography>
                  </TextContainer>
                </SquareColored>
              </TextSideDivision>
            </RetrospectiveContainer>
          </GlobalContainer>
        </>
      ) : (
        <>
          <RetrospectiveHeader />
          <DalegriaContainer choosePadding={16}>
            <TextContainer
              textAlign="center"
              justifyContent="center"
              align="center"
              marginBottom={12}
              chooseGap={4}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.LightBlue}
                fontSize={28}
                textTransform="uppercase"
              >
                {t("retrospective.month_to_month")}
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Gray}
                fontSize={10}
                textTransform="uppercase"
              >
                {t("retrospective.month_to_month_description")}
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="center"
              chooseGap={4}
              marginBottom={12}
              flexDirection="row"
            >
              <BlueHeart width={40} height={30} />
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.LightBlue}
                fontSize={14}
                textTransform="uppercase"
              >
                {t(
                  "retrospective.retrospective_sixteen.background_container.doctors_school.date"
                )}
              </Typography>
            </TextContainer>

            <BackgroundBlueContainer>
              <img
                src={OriginalArt14}
                width={380}
                height={350}
                style={{ marginBottom: "16px" }}
              />
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={12}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.Yellow}
                  fontSize={20}
                  textTransform="uppercase"
                >
                  {t(
                    "retrospective.retrospective_sixteen.background_container.doctors_school.title"
                  )}
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
                  textColor={DalegriaColorsEnum.White}
                  fontSize={16}
                >
                  {t(
                    "retrospective.retrospective_sixteen.background_container.doctors_school.stanza_01"
                  )}
                </Typography>
              </TextContainer>

              <SquareColored
                type="primary"
                backgroundColor={DalegriaColorsEnum.Yellow}
                style={{ height: "140px", marginBottom: "-150px"}}
              >
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={12}
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.LightBlue}
                    fontSize={18}
                  >
                    9 ARTISTAS
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={12}
                  >
                    FORAM SELECIONADOS PARA O ELENCO SUBSTITUTO EM SÃO PAULO
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  flexDirection="row"
                  align="flex-end"
                  marginBottom={12}
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.LightBlue}
                    fontSize={18}
                  >
                    140 PESSOAS
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={12}
                  >
                    SE INSCREVERAM NA SELEÇÃO
                  </Typography>
                </TextContainer>
              </SquareColored>
            </BackgroundBlueContainer>
            <div
              style={{
                height: "120px",
              }}
            />
          </DalegriaContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={handleBack}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={handleNext}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
