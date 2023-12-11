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
