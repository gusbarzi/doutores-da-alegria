import React from "react";
import { useTranslation } from "react-i18next";
import {
  BannerContainer,
  DescriptionContainer,
  DescriptionItemText,
  DescriptionTitle,
  JokersImageContainer,
  PurposeContainer,
  PurposeLightBlueTitle,
  PurposePinkTitle,
  PurposePurpleTitle,
  ValuesContainer,
} from "./purpose.styles";
import { useNavigate } from "react-router-dom";
import { Notion } from "../../utils/notion";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import jokerImage from "../../../public/assets/Links/mobile-recortes2.png";
import { CustomListItem } from "../../components/CustomListItem";

export const Purpose: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <PurposeContainer>
      <BannerContainer>
        <PurposeLightBlueTitle>Qual</PurposeLightBlueTitle>
        <PurposeLightBlueTitle>o nosso</PurposeLightBlueTitle>
        <PurposePinkTitle>propósito</PurposePinkTitle>
        <PurposePurpleTitle>?</PurposePurpleTitle>
      </BannerContainer>
      <JokersImageContainer>
        <img src={jokerImage} width={350} height={800} />
      </JokersImageContainer>
      <DescriptionContainer>
        <DescriptionTitle>Tarefa Institucional</DescriptionTitle>
        <CustomListItem width={100} height={24} text={t("purpose_text_01")} />
        <CustomListItem width={100} height={24} text={t("purpose_text_02")} />
      </DescriptionContainer>
      <ValuesContainer>
        <DescriptionTitle>Valores</DescriptionTitle>
        <CustomListItem width={12} height={20} text={t("purpose_values.art_culture")} />
        <CustomListItem width={20} height={20} text={t("purpose_values.liberty_expression")} />
        <CustomListItem width={12} height={20} text={t("purpose_values.transparent")} />
        <CustomListItem width={32} height={20} text={t("purpose_values.art_education")} />
        <CustomListItem width={12} height={20} text={t("purpose_values.search-simplicity")} />
        <CustomListItem width={24} height={20} text={t("purpose_values.happy_state")} />
        <CustomListItem width={28} height={20} text={t("purpose_values.search_multscadule")} />
      </ValuesContainer>
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate(-1)}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate("/impacto-social")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
      {/* <Notion /> */}
    </PurposeContainer>
  );
};
