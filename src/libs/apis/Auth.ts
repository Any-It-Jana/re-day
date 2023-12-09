import axios from "axios";

export async function register(email: string, pw: string) {
  return axios
    .post(
      "https://sl6qp09xxc.execute-api.us-east-2.amazonaws.com/test/auth/sign-up",
      { email: email, password: pw }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(error));
}

export async function sendAuthCode(email: string, authcode: string) {
  return axios
    .post(
      "https://sl6qp09xxc.execute-api.us-east-2.amazonaws.com/test/auth/comfirm-mail",
      { email: email, code: authcode }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(error));
}

export async function login(userId: string, pw: string) {
  return axios
    .post(
      "https://sl6qp09xxc.execute-api.us-east-2.amazonaws.com/test/auth/sign-in",
      { email: userId, password: pw }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(error));
}
