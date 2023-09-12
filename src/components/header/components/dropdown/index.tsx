import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import breakpoints from "../../../../utils/breakpoints";

const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  background-color: ${DalegriaColorsEnum.LightBlue};
  overflow-x: hidden;
  transition: 0.5s;
  width: ${(props) => (props.isOpen ? "100%" : "0")};
  z-index: 11;

  ${breakpoints.higherThan('desktop')} {
    width: ${(props) => (props.isOpen ? "450px" : "0")};
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: -10px;
  left: 20px;
  font-size: 60px;
  cursor: pointer;
  z-index: 10;
  color: ${DalegriaColorsEnum.Black};
`;

const Backdrop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: ${props => props.isOpen ? "block" : "none"};
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 16px;
  flex-direction: column;
  gap: 32px;
  padding-top: 60px;
  padding-left: 20px;
`;

const LinkMenu = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  font-family: ${DalegriaFontesEnum.StdLight};
  color: ${DalegriaColorsEnum.White};
  text-transform: uppercase;
  transition: 0.2;

  &:hover {
    font-size: 25px;
  }
`;
interface ISidebarMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const SidebarMenu: React.FC<ISidebarMenuProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <>
      <SidebarWrapper isOpen={isOpen}>
        <CloseButton onClick={toggleMenu}>&times;</CloseButton>
        <LinksWrapper>
          <LinkMenu to="/" onClick={toggleMenu}>
            Home
          </LinkMenu>
          <LinkMenu to="/abertura" onClick={toggleMenu}>
            Abertura
          </LinkMenu>
          <LinkMenu to="/proposito" onClick={toggleMenu}>
            Qual o nosso propósito?
          </LinkMenu>
          <LinkMenu to="/impacto-social" onClick={toggleMenu}>
            Impacto Social
          </LinkMenu>
          <LinkMenu to="/texto-diretor-presidente" onClick={toggleMenu}>
            Texto diretor-presidente
          </LinkMenu>
          <LinkMenu to="/texto-diretoria" onClick={toggleMenu}>
            Texto diretoria
          </LinkMenu>
          <LinkMenu to="/de-dentro-para-fora" onClick={toggleMenu}>
            de dentro pra fora
          </LinkMenu>
          <LinkMenu to="/raio-x-01" onClick={toggleMenu}>
            raio x
          </LinkMenu>
          <LinkMenu to="/restrospectiva-01" onClick={toggleMenu}>
            Retrospectiva
          </LinkMenu>
          <LinkMenu to="/doutores-da-alegria-na-midia" onClick={toggleMenu}>
            Doutores da alegria na mídia
          </LinkMenu>
          <LinkMenu to="/abrace-a-causa" onClick={toggleMenu}>
            Abrace a causa
          </LinkMenu>
          <LinkMenu to="/prestacao-de-contas-01" onClick={toggleMenu}>
            Prestação de contas
          </LinkMenu>
          <LinkMenu to="/equipe" onClick={toggleMenu}>
            Equipe
          </LinkMenu>
          <LinkMenu to="/parceiros" onClick={toggleMenu}>
            Parceiros
          </LinkMenu>
          <LinkMenu to="/expedientes" onClick={toggleMenu}>
            Expediente
          </LinkMenu>
          <LinkMenu to="/fim" onClick={toggleMenu}>
            Fim
          </LinkMenu>
        </LinksWrapper>
      </SidebarWrapper>
      <Backdrop isOpen={isOpen} onClick={toggleMenu} />
    </>
  );
};
