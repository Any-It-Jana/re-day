import React, { useEffect, useState } from "react";
import RecordListItem from "../components/molecules/RecordListItem";
import { getRecordList } from "../libs/apis/GetList";
import Spinner from "../components/atoms/Spinner";
import Text from "../components/atoms/Text";
import { userStore } from "../libs/store/UserStore";
import styled from "styled-components";

const ListPage = () => {
  const [lst, setLst] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { userToken } = userStore();

  useEffect(() => {
    getRecordList(userToken).then((res) => {
      console.log("get list: ", res);
      setLst(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <article className="recordList whiteBackground">
      <Head>
        <Text>나의 일기</Text>
      </Head>
      {isLoading && !lst ? (
        <article>
          <Spinner color="dark" />
        </article>
      ) : lst.length === 0 ? (
        <Text>아직 작성된 일기가 없습니다.</Text>
      ) : (
        lst.map((item, idx) => {
          return (
            <RecordListItem
              key={`${idx}`}
              date={item["dateTime"]}
              color={item["colorCode"]}
            />
          );
        })
      )}
    </article>
  );
};

const Head = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #777;
`;

export default ListPage;
