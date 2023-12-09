import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
import RecordPage from "./pages/RecordPage";
import TestPage from "./pages/TestPage";
import LoadingPage from "./pages/LoadingPage";
import DetailPage from "./pages/DetailPage";
import Menu from "./components/organisms/Menu";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/loading/:dateKey" element={<LoadingPage />} />
          <Route path="/detail/:dateKey" element={<DetailPage />} />

          <Route path="/test" element={<TestPage />} />
        </Routes>
      </main>
      <Menu />
    </BrowserRouter>
  );
}

export default App;
