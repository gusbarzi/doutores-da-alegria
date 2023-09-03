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
import OriginalArt13 from "../../../../../public/assets/photos/originalart-13.jpg";
import { ReactComponent as BlueHeart } from "../../../../../public/assets/coração-azul.svg";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import { RetrospectiveContainer } from "../retrospectiveEight/retrospectiveEight.styles";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospectiveFive/retrospectiveFive.styles";
import { OriginalArtTwo } from "../retrospectiveFour/retrospectiveFour.styles";
import { SquareColored } from "../../../../components/SquareColored";

export const RetrospectiveFiveteen: React.FC = () => {
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
                    width: "700px",
                    height: "700px",
                    left: "15px",
                  }}
                >
                  <OriginalArtTwo src={OriginalArt13} />
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
                      fontSize={32}
                      textTransform="uppercase"
                    >
                      Antes, você podia ouvir! agora, dá para ver e ouvir
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      fontSize={28}
                    >
                      Em sua 2a temporada, lançada no mês de outubro, o podcast
                      O palhaço: O que é?, da Escola Doutores da Alegria, virou
                      videocast. Raul Figueiredo, palhaço e artista-formador da
                      Escola, recebeu convidados especiais para discutir o
                      arquétipo do palhaço e a sua função social. Os seis
                      episódios – Bufão, Commedia Dell’Arte, Cultura Popular –
                      Ritos e Estéticas, Circo, Artistas na Rua e Palhaço no
                      Hospital - estão disponíveis nas principais plataformas de
                      áudio e no YouTube. A série em videocast no Youtube teve
                      611 visualizações, 672 reproduções no Spotify e alcançou
                      cerca de 4,6 mil pessoas no instagram.
                    </Typography>
                  </TextContainer>
                </TextSideDivision>
              </TextDivision>
            </BackgroundBlueContainer>
            <div
              style={{
                width: "100%",
                height: "280px",
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <SquareColored
                type="primary"
                backgroundColor={DalegriaColorsEnum.Yellow}
                style={{
                  height: "80px",
                  width: "600px",
                  position: "absolute",
                  left: "805px",
                  top: "900px"
                }}
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
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={26}
                  >
                    CONFIRA O VIDEOCAST O PALHAÇO: O QUE É?
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
                src={OriginalArt13}
                width={380}
                height={500}
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
                    "retrospective.retrospective_fiveteen.background_container.doctors_school.title"
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
                    "retrospective.retrospective_fiveteen.background_container.doctors_school.stanza_01"
                  )}
                </Typography>
              </TextContainer>
            </BackgroundBlueContainer>
          </DalegriaContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/restrospectiva-14")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/restrospectiva-16")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
