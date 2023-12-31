import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../../libs/apis/Instance";
import { userStore } from "../../libs/store/UserStore";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoggedIn, setUserToken } = userStore();

  useEffect(() => {
    // if (location.pathname === "/test") {
    //   return;
    // }
    const token = localStorage.getItem("Re-day-token");
    // console.log(token);
    if (token === null) {
      if (location.pathname === "/" || location.pathname === "/register") {
        return;
      }
      alert("로그인이 필요합니다.");
      navigate("/");
    } else {
      instance.defaults.headers.common["Authorization"] = token;
      setUserToken(token || "");
      setIsLoggedIn(true);
    }
  }, []);

  if (location.pathname === "/" || location.pathname === "/register") {
    return <Blank />;
  }

  return (
    <nav>
      <Btn
        onClick={() => {
          navigate("/list");
        }}>
        홈
      </Btn>
      <Btn
        onClick={() => {
          navigate("/record");
        }}>
        녹음하기
      </Btn>
      <Btn
        onClick={() => {
          navigate("/word");
        }}>
        통계보기
      </Btn>
    </nav>
  );
};

const Btn = styled.button`
  width: 33%;
  height: 50px;
  background-color: white;
`;
const Blank = styled.nav`
  background-color: #10346c;
`;

export default Menu;
