import React from "react";
import { EndingContainer, Twenty } from "./ending.styles";
import { ButtonContainerTwo, GlobalNextButton, TextContainer, Typography } from "../../styles/global.styles";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import { useTranslation } from "react-i18next";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { useNavigate } from "react-router-dom";
import twentyVazado from '../../../public/assets/PNGS/Outros/22-vazado.png'

export const Ending: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <EndingContainer>
        <Twenty src={twentyVazado} />
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