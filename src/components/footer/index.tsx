import React from "react";
import { StyledFooter } from "./footer.styles";
import facebook from "../../../public/assets/PNGS/Outros/facebook.png";
import instagram from "../../../public/assets/PNGS/Outros/instagram.png";

export const Footer: React.FC = () => {

  return (
    <StyledFooter>
      <a href="https://www.instagram.com/doutoresdaalegriaoficial/">
        <img src={facebook} width={50} height={50}/>
      </a>
      <a href="https://www.facebook.com/doutores/?locale=pt_BR">
        <img src={instagram} width={50} height={50}/>
      </a>
    </StyledFooter>
  );
};