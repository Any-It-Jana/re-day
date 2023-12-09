import React, { useState } from "react";
import Text from "../components/atoms/Text";
import awsconfig from "../../awsconfig.js";
import { CognitoUser } from "amazon-cognito-identity-js";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const login = () => {
    navigate("/list");
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
    </article>
  );
};

export default LoginPage;
