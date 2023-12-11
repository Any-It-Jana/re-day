import instance from "./Instance";

export async function signup(email: string, pw: string) {
  return instance
    .post("/auth/sign-up", { email: email, password: pw })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(error));
}

export async function emailConfirm(email: string, authcode: string) {
  return instance
    .post("/auth/comfirm-mail", { email: email, code: authcode })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(error));
}

export async function signin(email: string, pw: string) {
  return instance
    .post("/auth/sign-in", { email: email, password: pw })
    .then((response) => {
      console.log(response.data);
      if (response.data.statusCode === 200) {
        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.body.IdToken}`;
        localStorage.setItem("Re-day-token", response.data.body.IdToken);
      }
      return response.data;
    })
    .catch((error) => console.error(error));
}
