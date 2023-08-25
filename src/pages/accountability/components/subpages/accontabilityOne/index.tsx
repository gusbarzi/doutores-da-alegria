import React from "react";
import { useTranslation } from "react-i18next";
import { AccountabilityContainer, BackgroundPink } from "../../../accountability.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../../../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../../../../public/assets/setinha-direita.svg";
import { AccountabilityHeader } from "../../AccountabilityHeader";
import { DalegriaFontesEnum } from "../../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../../utils/colors";

export const AccountabilityOne: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <AccountabilityHeader />
      <AccountabilityContainer>
        <BackgroundPink>
          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            marginBottom={16}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.Yellow}
              lineHeight={1}
              fontSize={28}
            >
              {t("retrospective.accountability.title_02")}
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
              textColor={DalegriaColorsEnum.Yellow}
              lineHeight={1}
              fontSize={14}
            >
              {t("retrospective.accountability.period")}
            </Typography>
          </TextContainer>
        </BackgroundPink>
        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate("/abrace-a-causa")}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>

          <GlobalNextButton onClick={() => navigate("/prestacao-de-contas-02")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </AccountabilityContainer>
    </>
  );
};
