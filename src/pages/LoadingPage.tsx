import React, { useEffect, useState } from "react";
import Text from "../components/atoms/Text";
import Spinner from "../components/atoms/Spinner";
import { useParams } from "react-router-dom";

const LoadingPage = () => {
  const { dateKey } = useParams();

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
