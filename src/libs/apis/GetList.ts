import axios from "axios";

export async function getRecordList(userId: string) {
  return axios
    .post(
      "https://sl6qp09xxc.execute-api.us-east-2.amazonaws.com/test/diary/list",
      { userId: userId }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(error));
}

export async function getRecordDetail(userId: string, dateKey: string) {
  axios
    .post(
      "https://sl6qp09xxc.execute-api.us-east-2.amazonaws.com/test/diary/detail",
      { userId: userId, dateTime: dateKey }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });
}
