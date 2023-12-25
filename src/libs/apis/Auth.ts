import instance from "./Instance";

export async function signup(email: string, pw: string) {
  return instance
    .post("/auth/sign-up", { email: email, password: pw }
    )
    .then((response) => {
      console.log("sign-up: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return error.response.data;
    })
}

export async function emailConfirm(email: string, authcode: string) {
  return instance
    .post("/auth/confirm-mail", { email: email, code: authcode }
    )
    .then((response) => {
      console.log("confirm-mail RESPONSE", response);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return error.response.data;
    });
}

export async function signin(email: string, pw: string) {
  return instance
    .post("/auth/sign-in", { email: email, password: pw })
    .then((response) => {
      console.log("RESPONSE", response);
      if (response.data.statusCode === 200) {
        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.body.IdToken}`;
        localStorage.setItem("Re-day-token", response.data.body.IdToken);
      }
      return response.data;
    })
    .catch((error) => {
      console.error("ERROR", error);
      return error.response;
    });
}