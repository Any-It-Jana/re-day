import React, { useEffect, useState } from "react";
import Text from "../components/atoms/Text";
import Spinner from "../components/atoms/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { getRecordDetail } from "../libs/apis/GetList";
import UserStore from "../libs/store/UserStore";

const LoadingPage = () => {
  const navigate = useNavigate();
  const { dateKey } = useParams();
  const { userId } = UserStore();

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
      getRecordDetail(userId, dateKey || "").then((res) => {
        if (res.statusCode === 200) {
          clearInterval(timer);
          navigate(`/detail/${dateKey}`);
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
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
