import React from "react";
import { useTranslation } from "react-i18next";
import {
  BackgroundContainer,
  LeftText,
  NewsContainer,
  RightText,
  TextDirection,
} from "./retrospectiveTwo.styles";
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
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { SquareColored } from "../../../../components/SquareColored";

export const RetrospectiveTwo: React.FC = () => {
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
              {t("retrospective.march_april")}
            </Typography>
          </TextContainer>
          {/* imagem */}
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
              {t("retrospective.joker_music")}
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
              {t("retrospective.doctors_band")}
            </Typography>
          </TextContainer>
          <SquareColored
            type="outlined"
            borderColor={DalegriaColorsEnum.LightBlue}
          >
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={4}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                {t("retrospective.season")}
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
                textColor={DalegriaColorsEnum.Gray}
                fontSize={12}
              >
                {t("retrospective.date_01")}
              </Typography>
            </TextContainer>

            <TextDirection>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginRight={4
                }
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.LightBlue}
                  height={24}
                  width={130}
                  fontSize={24}
                >
                  {t("retrospective.many_people")}
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
                  height={14}
                  fontSize={14}
                >
                  {t("retrospective.see_show")}
                </Typography>
              </TextContainer>
            </TextDirection>
          </SquareColored>
        </BackgroundContainer>

        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate("/restrospectiva-01")}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>
          <GlobalNextButton onClick={() => navigate("/restrospectiva-03")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </DalegriaContainer>
    </>
  );
};
