import React, { useState, useEffect } from "react";
import Text from "../components/atoms/Text";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import { useNavigate } from "react-router-dom";
import { signin } from "../libs/apis/Auth";
import { userStore } from "../libs/store/UserStore";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const { isLoggedIn, setIsLoggedIn, setUserEmail, setUserToken } = userStore();

  // 회원이면 로그인 페이지 접속 못하게 하기 -> 로그아웃 기능 없는 상태
  useEffect(() => {
    const token = localStorage.getItem("Re-day-token");
    if (token !== null) {
      setIsLoggedIn(true);
      setUserEmail(email);
      setUserToken(token);
      navigate("/list");
    }
  }, []);

  const login = async () => {
    const response = await signin(email, pw);
    if (response.statusCode !== 200) {
      alert(response.message);
      setEmail("");
      setPw("");
    } else {
      const token = localStorage.getItem("Re-day-token");
      setUserToken(token || "");
      setIsLoggedIn(true);
      setUserEmail(email);
      navigate("/list");
    }
  };
  const logout = () => {
    localStorage.removeItem("Re-day-token");
    setIsLoggedIn(false);
    setUserEmail("");
    setUserToken("");
    localStorage.removeItem("UserInfo");
  };
  const register = () => {
    navigate("/register");
  };

  return (
    <article className="login">
      <div>
        <img src="/book.svg" height={150} width={200} />
        <Text color="white" fontSize={1.5}>
          Re-Day
        </Text>
      </div>
      {!isLoggedIn ? (
        <section>
          <Input
            width="100%"
            height="50px"
            value={email}
            placeholder="Email"
            name="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            width="100%"
            height="50px"
            value={pw}
            placeholder="PW"
            name="pw"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPw(e.target.value);
            }}
          />
          <Button
            type="bg"
            onClick={login}
            color="white"
            width="100%"
            height="50px">
            로그인
          </Button>
          <Button onClick={register} width="100%">
            회원가입
          </Button>
        </section>
      ) : (
        <section>
          <Button
            type="bg"
            onClick={logout}
            color="white"
            width="100%"
            height="50px">
            로그아웃
          </Button>
        </section>
      )}
    </article>
  );
};

export default LoginPage;
