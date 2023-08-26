import React from "react";
import { useTranslation } from "react-i18next";
import {
  BannerContainer,
  DirectorDescriptionText,
  DirectorText,
  TextDirectorPresidentContainer,
} from "./textDirectorPresident.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { ReactComponent as Artboard } from "../../../public/assets/Links/artboard-1.svg";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import { SquareColored } from "../../components/SquareColored";

export const TextDirectorPresident: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <a href="">
        <Artboard width={390} height={400} />
      </a>

      <TextDirectorPresidentContainer>
        <DirectorDescriptionText>
          <DirectorText>{t("director_text")}</DirectorText>
        </DirectorDescriptionText>
        <TextContainer
          align="center"
          textAlign="center"
          justifyContent="flex-end"
          chooseWidth={390}
        >
          <SquareColored
            type="primary"
            backgroundColor={DalegriaColorsEnum.Pink}
            chooseWidth={350}
          >
            <TextContainer
              align="center"
              textAlign="center"
              justifyContent="flex-end"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.White}
                lineHeight={1}
                fontSize={20}
              >
                confira o link
              </Typography>
            </TextContainer>
          </SquareColored>
        </TextContainer>
        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate('/impacto-social')}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>
          <GlobalNextButton onClick={() => navigate("/texto-diretoria")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </TextDirectorPresidentContainer>
    </>
  );
};
