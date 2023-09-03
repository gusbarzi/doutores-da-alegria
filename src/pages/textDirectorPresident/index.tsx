import React from "react";
import { useTranslation } from "react-i18next";
import {
  BannerContainer,
  BannerContainerDesktop,
  BannerContentDesktop,
  BannerDetailsContainer,
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
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import { SquareColored } from "../../components/SquareColored";
import textDirectorArt from "../../../public/assets/PNGS/Outros/artboard-3.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";

export const TextDirectorPresident: React.FC = () => {
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
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasicS}
                    textColor={DalegriaColorsEnum.Yellow}
                    fontSize={60}
                  >
                    O compromisso com a{" "}
                    <span
                      style={{
                        fontFamily: DalegriaFontesEnum.ManualBasicS,
                        color: DalegriaColorsEnum.LightBlue,
                      }}
                    >
                      cultura
                    </span>{" "}
                    e a
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasicS}
                    textColor={DalegriaColorsEnum.Yellow}
                    fontSize={60}
                  >
                    defesa do seu financiamento:
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  align="flex-start"
                  justifyContent="flex-start"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Yellow}
                    fontSize={32}
                  >
                    como enfrentamos os desafios dos últimos anos
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
                    por Luis Vieira da Rocha,
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.White}
                    fontSize={20}
                  >
                    diretor-presidente
                  </Typography>
                </TextContainer>
              </BannerDetailsContainer>
            </BannerContentDesktop>
          </BannerContainerDesktop>
          <DirectorDescriptionText>
            <DirectorText>{t("director_text")}</DirectorText>
          </DirectorDescriptionText>
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
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/impacto-social")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/texto-diretoria")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
