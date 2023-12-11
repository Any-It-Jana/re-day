import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { dateKey } = useParams();
  return <div>{dateKey}</div>;
};

// 적당히 해당 일기의 텍스트 보여주고
// 감정 분석 결과 보여주고
// WordCloud 보여주면 될 거 같음
// Background-color를 감정에 맞는 색상으로

export default DetailPage;
