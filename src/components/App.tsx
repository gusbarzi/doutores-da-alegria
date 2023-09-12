import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AppRoutes } from "../routes/routes";
import { Header } from "./header";
import { Footer } from "./footer";
import { FooterContainer, GlobalContainer } from "../styles/global.styles";

const MainContent: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/fim" && (
        <Header />
      )}

      <AppRoutes />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <MainContent />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Router>
  );
};
