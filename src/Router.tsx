import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
import RecordPage from "./pages/RecordPage";
import TestPage from "./pages/TestPage";
import LoadingPage from "./pages/LoadingPage";
import DetailPage from "./pages/DetailPage";
import RegisterPage from "./pages/RegisterPage";
import WordCloudPage from "./pages/WordCloudPage";

const Router = () => {
  const location = useLocation();

  return (
    <main>
      <TransitionGroup className="transitions-wrapper">
        <CSSTransition
          key={location.pathname}
          classNames={"reday"}
          timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/record" element={<RecordPage />} />
            <Route path="/loading/:dateKey" element={<LoadingPage />} />
            <Route path="/detail/:dateKey" element={<DetailPage />} />
            <Route path="/word" element={<WordCloudPage />} />

            <Route path="/test" element={<TestPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
};

export default Router;
