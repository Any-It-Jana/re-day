import instance from "./Instance";

export async function getRecordList(userId: string) {
  return instance
    .post("/diary/list", { userId: userId })
    .then((response) => {
      // console.log(response);
      return response.data;
    })
    .catch((error) => console.error(error));
}

export async function getRecordDetail(userId: string, dateKey: string) {
  return instance
    .post("/diary/detail", { userId: userId, dateTime: dateKey })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
}
