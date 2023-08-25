import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "../routes/routes";
import { Header } from "./header";
import { PathEnum } from "../routes/pathsEnum";
import { Footer } from "./footer";
import { FooterContainer } from "../styles/global.styles";

export const App: React.FC = () => {
  const pathHome = PathEnum.HOME;

  return (
    <Router>
      {pathHome ? "" : <Header />}
      <AppRoutes />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Router>
  );
};