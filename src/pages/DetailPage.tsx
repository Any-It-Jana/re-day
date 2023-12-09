import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { dateKey } = useParams();
  return <div>{dateKey}</div>;
};

export default DetailPage;
