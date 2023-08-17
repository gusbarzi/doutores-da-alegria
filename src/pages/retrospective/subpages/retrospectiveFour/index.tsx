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
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import {
  BackgroundContainer,
  LeftText,
  NewsContainer,
  RightText,
  TextDirection,
} from "../retrospectiveTwo/retrospectiveTwo.styles";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { SquareColored } from "../../../../components/SquareColored";

export const RetrospectiveFour: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <RetrospectiveHeader />
      <DalegriaContainer choosePadding={16}>
        <NewsContainer>
          <LeftText>
            <Typography
              fontFamily={DalegriaFontesEnum.SimplesInlineS}
              textColor={DalegriaColorsEnum.Yellow}
              fontSize={44}
            >
              {t("retrospective.news")}
            </Typography>
          </LeftText>
          <RightText>
            <Typography
              fontFamily={DalegriaFontesEnum.StdBold}
              textColor={DalegriaColorsEnum.Gray}
              fontSize={14}
            >
              {t("retrospective.get_knew")}
            </Typography>
          </RightText>
        </NewsContainer>

        <BackgroundContainer>
          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            marginBottom={12}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.StdBold}
              textColor={DalegriaColorsEnum.LightBlue}
              fontSize={14}
              textTransform="uppercase"
            >
              {t("retrospective.november")}
            </Typography>
          </TextContainer>

          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            marginBottom={12}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.LightBlue}
              fontSize={22}
            >
              {t("retrospective.hospital_for_theater")}
            </Typography>
          </TextContainer>
          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            marginBottom={16}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.StdLight}
              textColor={DalegriaColorsEnum.Gray}
              fontSize={16}
            >
              {t("retrospective.two_shows")}
            </Typography>
          </TextContainer>
          <SquareColored
            type="outlined"
            borderColor={DalegriaColorsEnum.LightBlue}
          >
            <TextDirection>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.LightBlue}
                  height={24}
                  width={100}
                  fontSize={20}
                >
                  {t("retrospective.one_hundred")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-end"
                align="flex-end"
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.LightBlue}
                  height={16}
                  fontSize={14}
                >
                  {t("retrospective.watch_place")}
                </Typography>
              </TextContainer>
            </TextDirection>
          </SquareColored>
        </BackgroundContainer>

        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate("/restrospectiva-03")}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>
          <GlobalNextButton onClick={() => navigate("/restrospectiva-05")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </DalegriaContainer>
    </>
  );
};
