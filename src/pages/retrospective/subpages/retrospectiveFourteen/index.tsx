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
import { OriginalArtTwelve } from "./retrospectiveFourteen.styles";
import { LinkPersonal } from "../retrospectiveTen/retrospectiveTen.styles";

export const RetrospectiveFourteen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const handleNext = () => {
    navigate("/restrospectiva-15");
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    navigate("/restrospectiva-13");
    window.scrollTo(0, 0);
  };

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
                  SETEMBRO E OUTUBRO
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
                      width: "530px",
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
                        fontSize={32}
                        textTransform="uppercase"
                      >
                        Peça de suspense, mágica e risada
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        fontSize={22}
                      >
                        Os universos do circo e do hospital se misturam na peça
                        “O médico é o monstro?”, que reestreou no Teatro Marco
                        Camarotti, no Recife, no mês de setembro. O espetáculo,
                        de suspense e muito humor, conta o que aconteceu depois
                        que a equipe de um hospital-picadeiro recebeu a visita
                        de uma paciente misteriosa.
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        fontSize={22}
                      >
                        <LinkPersonal to="https://www.instagram.com/p/CaXpBfGp_xw/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                          Veja a experiência das crianças no espetáculo
                        </LinkPersonal>
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
                  style={{
                    height: "140px",
                    width: "400px",
                    marginRight: "150px",
                    marginBottom: "56px",
                  }}
                >
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
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
                    justifyContent="flex-start"
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
            <div style={{ height: "35px" }} />
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
                  "retrospective.retrospective_fourteen.background_container.doctors_school.date"
                )}
              </Typography>
            </TextContainer>

            <BackgroundBlueContainer>
              <img
                src={OriginalArt12}
                width={330}
                height={220}
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
                chooseGap={16}
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
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.White}
                  fontSize={14}
                >
                  <LinkPersonal to="https://www.instagram.com/p/CaXpBfGp_xw/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                    Veja a experiência das crianças no espetáculo
                  </LinkPersonal>
                </Typography>
              </TextContainer>

              <SquareColored
                type="primary"
                backgroundColor={DalegriaColorsEnum.Yellow}
                style={{ height: "95px", marginBottom: "-100px" }}
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
                    fontSize={12}
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
                    fontSize={20}
                  >
                    1.331
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    width={220}
                    fontSize={12}
                  >
                    PESSOAS ASSISTIRAM AO ESPETÁCULO
                  </Typography>
                </TextContainer>
              </SquareColored>
            </BackgroundBlueContainer>
            <div
              style={{
                height: "80px",
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
