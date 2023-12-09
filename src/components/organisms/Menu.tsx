import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <Btn
        onClick={() => {
          navigate("/");
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
          navigate("/list");
        }}>
        리스트
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
