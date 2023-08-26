import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "../routes/routes";
import { Header } from "./header";
import { Footer } from "./footer";
import { FooterContainer } from "../styles/global.styles";

export const App: React.FC = () => {

  return (
    <Router>
      <Header />
      <AppRoutes />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Router>
  );
};