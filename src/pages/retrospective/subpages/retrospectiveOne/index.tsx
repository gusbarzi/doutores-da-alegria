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
} from "../../../../styles/global.styles";
import heart from "../../../../../public/assets/PNGS/Outros/coração.png";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import {
  DivisorContainer,
  ImageContainer,
  ImageContainerDesktop,
  LeftSide,
  LeftTextFirstStanza,
  LeftTextSecondStanza,
  RetrospectiveHiperContainer,
  RetrospectiveOneBannerContainerDesktop,
  RetrospectiveOneBannerContentDesktop,
  RetrospectiveOneBannerDetailsContainer,
  RightSide,
  RightTextFirstStanza,
  RightTextSecondStanza,
  SecondStanzaDivisor,
  TwoHundredContainer,
} from "./retrospectiveOne.styles";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";

export const RetrospectiveOne: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const pushBack = isDesktop ? "/raio-x-01" : "/raio-x-02";

  return (
    <>
      {isDesktop ? (
        <>
          <RetrospectiveOneBannerContainerDesktop>
            <RetrospectiveOneBannerContentDesktop>
              <RetrospectiveOneBannerDetailsContainer>
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
                      width: "400px",
                      textAlign: "right",
                      marginTop: "12px",
                    }}
                  >
                    VIVEMOS MOMENTOS DESAFIADORES NOS ÚLTIMOS ANOS, MAS SEGUIMOS
                    ADIANTE.O RESULTADO? A MANUTENÇÃO DE TODOS OS NOSSOS
                    PROJETOS E A CRIAÇÃO DE NOVAS AÇÕES
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
            <ImageContainerDesktop>
              <img src={heart} width={150} height={150} />
            </ImageContainerDesktop>
          </RetrospectiveHiperContainer>
        </>
      ) : (
        <>
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
        <GlobalBackButton onClick={() => navigate(pushBack)}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/restrospectiva-02")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
