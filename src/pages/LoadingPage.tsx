import React, { useEffect, useState } from "react";
import Text from "../components/atoms/Text";
import Spinner from "../components/atoms/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { getRecordDetail } from "../libs/apis/GetList";
import { userStore } from "../libs/store/UserStore";

const LoadingPage = () => {
  const { dateKey } = useParams();
  const { userToken } = userStore();
  const navigate = useNavigate();

  const [loadingText, setLoadingText] = useState("분석 중...");
  useEffect(() => {
    let t = 7;

    const timer = setInterval(() => {
      if (t === 7) {
        setLoadingText("분석 중.");
        t = 5;
      } else if (t === 5) {
        setLoadingText("분석 중..");
        t = 6;
      } else if (t === 6) {
        setLoadingText("분석 중...");
        t = 7;
      }
    }, 1000);

    const timer2 = setInterval(() => {
      getRecordDetail(userToken, dateKey || "").then((res) => {
        if (res.status === 200) {
          clearInterval(timer);
          clearInterval(timer2);
          navigate(`/detail/${dateKey}`);
        }
      });
    }, 15000);

    return () => {
      clearInterval(timer);
      clearInterval(timer2);
    };
  }, []);

  return (
    <article>
      <Spinner />
      <Text color="white">{loadingText}</Text>
    </article>
  );
};

export default LoadingPage;
