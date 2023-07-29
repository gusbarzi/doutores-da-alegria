import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "../routes/routes";
import { Header } from "./header";

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};
