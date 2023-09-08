import React from "react";
import { useTranslation } from "react-i18next";
import {
  AccountabilityContainer,
  AccountabilityContainerDesktop,
  BackgroundBlue,
  BackgroundPink,
  BackgroundYellow,
  BarContainerHorizon,
  BarHorizon,
  BarImageHorizon,
  BarWrapperHorizon,
  GridContainer,
  NumberLabelHorizon,
  RectangleBlue,
  RectanglePink,
  SquareContainer,
} from "../../../accountability.styles";
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
import useMediaQuery from "../../../../../hooks/useMediaQuery";
import breakpoints from "../../../../../utils/breakpoints";
import {
  TextDivision,
  TextSideDivision,
} from "../../../../retrospective/subpages/retrospectiveFive/retrospectiveFive.styles";

import { PercentSquareDesktop } from "../../../../../components/PercentSquareDesktop";
import { backgroundPinkData, data, data_two } from "../../constants";

export const AccountabilityTree: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  return (
    <>
      {isDesktop ? (
        <AccountabilityContainerDesktop style={{ padding: "16px 60px" }}>
          <TextContainer
            textAlign="center"
            align="center"
            justifyContent="center"
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasicS}
              textColor={DalegriaColorsEnum.LightBlue}
              fontSize={100}
            >
              Prestação de contas
            </Typography>
          </TextContainer>
          <TextDivision style={{ display: "flex", width: "800px" }}>
            <TextSideDivision>
              <TextContainer
                textAlign="left"
                align="center"
                justifyContent="center"
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.Pink}
                  fontSize={16}
                >
                  Nossas contas são auditadas anualmente por auditorias
                  independentes. Em 2022, a Singolare Consultoria e Auditoria
                  realizou este trabalho.
                </Typography>
              </TextContainer>
            </TextSideDivision>
            <TextSideDivision>
              <TextContainer
                textAlign="left"
                align="center"
                justifyContent="center"
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  fontSize={12}
                >
                  * Em 2016, o evento Gala Doutores da Alegria mobilizou
                  empresas e pessoas, gerando recursos pela venda de convites,
                  cotas de patrocínio e leilão. Os recursos foram utilizados na
                  produção do próprio evento e seu superávit foi integralmente
                  aplicado nos projetos da associação.
                </Typography>
              </TextContainer>
            </TextSideDivision>
          </TextDivision>

          <TextDivision>
            <TextSideDivision style={{ width: "1300px" }}>
              <SquareContainer>
                <GridContainer>
                  <BackgroundYellow>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.ManualBasic}
                        textColor={DalegriaColorsEnum.LightBlue}
                        lineHeight={1}
                        fontSize={28}
                      >
                        {t("retrospective.accountability.title_03")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={16}
                      chooseWidth={100}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.LightBlue}
                        lineHeight={1.25}
                        fontSize={20}
                      >
                        {t("retrospective.accountability.subtitle_03")}
                      </Typography>
                    </TextContainer>
                  </BackgroundYellow>
                  <BackgroundBlue style={{ height: "700px" }}>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.ManualBasic}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={32}
                      >
                        {t("retrospective.accountability.title_04")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={48}
                      chooseWidth={100}
                    >
                      <PercentSquareDesktop
                        chooseWidth={54}
                        chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                        chooseTextColor={DalegriaColorsEnum.Black}
                        number={35}
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={20}
                      >
                        {t("retrospective.accountability.projects.item_01")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={48}
                      chooseWidth={100}
                    >
                      <PercentSquareDesktop
                        chooseWidth={48}
                        chooseBackgroundColor={DalegriaColorsEnum.Purple}
                        chooseTextColor={DalegriaColorsEnum.Black}
                        number={5.8}
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={20}
                      >
                        {t("retrospective.accountability.projects.item_02")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={48}
                      chooseWidth={100}
                    >
                      <PercentSquareDesktop
                        chooseWidth={44}
                        chooseBackgroundColor={DalegriaColorsEnum.Green}
                        chooseTextColor={DalegriaColorsEnum.Black}
                        number={3.6}
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={20}
                      >
                        {t("retrospective.accountability.projects.item_03")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={48}
                      chooseWidth={100}
                    >
                      <PercentSquareDesktop
                        chooseWidth={42}
                        chooseBackgroundColor={DalegriaColorsEnum.Pink}
                        chooseTextColor={DalegriaColorsEnum.White}
                        number={1.3}
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={20}
                      >
                        {t("retrospective.accountability.projects.item_04")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={48}
                      chooseWidth={100}
                    >
                      <PercentSquareDesktop
                        chooseWidth={42}
                        chooseBackgroundColor={DalegriaColorsEnum.DarkBlue}
                        chooseTextColor={DalegriaColorsEnum.White}
                        number={0.3}
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={20}
                      >
                        {t("retrospective.accountability.projects.item_05")}
                      </Typography>
                    </TextContainer>
                  </BackgroundBlue>
                </GridContainer>
                <BackgroundPink>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={24}
                    >
                      {t("retrospective.accountability.title_05")}
                    </Typography>
                  </TextContainer>
                  {backgroundPinkData.map((data) => (
                    <TextContainer
                      key={data.typoText}
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={27}
                      chooseWidth={data.width}
                    >
                      <PercentSquareDesktop
                        chooseWidth={data.psdWidthDesktop}
                        chooseBackgroundColor={data.backgroundColorSquare}
                        chooseTextColor={data.textColorSquare}
                        number={data.numberSquare}
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={18}
                      >
                        {data.typoText}
                      </Typography>
                    </TextContainer>
                  ))}
                </BackgroundPink>
              </SquareContainer>
            </TextSideDivision>
            <TextSideDivision
              style={{ display: "flex", flexDirection: "column", gap: "32px" }}
            >
              <TextDivision chooseGap={16}>
                <TextSideDivision style={{ width: "10px" }}>
                  <RectangleBlue />
                </TextSideDivision>
                <TextSideDivision>
                  <BarContainerHorizon style={{ gap: "32px" }}>
                    {data.map((bar, index) => (
                      <BarWrapperHorizon key={index}>
                        <BarHorizon style={{ width: bar.width }}>
                          <BarImageHorizon
                            src={bar.image}
                            alt={`Bar for ${bar.size}`}
                          />
                          <NumberLabelHorizon>
                            <PercentSquareDesktop
                              chooseWidth={bar.size}
                              chooseBackgroundColor={bar.backgroundColor}
                              chooseTextColor={bar.textColor}
                              number={bar.number}
                            />
                          </NumberLabelHorizon>
                        </BarHorizon>
                      </BarWrapperHorizon>
                    ))}
                  </BarContainerHorizon>
                </TextSideDivision>
              </TextDivision>

              <TextDivision chooseGap={16}>
                <TextSideDivision style={{ width: "10px" }}>
                  <RectanglePink />
                </TextSideDivision>
                <TextSideDivision>
                  <BarContainerHorizon style={{ gap: "12px" }}>
                    {data_two.map((bar, index) => (
                      <BarWrapperHorizon key={index}>
                        <BarHorizon style={{ width: bar.width }}>
                          <BarImageHorizon
                            src={bar.image}
                            alt={`Bar for ${bar.size}`}
                          />
                          <NumberLabelHorizon>
                            <PercentSquareDesktop
                              chooseWidth={bar.size}
                              chooseBackgroundColor={bar.backgroundColor}
                              chooseTextColor={bar.textColor}
                              number={bar.number}
                            />
                          </NumberLabelHorizon>
                        </BarHorizon>
                      </BarWrapperHorizon>
                    ))}
                  </BarContainerHorizon>
                </TextSideDivision>
              </TextDivision>
            </TextSideDivision>
          </TextDivision>
        </AccountabilityContainerDesktop>
      ) : (
        <>
          <AccountabilityHeader />
          <AccountabilityContainer>
            <SquareContainer>
              <GridContainer>
                <BackgroundYellow>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      lineHeight={1}
                      fontSize={28}
                    >
                      {t("retrospective.accountability.title_03")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                    chooseWidth={100}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.LightBlue}
                      lineHeight={1.25}
                      fontSize={16}
                    >
                      {t("retrospective.accountability.subtitle_03")}
                    </Typography>
                  </TextContainer>
                </BackgroundYellow>

                <BackgroundBlue>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={28}
                    >
                      {t("retrospective.accountability.title_04")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={48}
                    chooseWidth={100}
                  >
                    <PercentSquareDesktop
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                      chooseTextColor={DalegriaColorsEnum.Black}
                      number={35}
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.projects.item_01")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={48}
                    chooseWidth={100}
                  >
                    <PercentSquareDesktop
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.Purple}
                      chooseTextColor={DalegriaColorsEnum.Black}
                      number={5.8}
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.projects.item_02")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={48}
                    chooseWidth={100}
                  >
                    <PercentSquareDesktop
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.Green}
                      chooseTextColor={DalegriaColorsEnum.Black}
                      number={3.6}
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.projects.item_03")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={48}
                    chooseWidth={100}
                  >
                    <PercentSquareDesktop
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.Pink}
                      chooseTextColor={DalegriaColorsEnum.White}
                      number={1.3}
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.projects.item_04")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={48}
                    chooseWidth={100}
                  >
                    <PercentSquareDesktop
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.DarkBlue}
                      chooseTextColor={DalegriaColorsEnum.White}
                      number={0.3}
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.projects.item_05")}
                    </Typography>
                  </TextContainer>
                </BackgroundBlue>
              </GridContainer>

              <BackgroundPink>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.White}
                    lineHeight={1}
                    fontSize={24}
                  >
                    {t("retrospective.accountability.title_05")}
                  </Typography>
                </TextContainer>
                {backgroundPinkData.map((data) => (
                  <TextContainer
                    key={data.typoText}
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={27}
                    chooseWidth={data.width}
                  >
                    <PercentSquareDesktop
                      chooseWidth={data.psdWidth}
                      chooseBackgroundColor={data.backgroundColorSquare}
                      chooseTextColor={data.textColorSquare}
                      number={data.numberSquare}
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {data.typoText}
                    </Typography>
                  </TextContainer>
                ))}
              </BackgroundPink>
            </SquareContainer>

            <TextDivision chooseGap={16}>
              <TextSideDivision style={{ width: "10px" }}>
                <RectangleBlue />
              </TextSideDivision>
              <TextSideDivision>
                <BarContainerHorizon style={{ gap: "32px" }}>
                  {data.map((bar, index) => (
                    <BarWrapperHorizon key={index}>
                      <BarHorizon style={{ width: bar.width }}>
                        <BarImageHorizon
                          src={bar.image}
                          alt={`Bar for ${bar.size}`}
                        />
                        <NumberLabelHorizon>
                          <PercentSquareDesktop
                            chooseWidth={bar.size}
                            chooseBackgroundColor={bar.backgroundColor}
                            chooseTextColor={bar.textColor}
                            number={bar.number}
                          />
                        </NumberLabelHorizon>
                      </BarHorizon>
                    </BarWrapperHorizon>
                  ))}
                </BarContainerHorizon>
              </TextSideDivision>
            </TextDivision>

            <TextDivision chooseGap={16}>
              <TextSideDivision style={{ width: "10px" }}>
                <RectanglePink />
              </TextSideDivision>
              <TextSideDivision>
                <BarContainerHorizon style={{ gap: "12px" }}>
                  {data_two.map((bar, index) => (
                    <BarWrapperHorizon key={index}>
                      <BarHorizon style={{ width: bar.width }}>
                        <BarImageHorizon
                          src={bar.image}
                          alt={`Bar for ${bar.size}`}
                        />
                        <NumberLabelHorizon>
                          <PercentSquareDesktop
                            chooseWidth={bar.size}
                            chooseBackgroundColor={bar.backgroundColor}
                            chooseTextColor={bar.textColor}
                            number={bar.number}
                          />
                        </NumberLabelHorizon>
                      </BarHorizon>
                    </BarWrapperHorizon>
                  ))}
                </BarContainerHorizon>
              </TextSideDivision>
            </TextDivision>
          </AccountabilityContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/prestacao-de-contas-02")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate("/equipe")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
