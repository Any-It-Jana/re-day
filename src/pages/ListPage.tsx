import React, { useEffect, useState } from "react";
import RecordListItem from "../components/molecules/RecordListItem";
import { getRecordList } from "../libs/apis/GetList";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const navigate = useNavigate();
  const [lst, setLst] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("Re-day-token");
    if (token === undefined) {
      navigate("/");
    }
    getRecordList(token || "").then((res) => {
      if (res.statusCode === 200) {
        setLst(res.body.list);
        // 이거 리턴이 정확하게 뭔 지 모르겠는데
        // 리턴에 맞게 res.body.이거 채우면 됨
      }
    });
  }, []);

  return (
    <article className="recordList whiteBackground">
      {lst.map((e, idx) => {
        return <RecordListItem key={`${idx}`} />;
      })}
    </article>
  );
};

export default ListPage;
