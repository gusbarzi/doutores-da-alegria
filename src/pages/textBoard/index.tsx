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
import { SquareColored } from "../../components/SquareColored";
import { DalegriaColorsEnum } from "../../utils/colors";
import { DalegriaFontesEnum } from "../../utils/fontes";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";
import { BannerContainerDesktop, BannerContentDesktop, BannerDetailsContainer, DirectorDescriptionText, DirectorText } from "../textDirectorPresident/textDirectorPresident.styles";

export const TextBoard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  return (
    <>
      {isDesktop ? (
        <>
          <BannerContainerDesktop>
            <BannerContentDesktop>
              <BannerDetailsContainer>
                <TextContainer
                  textAlign="left"
                  align="flex-start"
                  justifyContent="flex-start"
                  marginBottom={40}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasicS}
                    textColor={DalegriaColorsEnum.Yellow}
                    fontSize={48}
                  >
                    Os desafios na defesa da cultura e na
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasicS}
                    textColor={DalegriaColorsEnum.Yellow}
                    fontSize={48}
                  >
                    <span
                      style={{
                        fontFamily: DalegriaFontesEnum.ManualBasicS,
                        color: DalegriaColorsEnum.LightBlue,
                      }}
                    >
                      gestão
                    </span>{" "} de uma organização da sociedade civil
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  align="flex-start"
                  justifyContent="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.White}
                    fontSize={24}
                  >
                    por Daiane Carina, Luis Vieira da Rocha,
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.White}
                    fontSize={24}
                  >
                    Ronaldo Aguiar e Simone Ribeiro
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.White}
                    fontSize={20}
                  >
                    diretoria
                  </Typography>
                </TextContainer>
              </BannerDetailsContainer>
            </BannerContentDesktop>
          </BannerContainerDesktop>
          <BoardDescriptionText>
            <BoardText>{t("text_board_text")}</BoardText>
          </BoardDescriptionText>
          <TextContainer
            align="flex-start"
            textAlign="center"
            justifyContent="flex-start"
            marginLeft={100}
          >
            <SquareColored
              type="primary"
              backgroundColor={DalegriaColorsEnum.Pink}
              chooseWidth={400}
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
        </>
      ) : (
        <>
          <a href=""></a>
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
          </TextBoardContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/texto-diretor-presidente")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/de-dentro-para-fora")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
