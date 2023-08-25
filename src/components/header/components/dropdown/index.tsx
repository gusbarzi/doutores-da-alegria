// components/NavigationDropdown.tsx
import React, { SVGProps, useState } from "react";
import styled from "styled-components";
import { PathEnum } from "../../../../routes/pathsEnum"; // ajuste o caminho conforme a localização do arquivo routes.ts
import { useNavigate } from "react-router-dom";
import { ReactComponent as MenuHamburguer } from "../../../../../public/assets/menu.svg";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: none;
  border: none;
  outline: none;
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  // Estilize seu conteúdo de dropdown aqui
  width: 300px;
  height: 300px;
  background-color: lightcyan;
`;

const DropdownItem = styled.div`
  cursor: pointer;
`;

interface INavigation {
  hamburgerWidth: number;
  hamburgerheight: number;
}

export const NavigationDropdown: React.FC<INavigation> = ({
  hamburgerWidth,
  hamburgerheight
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <MenuHamburguer
          width={hamburgerWidth}
          height={hamburgerheight}
        />
      </DropdownButton>

      <DropdownContent isOpen={isOpen}>
        {Object.entries(PathEnum).map(([key, value]) => (
          <DropdownItem key={key} onClick={() => navigate(value as string)}>
            {key}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};
