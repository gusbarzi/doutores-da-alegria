import React from "react";
import { EndingContainer } from "./ending.styles";
import { ReactComponent as TwentyVazado } from "../../../public/assets/22-vazado.svg";
import { ButtonContainer, ButtonContainerTwo, GlobalNextButton, TextContainer, Typography } from "../../styles/global.styles";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import { useTranslation } from "react-i18next";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { useNavigate } from "react-router-dom";

export const Ending: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <EndingContainer>
        <TwentyVazado width={300} height={300}/>
        <TextContainer
          textAlign="center"
          justifyContent="center"
          align="center"
        >
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasicS}
            textColor={DalegriaColorsEnum.LightBlue}
            lineHeight={1}
            fontSize={28}
          >
            {t("retrospective.ending.title")}
          </Typography>
        </TextContainer>
      </EndingContainer>
      <ButtonContainerTwo>
        <GlobalNextButton onClick={() => navigate("/")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainerTwo>
    </>
  );
};