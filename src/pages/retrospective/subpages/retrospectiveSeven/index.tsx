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
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { BackgroundPinkContainer } from "../retrospectiveFive/retrospectiveFive.styles";

export const RetrospectiveSeven: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <RetrospectiveHeader />
      <DalegriaContainer choosePadding={16}>
        <TextContainer
          textAlign="center"
          justifyContent="center"
          align="center"
          marginBottom={12}
        >
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasicS}
            textColor={DalegriaColorsEnum.Pink}
            fontSize={30}
            textTransform="uppercase"
          >
            {t("retrospective.activity_year")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdBold}
            textColor={DalegriaColorsEnum.Black}
            fontSize={10}
            textTransform="uppercase"
          >
            {t("retrospective.activity_year_description")}
          </Typography>
        </TextContainer>

        <BackgroundPinkContainer style={{ marginTop: "16px" }}>
          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            marginBottom={12}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.Yellow}
              fontSize={24}
              textTransform="uppercase"
            >
              {t("retrospective.retrospective_seven.background_container.doctors_school.title")}
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
              textTransform="uppercase"
            >
              {t("retrospective.retrospective_seven.background_container.doctors_school.stanza_01")}
            </Typography>
            <Typography
              fontFamily={DalegriaFontesEnum.StdLight}
              textColor={DalegriaColorsEnum.White}
              fontSize={16}
              textTransform="uppercase"
            >
              {t("retrospective.retrospective_seven.background_container.doctors_school.stanza_02")}
            </Typography>
            <Typography
              fontFamily={DalegriaFontesEnum.StdLight}
              textColor={DalegriaColorsEnum.White}
              fontSize={16}
              textTransform="uppercase"
            >
              {t("retrospective.retrospective_seven.background_container.doctors_school.stanza_03")}
            </Typography>
            <Typography
              fontFamily={DalegriaFontesEnum.StdLight}
              textColor={DalegriaColorsEnum.White}
              fontSize={16}
              textTransform="uppercase"
            >
              {t("retrospective.retrospective_seven.background_container.doctors_school.stanza_04")}
            </Typography>
            <Typography
              fontFamily={DalegriaFontesEnum.StdLight}
              textColor={DalegriaColorsEnum.White}
              fontSize={16}
              textTransform="uppercase"
            >
              {t("retrospective.retrospective_seven.background_container.doctors_school.stanza_05")}
            </Typography>
          </TextContainer>
        </BackgroundPinkContainer>
        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate("/restrospectiva-04")}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>
          <GlobalNextButton onClick={() => navigate("/restrospectiva-08")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </DalegriaContainer>
    </>
  );
};
