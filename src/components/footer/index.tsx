import React from "react";
import { StyledFooter } from "./footer.styles";
import { ReactComponent as Instagram } from "../../../public/assets/instagram.svg";
import { ReactComponent as Facebook } from "../../../public/assets/facebook.svg";

export const Footer: React.FC = () => {

  return (
    <StyledFooter>
      <a href="https://www.instagram.com/doutoresdaalegriaoficial/">
        <Instagram width={50} height={50} />
      </a>
      <a href="https://www.facebook.com/doutores/?locale=pt_BR">
        <Facebook width={50} height={50} />
      </a>
    </StyledFooter>
  );
};