import instance from "./Instance";
import { useNavigate } from "react-router-dom";
// userId가 아니라 token이 들어가는 거임 (token type을 몰라서 냅둠..)
export async function getRecordList(userId: string) {
  return (
    instance
      // .post("/diary/list", { userId: userId })
      // .then((response) => {
      //   // console.log(response);
      //   return response.data;
      // })
      // .catch((error) => console.error(error));
      .get(
        "/diary/list"
        // , {
        //   'headers': {
        //     Authorization: `Bearer ${localStorage.getItem('Re-day-token')}`,
        //     "Content-Type": "application/json"
        //   }
        // }
      )
      .then((response) => {
        // 응답에 statusCode 부분이 없음 ?
        // lambda에서 주는 return 값과 다른 응답이 옴
        console.log(response);
        if (response.status === 200) {
          return response.data;
        } else {
          alert("목록을 조회할 수 없습니다.");
          const navigate = useNavigate();
          navigate("/");
        }
      })
      .catch((error) => console.error())
  );
}

export async function getRecordDetail(userId: string, dateKey: string) {
  // console.log("User ID: ", userId, "DATE: ", dateKey);
  return instance
    .get(`/diary/detail/${dateKey}`)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        alert("내용을 조회할 수 없습니다.");
        const navigate = useNavigate();
        navigate("/");
      }
    })
    .catch((error) => {
      return error.response;
    });
}
