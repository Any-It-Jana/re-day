import React from "react";
import RecordListItem from "../components/molecules/RecordListItem";

const ListPage = () => {
  const lst = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <article className="recordList whiteBackground">
      {lst.map((e, idx) => {
        return <RecordListItem key={`${idx}`} />;
      })}
    </article>
  );
};

export default ListPage;
