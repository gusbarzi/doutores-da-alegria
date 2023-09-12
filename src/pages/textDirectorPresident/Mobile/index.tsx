import React from "react";
import { useTranslation } from "react-i18next";
import {
  DirectorDescriptionText,
  DirectorText,
  TextDirectorPresidentContainer,
} from "../textDirectorPresident.styles";
import { TextContainer, Typography } from "../../../styles/global.styles";
import { DalegriaFontesEnum } from "../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../utils/colors";
import { SquareColored } from "../../../components/SquareColored";
import textDirectorArt from "../../../../public/assets/PNGS/Outros/artboard-3.png";

export const TextDirectorPresidentMobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <a href="">
        <img src={textDirectorArt} width={390} />
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
      </TextDirectorPresidentContainer>
    </>
  );
};
