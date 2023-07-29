import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Purpose } from "../pages/purpose";
import { SocialImpact } from "../pages/socialImpact";
import { TextDirectorPresident } from "../pages/textDirectorPresident";
import { TextBoard } from "../pages/textBoard";
import { InsideOut } from "../pages/insideOut";
import { XRay } from "../pages/xRay";
import { Retrospective } from "../pages/retrospective";
import { DoctorsJoyMedia } from "../pages/doctorsJoyMedia";
import { EmbranceCause } from "../pages/embranceCause";
import { Accountability } from "../pages/accountability";
import { Team } from "../pages/team";
import { Partners } from "../pages/partners";
import { Files } from "../pages/files";
import { PathEnum } from "./pathsEnum";

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={PathEnum.HOME} element={<Home />} />
    <Route path={PathEnum.PURPOSE} element={<Purpose />} />
    <Route path={PathEnum.SOCIAL_IMPACT} element={<SocialImpact />} />
    <Route path={PathEnum.TEXT_DIRECTOR_PRESIDENT} element={<TextDirectorPresident />}/>
    <Route path={PathEnum.TEXT_BOARD} element={<TextBoard />} />
    <Route path={PathEnum.INSIDE_OUT} element={<InsideOut />} />
    <Route path={PathEnum.X_RAY} element={<XRay />} />
    <Route path={PathEnum.RETROSPECTIVE} element={<Retrospective />} />
    <Route path={PathEnum.DOCTORS_JOY_MEDIA} element={<DoctorsJoyMedia />} />
    <Route path={PathEnum.EMBRANCE_CAUSE} element={<EmbranceCause />} />
    <Route path={PathEnum.ACCOUNTABILITY} element={<Accountability />} />
    <Route path={PathEnum.TEAM} element={<Team />} />
    <Route path={PathEnum.PARTNERS} element={<Partners />} />
    <Route path={PathEnum.FILES} element={<Files />} />
  </Routes>
);
