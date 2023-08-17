import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Purpose } from "../pages/purpose";
import { SocialImpact } from "../pages/socialImpact";
import { TextDirectorPresident } from "../pages/textDirectorPresident";
import { TextBoard } from "../pages/textBoard";
import { InsideOut } from "../pages/insideOut";
import { XRay } from "../pages/xRay";
import { DoctorsJoyMedia } from "../pages/doctorsJoyMedia";
import { EmbranceCause } from "../pages/embranceCause";
import { Accountability } from "../pages/accountability";
import { Team } from "../pages/team";
import { Partners } from "../pages/partners";
import { Files } from "../pages/files";
import { PathEnum } from "./pathsEnum";
import { RetrospectiveOne } from "../pages/retrospective/subpages/retrospectiveOne";
import { RetrospectiveTwo } from "../pages/retrospective/subpages/retrospectiveTwo";
import { RetrospectiveThree } from "../pages/retrospective/subpages/retrospectiveThree";
import { RetrospectiveFour } from "../pages/retrospective/subpages/retrospectiveFour";
import { RetrospectiveFive } from "../pages/retrospective/subpages/retrospectiveFive";
import { RetrospectiveSix } from "../pages/retrospective/subpages/retrospectiveSix";
import { RetrospectiveSeven } from "../pages/retrospective/subpages/retrospectiveSeven";
import { RetrospectiveEight } from "../pages/retrospective/subpages/retrospectiveEight";
import { RetrospectiveNine } from "../pages/retrospective/subpages/retrospectiveNine";
import { RetrospectiveTen } from "../pages/retrospective/subpages/retrospectiveTen";
import { RetrospectiveEleven } from "../pages/retrospective/subpages/retrospectiveEleven";
import { RetrospectiveTwelve } from "../pages/retrospective/subpages/retrospectiveTwelve";
import { RetrospectiveThirteen } from "../pages/retrospective/subpages/retrospectiveThirteen";
import { RetrospectiveFourteen } from "../pages/retrospective/subpages/retrospectiveFourteen";
import { RetrospectiveFiveteen } from "../pages/retrospective/subpages/retrospectiveFiveteen";
import { RetrospectiveSixteen } from "../pages/retrospective/subpages/retrospectiveSixteen";
import { RetrospectiveSeventeen } from "../pages/retrospective/subpages/retrospectiveSeventeen";
import { RetrospectiveEighteen } from "../pages/retrospective/subpages/retrospectiveEighteen";
import { RetrospectiveNineteen } from "../pages/retrospective/subpages/retrospectiveNineteen";
import { RetrospectiveTwenty } from "../pages/retrospective/subpages/retrospectiveTwenty";

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={PathEnum.HOME} element={<Home />} />
    <Route path={PathEnum.PURPOSE} element={<Purpose />} />
    <Route path={PathEnum.SOCIAL_IMPACT} element={<SocialImpact />} />
    <Route path={PathEnum.TEXT_DIRECTOR_PRESIDENT} element={<TextDirectorPresident />}/>
    <Route path={PathEnum.TEXT_BOARD} element={<TextBoard />} />
    <Route path={PathEnum.INSIDE_OUT} element={<InsideOut />} />
    <Route path={PathEnum.X_RAY_ONE} element={<XRay />} />
    <Route path={PathEnum.RETROSPECTIVE_ONE} element={<RetrospectiveOne />} />
    <Route path={PathEnum.RETROSPECTIVE_TWO} element={<RetrospectiveTwo />} />
    <Route path={PathEnum.RETROSPECTIVE_THREE} element={<RetrospectiveThree />} />
    <Route path={PathEnum.RETROSPECTIVE_FOUR} element={<RetrospectiveFour />} />
    <Route path={PathEnum.RETROSPECTIVE_FIVE} element={<RetrospectiveFive />} />
    <Route path={PathEnum.RETROSPECTIVE_SIX} element={<RetrospectiveSix />} />
    <Route path={PathEnum.RETROSPECTIVE_SEVEN} element={<RetrospectiveSeven />} />
    <Route path={PathEnum.RETROSPECTIVE_EIGHT} element={<RetrospectiveEight />} />
    <Route path={PathEnum.RETROSPECTIVE_NINE} element={<RetrospectiveNine />} />
    <Route path={PathEnum.RETROSPECTIVE_TEN} element={<RetrospectiveTen />} />
    <Route path={PathEnum.RETROSPECTIVE_ELEVEN} element={<RetrospectiveEleven />} />
    <Route path={PathEnum.RETROSPECTIVE_TWELVE} element={<RetrospectiveTwelve />} />
    <Route path={PathEnum.RETROSPECTIVE_THIRTEEN} element={<RetrospectiveThirteen />} />
    <Route path={PathEnum.RETROSPECTIVE_FOURTEEN} element={<RetrospectiveFourteen />} />
    <Route path={PathEnum.RETROSPECTIVE_FIVETEEN} element={<RetrospectiveFiveteen />} />
    <Route path={PathEnum.RETROSPECTIVE_SIXTEEN} element={<RetrospectiveSixteen />} />
    <Route path={PathEnum.RETROSPECTIVE_SEVENTEEN} element={<RetrospectiveSeventeen />} />
    <Route path={PathEnum.RETROSPECTIVE_EIGHTEEN} element={<RetrospectiveEighteen />} />
    <Route path={PathEnum.RETROSPECTIVE_NINETEEN} element={<RetrospectiveNineteen />} />
    <Route path={PathEnum.RETROSPECTIVE_TWENTY} element={<RetrospectiveTwenty />} />
    <Route path={PathEnum.DOCTORS_JOY_MEDIA} element={<DoctorsJoyMedia />} />
    <Route path={PathEnum.EMBRANCE_CAUSE} element={<EmbranceCause />} />
    <Route path={PathEnum.ACCOUNTABILITY} element={<Accountability />} />
    <Route path={PathEnum.TEAM} element={<Team />} />
    <Route path={PathEnum.PARTNERS} element={<Partners />} />
    <Route path={PathEnum.FILES} element={<Files />} />
  </Routes>
);
