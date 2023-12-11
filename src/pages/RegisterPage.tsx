import React, { useState } from "react";
import Text from "../components/atoms/Text";
import awsconfig from "../../awsconfig.js";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import { emailConfirm, signup } from "../libs/apis/Auth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [hasAuthCode, setHasAuthCode] = useState(false);
  const [authcode, setAuthcode] = useState("");

  const register = async () => {
    const response = await signup(email, pw);
    if (response.statusCode !== 200) {
      alert(response.message);
      setEmail("");
      setPw("");
      setPwConfirm("");
    } else {
      setHasAuthCode(true);
    }
  };
  const sendAuthCode = async () => {
    const response = await emailConfirm(email, authcode);
    if (response.statusCode !== 200) {
      alert(response.message);
      setAuthcode("");
    } else {
      alert("회원가입 완료!\n로그인 해주세요");
      navigate("/");
    }
  };

  return (
    <article className="login">
      <div>
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
        {hasAuthCode ? (
          <Input
            width="100%"
            height="50px"
            value={authcode}
            placeholder="인증번호"
            name="authcode"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAuthcode(e.target.value);
            }}
          />
        ) : (
          <Input
            width="100%"
            height="50px"
            value={pwConfirm}
            placeholder="PW 확인"
            name="pwConfirm"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPwConfirm(e.target.value);
            }}
          />
        )}
        <Button
          type="bg"
          onClick={hasAuthCode ? sendAuthCode : register}
          color="white"
          width="100%"
          height="50px">
          {hasAuthCode ? "인증하기" : "회원가입"}
        </Button>
      </section>
    </article>
  );
};

export default RegisterPage;
