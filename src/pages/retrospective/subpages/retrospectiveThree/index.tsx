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
import { BackgroundContainer, LeftText, NewsContainer, RightText } from "../retrospectiveTwo/retrospectiveTwo.styles";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";

export const RetrospectiveThree: React.FC = () => {
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
              {t("retrospective.agoust")}
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
              fontSize={24}
            >
              {t("retrospective.joker_writer")}
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
              {t("retrospective.joker_writer_stanza.stanza_01")}
            </Typography>
            <Typography
              fontFamily={DalegriaFontesEnum.StdLight}
              textColor={DalegriaColorsEnum.Gray}
              fontSize={16}
            >
              {t("retrospective.joker_writer_stanza.stanza_02")}
            </Typography>
            <Typography
              fontFamily={DalegriaFontesEnum.StdLight}
              textColor={DalegriaColorsEnum.Gray}
              fontSize={16}
            >
              {t("retrospective.joker_writer_stanza.stanza_03")}
            </Typography>
            <Typography
              fontFamily={DalegriaFontesEnum.StdLight}
              textColor={DalegriaColorsEnum.Gray}
              fontSize={16}
            >
              {t("retrospective.joker_writer_stanza.stanza_04")}
            </Typography>
            <Typography
              fontFamily={DalegriaFontesEnum.StdLight}
              textColor={DalegriaColorsEnum.Gray}
              fontSize={16}
            >
              {t("retrospective.joker_writer_stanza.stanza_05")}
            </Typography>
          </TextContainer>
        </BackgroundContainer>

        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate("/restrospectiva-02")}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>
          <GlobalNextButton onClick={() => navigate("/restrospectiva-04")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </DalegriaContainer>
    </>
  );
};
