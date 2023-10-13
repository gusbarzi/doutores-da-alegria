import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  DalegriaContainer,
  GlobalBackButton,
  GlobalContainer,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../../../styles/global.styles";
import heart from "../../../../../public/assets/PNGS/Outros/coração.png";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import {
  BannerContainer,
  Division,
  DivisorContainer,
  ImageContainer,
  ImageContainerDesktop,
  JokerImage,
  Left,
  LeftSide,
  LeftTextFirstStanza,
  LeftTextSecondStanza,
  RetrospectiveHiperContainer,
  RetrospectiveOneBannerContainerDesktop,
  RetrospectiveOneBannerContentDesktop,
  RetrospectiveOneBannerDetailsContainer,
  Right,
  RightSide,
  RightTextFirstStanza,
  RightTextSecondStanza,
  SecondStanzaDivisor,
  TwoHundredContainer,
} from "./retrospectiveOne.styles";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import { TextSideDivision } from "../retrospectiveFive/retrospectiveFive.styles";
import { ArtboardImage } from "../../../opening/opening.styles";
import artImage from "../../../../../public/assets/PNGS/Outros/Artboard 7.png";
import jokerEigth from "../../../../../public/assets/jokersPng/mobile-recortes8.png";

export const RetrospectiveOne: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const pushBack = isDesktop ? "/raio-x-01" : "/raio-x-02";

  const handleNext = () => {
    navigate("/restrospectiva-02");
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    navigate(pushBack);
    window.scrollTo(0, 0);
  };

  return (
    <GlobalContainer>
      {isDesktop ? (
        <>
          <RetrospectiveOneBannerContainerDesktop>
            <RetrospectiveOneBannerContentDesktop>
              <RetrospectiveOneBannerDetailsContainer>
                <Division>
                  <Left>
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Black}
                      fontSize={16}
                      textTransform="uppercase"
                      style={{
                        writingMode: "vertical-lr",
                        marginBottom: "16px",
                        marginRight: "4px",
                        transform: "rotate(180deg)",
                      }}
                    >
                      foto lana pinho
                    </Typography>
                    <JokerImage src={jokerEigth} />
                  </Left>
                  <Right>
                    <TextContainer
                      align="flex-end"
                      justifyContent="center"
                      textAlign="center"
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.ManualBasicS}
                        textColor={DalegriaColorsEnum.LightBlue}
                        fontSize={100}
                        style={{ marginRight: "50px" }}
                      >
                        retrospectiva
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      flexDirection="row"
                      chooseGap={24}
                      align="flex-start"
                      justifyContent="flex-end"
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.Black}
                        fontSize={16}
                        style={{
                          width: "50%",
                          textAlign: "right",
                          marginTop: "12px",
                        }}
                      >
                        VIVEMOS MOMENTOS DESAFIADORES NOS ÚLTIMOS ANOS, MAS
                        SEGUIMOS ADIANTE.O RESULTADO? A MANUTENÇÃO DE TODOS OS
                        NOSSOS PROJETOS E A CRIAÇÃO DE NOVAS AÇÕES
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.ManualBasicS}
                        textColor={DalegriaColorsEnum.LightBlue}
                        fontSize={100}
                        lineHeight={0.8}
                        style={{ marginRight: "50px", marginBottom: "24px" }}
                      >
                        2022
                      </Typography>
                    </TextContainer>
                  </Right>
                </Division>
              </RetrospectiveOneBannerDetailsContainer>
            </RetrospectiveOneBannerContentDesktop>
          </RetrospectiveOneBannerContainerDesktop>
          <RetrospectiveHiperContainer>
            <LeftSide>
              <TextContainer
                textAlign="center"
                justifyContent="center"
                align="center"
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.Yellow}
                  fontSize={250}
                  height={250}
                >
                  211.603
                </Typography>
              </TextContainer>
              <DivisorContainer>
                <LeftTextFirstStanza>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Yellow}
                    fontSize={80}
                  >
                    {t("retrospective.people")}
                  </Typography>
                </LeftTextFirstStanza>
                <RightTextFirstStanza>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={24}
                  >
                    {t("retrospective.were_beneficied")}
                  </Typography>
                  <TextSideDivision
                    style={{
                      display: "flex",
                      width: "10%",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      marginBottom: "-300px",
                      marginRight: "-30px",
                    }}
                  >
                    <ImageContainerDesktop src={heart} />
                  </TextSideDivision>
                </RightTextFirstStanza>
              </DivisorContainer>
            </LeftSide>
            <RightSide>
              <SecondStanzaDivisor>
                <LeftTextSecondStanza>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    textTransform="uppercase"
                    fontSize={24}
                  >
                    {t("retrospective.employed_more")}
                  </Typography>
                </LeftTextSecondStanza>
                <RightTextSecondStanza>
                  <TwoHundredContainer>
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.Pink}
                      fontSize={250}
                      height={250}
                    >
                      250
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.Pink}
                      fontSize={60}
                      height={55}
                    >
                      {t("retrospective.workers")}
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.Pink}
                      fontSize={60}
                    >
                      {t("retrospective.family")}
                    </Typography>
                    <TextContainer
                      align="flex-start"
                      justifyContent="flex-start"
                      textAlign="right"
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textTransform="uppercase"
                        textColor={DalegriaColorsEnum.Black}
                        fontSize={20}
                        style={{ marginLeft: "220px" }}
                      >
                        direta
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textTransform="uppercase"
                        textColor={DalegriaColorsEnum.Black}
                        fontSize={20}
                        style={{ marginLeft: "220px" }}
                      >
                        ou indiretamente
                      </Typography>
                    </TextContainer>
                  </TwoHundredContainer>
                </RightTextSecondStanza>
              </SecondStanzaDivisor>
            </RightSide>
          </RetrospectiveHiperContainer>
        </>
      ) : (
        <>
          <BannerContainer>
            <ArtboardImage src={artImage} />
          </BannerContainer>
          <DalegriaContainer chooseGap={0} choosePadding={16}>
            <TextContainer
              textAlign="center"
              justifyContent="center"
              align="center"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasic}
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={130}
                height={130}
              >
                211.603
              </Typography>
            </TextContainer>
            <DivisorContainer>
              <LeftTextFirstStanza>
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.Yellow}
                  fontSize={40}
                >
                  {t("retrospective.people")}
                </Typography>
              </LeftTextFirstStanza>
              <RightTextFirstStanza>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Gray}
                  fontSize={14}
                >
                  {t("retrospective.were_beneficied")}
                </Typography>
              </RightTextFirstStanza>
            </DivisorContainer>

            <SecondStanzaDivisor>
              <LeftTextSecondStanza>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Gray}
                  fontSize={15}
                >
                  {t("retrospective.employed_more")}
                </Typography>
              </LeftTextSecondStanza>
              <RightTextSecondStanza>
                <TwoHundredContainer>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Pink}
                    fontSize={140}
                    height={140}
                  >
                    250
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Pink}
                    fontSize={32}
                    height={35}
                  >
                    {t("retrospective.workers")}
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Pink}
                    fontSize={32}
                  >
                    {t("retrospective.family")}
                  </Typography>
                </TwoHundredContainer>
              </RightTextSecondStanza>
            </SecondStanzaDivisor>
            <ImageContainer>
              <img src={heart} width={100} height={100} />
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Gray}
                fontSize={16}
              >
                {t("retrospective.direct_indirect")}
              </Typography>
            </ImageContainer>
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
    </GlobalContainer>
  );
};
