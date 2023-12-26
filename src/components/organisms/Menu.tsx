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
    const token = localStorage.getItem("Re-day-token");
    console.log(token);
    if (token === null) {
      alert("로그인이 필요합니다.");
      navigate("/");
    } else {
      if (location.pathname === "/") {
        navigate("/list");
      }
      instance.defaults.headers.common["Authorization"] = token;
      setUserToken(token || "");
      setIsLoggedIn(true);
    }
  }, []);

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

export default Menu;
