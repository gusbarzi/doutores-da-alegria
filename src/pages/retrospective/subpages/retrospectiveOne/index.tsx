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
import { ReactComponent as Heart } from "../../../../../public/assets/coração.svg";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { ReactComponent as Artboard } from "../../../../../public/assets/Links/artboard-7.svg";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import {
  DivisorContainer,
  ImageContainer,
  LeftTextFirstStanza,
  LeftTextSecondStanza,
  RightTextFirstStanza,
  RightTextSecondStanza,
  SecondStanzaDivisor,
  TwoHundredContainer,
} from "./retrospectiveOne.styles";

export const RetrospectiveOne: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Artboard width={400} height={390} />
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
          <Heart width={100} height={100} />
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Gray}
            fontSize={16}
          >
            {t("retrospective.direct_indirect")}
          </Typography>
        </ImageContainer>

        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate("/restrospectiva-01")}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>
          <GlobalNextButton onClick={() => navigate("/restrospectiva-02")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </DalegriaContainer>
    </>
  );
};
