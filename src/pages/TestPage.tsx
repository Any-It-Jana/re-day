import React, { useEffect, useState } from "react";
import { getRecordDetail, getRecordList } from "../libs/apis/GetList";

const TestPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   setCount((prev) => prev + 1);
    // }, 1000);

    // return () => {
    //   clearInterval(timer);
    // };

    getRecordList("1");
    getRecordDetail("1", "2023-12-10T12:02").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <h1>{count}</h1>
    </div>
  );
};

export default TestPage;
