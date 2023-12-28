import instance from "./Instance";
import { useNavigate } from "react-router-dom";
// userId가 아니라 token이 들어가는 거임 (token type을 몰라서 냅둠..)
export async function getCheerList(userId: string) {
  return (
    instance
      .get("/cheer/list")
      .then((response) => {
        // 응답에 statusCode 부분이 없음 ?
        // lambda에서 주는 return 값과 다른 응답이 옴
        console.log("RESPONSE:", response);
        if (response.status === 200) {
          return response.data;
        } else {
          alert("글귀를 조회할 수 없습니다.");
          const navigate = useNavigate();
          navigate("/");
        }
      })
      .catch((error) => console.error())
  );
}