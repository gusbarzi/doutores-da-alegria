import React from "react";
import { useTranslation } from "react-i18next";
import {
  DescriptionContainer,
  StanzaText,
  SocialImpactContainer,
  SubTitle,
  ItemsListContainer,
} from "./socialImpact.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { CustomList } from "../../components/CustomList";

export const SocialImpact: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <SocialImpactContainer>
      <h1>Impacto social</h1>
      <DescriptionContainer>
        <StanzaText>{t("social_impact_text_01.first_stanza")}</StanzaText>
        <StanzaText>{t("social_impact_text_01.second_stanza")}</StanzaText>
      </DescriptionContainer>
      <DescriptionContainer>
        <SubTitle>Qual o impacto do nosso</SubTitle>
        <SubTitle>trabalho nos hospitais?</SubTitle>
      </DescriptionContainer>
      <DescriptionContainer>
        <StanzaText>{t("social_impact_text_02")}</StanzaText>
      </DescriptionContainer>
      <DescriptionContainer>
        <StanzaText>{t("social_impact_text_03")}</StanzaText>
      </DescriptionContainer>
      <ItemsListContainer>
        {/* <CustomListItem
          width={32}
          height={20}
          text={t("social_impacts_values.item1")}
        />
        <CustomListItem
          width={32}
          height={20}
          text={t("social_impacts_values.item2")}
        />
        <CustomListItem
          width={32}
          height={20}
          text={t("social_impacts_values.item3")}
        />
        <CustomListItem
          width={32}
          height={20}
          text={t("social_impacts_values.item4")}
        />
        <CustomListItem
          width={32}
          height={20}
          text={t("social_impacts_values.item5")}
        /> */}
      </ItemsListContainer>
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate(-1)}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/texto-diretor-presidente")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </SocialImpactContainer>
  );
};
