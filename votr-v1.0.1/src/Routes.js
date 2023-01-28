import React from "react";
import ConfirmationPage from "pages/ConfirmationPage";
import VerifiedPage from "pages/VerifiedPage";
import VerificationPage from "pages/VerificationPage";
import AboutPage from "pages/AboutPage";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/verificationpage" element={<VerificationPage />} />
        <Route path="/verifiedpage" element={<VerifiedPage />} />
        <Route path="/confirmationpage" element={<ConfirmationPage />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
