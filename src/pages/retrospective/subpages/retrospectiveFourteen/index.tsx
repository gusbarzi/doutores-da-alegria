import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  BackgroundBlueContainer,
  ButtonContainer,
  DalegriaContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../../../styles/global.styles";
import OriginalArt12 from "../../../../../public/assets/photos/originalart-12.jpg";
import { ReactComponent as BlueHeart } from "../../../../../public/assets/coração-azul.svg";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { SquareColored } from "../../../../components/SquareColored";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import { RetrospectiveContainer } from "../retrospectiveEight/retrospectiveEight.styles";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospectiveFive/retrospectiveFive.styles";
import { OriginalArtTwo } from "../retrospectiveFour/retrospectiveFour.styles";
import { OriginalArtTwelve } from "./retrospectiveFourteen.styles";

export const RetrospectiveFourteen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  return (
    <>
      {isDesktop ? (
        <>
          <RetrospectiveHeader />
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
                {t("retrospective.january_to_abril")}
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
                  <OriginalArtTwelve src={OriginalArt12} />
                </TextSideDivision>
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
                    chooseGap={16}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.Yellow}
                      fontSize={24}
                      textTransform="uppercase"
                    >
                      {t(
                        "retrospective.retrospective_twelve.background_container.doctors_school.title"
                      )}
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      fontSize={20}
                    >
                      A unidade Recife foi homenageada pela Câmara Municipal do
                      Recife nas comemorações do Dia Nacional do Circo pelos 19
                      anos de atuação na capital pernambucana. O reconhecimento
                      foi proposto pela vereadora Cida Pedrosa e a homenagem foi
                      recebida pelos coordenadores Arilson Lopes e Nice
                      Vasconcelos durante uma sessão especial.
                    </Typography>
                  </TextContainer>
                </TextSideDivision>
              </TextDivision>
            </BackgroundBlueContainer>
            <div
              style={{
                width: "100%",
                height: "230px",
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <SquareColored
                type="primary"
                backgroundColor={DalegriaColorsEnum.Yellow}
                style={{ height: "150px", width: '400px', marginRight: "150px" }}
              >
                <TextContainer
                  textAlign="left"
                  justifyContent="center"
                  flexDirection="row"
                  align="center"
                  marginBottom={12}
                  chooseHeight={60}
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.LightBlue}
                    fontSize={32}
                  >
                    18
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={18}
                  >
                    APRESENTAÇÕES GRATUITAS
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="center"
                  flexDirection="row"
                  align="center"
                  marginBottom={12}
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.LightBlue}
                    fontSize={32}
                  >
                    1.331
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={16}
                  >
                    PESSOAS ASSISTIRAM AO ESPETÁCULO
                  </Typography>
                </TextContainer>
              </SquareColored>
            </div>
          </RetrospectiveContainer>
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
                  "retrospective.retrospective_fourteen.background_container.doctors_school.date"
                )}
              </Typography>
            </TextContainer>

            <BackgroundBlueContainer>
              <img
                src={OriginalArt12}
                width={380}
                height={250}
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
                    "retrospective.retrospective_fourteen.background_container.doctors_school.title"
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
                    "retrospective.retrospective_fourteen.background_container.doctors_school.stanza_01"
                  )}
                </Typography>
              </TextContainer>

              <SquareColored
                type="primary"
                backgroundColor={DalegriaColorsEnum.Yellow}
                style={{ height: "95px" }}
              >
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  flexDirection="row"
                  align="center"
                  marginBottom={12}
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.LightBlue}
                    fontSize={24}
                  >
                    18
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    APRESENTAÇÕES GRATUITAS
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  flexDirection="row"
                  align="center"
                  marginBottom={12}
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.LightBlue}
                    fontSize={24}
                  >
                    1.331
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    PESSOAS ASSISTIRAM AO ESPETÁCULO
                  </Typography>
                </TextContainer>
              </SquareColored>
            </BackgroundBlueContainer>
          </DalegriaContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/restrospectiva-13")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/restrospectiva-15")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
