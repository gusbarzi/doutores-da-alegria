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
import OriginalArt9 from "../../../../../public/assets/photos/originalart-9.png";
import { ReactComponent as BlueHeart } from "../../../../../public/assets/coração-azul.svg";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import { RetrospectiveContainer } from "../retrospectiveEight/retrospectiveEight.styles";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospectiveFive/retrospectiveFive.styles";
import { OriginalArtTwo } from "../retrospectiveFour/retrospectiveFour.styles";

export const RetrospectiveTwelve: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const handleNext = () => {
    navigate("/restrospectiva-13")
    window.scrollTo(0, 0);
  }

  const handleBack = () => {
    navigate("/restrospectiva-11")
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
                  fontSize={20}
                  textTransform="uppercase"
                >
                  março
                </Typography>
              </TextContainer>
              <BackgroundBlueContainer
                style={{
                  position: "relative",
                }}
              >
                <TextDivision
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <TextSideDivision
                    style={{
                      position: "absolute",
                      width: "600px",
                      height: "700px",
                      left: "15px",
                    }}
                  >
                    <OriginalArtTwo src={OriginalArt9} />
                  </TextSideDivision>
                  <TextSideDivision
                    style={{
                      width: "700px",
                    }}
                  >
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={32}
                      chooseGap={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.ManualBasic}
                        textColor={DalegriaColorsEnum.Yellow}
                        fontSize={36}
                        textTransform="uppercase"
                      >
                        {t(
                          "retrospective.retrospective_twelve.background_container.doctors_school.title"
                        )}
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        fontSize={32}
                      >
                        A unidade Recife foi homenageada pela Câmara Municipal
                        do Recife nas comemorações do Dia Nacional do Circo
                        pelos 19 anos de atuação na capital pernambucana. O
                        reconhecimento foi proposto pela vereadora Cida Pedrosa
                        e a homenagem foi recebida pelos coordenadores Arilson
                        Lopes e Nice Vasconcelos durante uma sessão especial.
                      </Typography>
                    </TextContainer>
                  </TextSideDivision>
                </TextDivision>
              </BackgroundBlueContainer>
              <div
                style={{
                  width: "100%",
                  height: "150px",
                  backgroundColor: "transparent",
                }}
              />
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
                  "retrospective.retrospective_twelve.background_container.doctors_school.date"
                )}
              </Typography>
            </TextContainer>

            <BackgroundBlueContainer>
              <img
                src={OriginalArt9}
                width="115%"
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
                >
                  {t(
                    "retrospective.retrospective_twelve.background_container.doctors_school.title"
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
                    "retrospective.retrospective_twelve.background_container.doctors_school.stanza_01"
                  )}
                </Typography>
              </TextContainer>
            </BackgroundBlueContainer>
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
