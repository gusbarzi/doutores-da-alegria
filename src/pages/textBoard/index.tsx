import React from "react";
import { useTranslation } from "react-i18next";
import {
  BoardDescriptionText,
  BoardText,
  TextBoardContainer,
} from "./textBoard.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { ReactComponent as Artboard } from "../../../public/assets/Links/artboard-4.svg";
import { SquareColored } from "../../components/SquareColored";
import { DalegriaColorsEnum } from "../../utils/colors";
import { DalegriaFontesEnum } from "../../utils/fontes";

export const TextBoard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <a href="">
        <Artboard width={400} height={400} />
      </a>
      <TextBoardContainer>
        <BoardDescriptionText>
          <BoardText>{t("text_board_text")}</BoardText>
        </BoardDescriptionText>
        <TextContainer
          align="center"
          textAlign="center"
          justifyContent="flex-end"
          chooseWidth={390}
        >
          <SquareColored
            type="primary"
            backgroundColor={DalegriaColorsEnum.Pink}
            chooseWidth={330}
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
          <GlobalBackButton onClick={() => navigate(-1)}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>
          <GlobalNextButton onClick={() => navigate("/de-dentro-para-fora")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </TextBoardContainer>
    </>
  );
};
