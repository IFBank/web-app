import axios, { AxiosError } from "axios";

const token = localStorage.getItem("@IFTAKE:token");

let isRefreshing = false;
let failedRequestsQueue = [];

const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorizarion: `Bearer ${token}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response.status === 400) {
      //@ts-ignore
      if (error.response.data.code === 20225) {
        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;
          //@ts-ignore
          async function getToken() {}

          getToken()
            .then((response) => {
              const token = localStorage.getItem("@IFTAKE:token");

              api.defaults.headers["Authorization"] = `Bearer ${token}`;

              failedRequestsQueue.forEach((request) =>
                request.onSuccess(token)
              );
              failedRequestsQueue = [];
            })
            .catch((error) => {
              failedRequestsQueue.forEach((request) =>
                request.onFailure(error)
              );
              failedRequestsQueue = [];
            })
            .finally(() => {
              isRefreshing = false;
            });

          console.log(token);

          // api
          //   .post("/oauth/token", dataHomo, {
          //     headers: {
          //       Authorization: `Basic ${authHomo}`,
          //       "Content-Type": "application/json",
          //     },
          //   })
          //   .then((response) => {
          //     const token = response.data.access_token;

          //     api.defaults.headers["Authorization"] = `Bearer ${token}`;

          //     failedRequestsQueue.forEach((request) =>
          //       request.onSuccess(token)
          //     );
          //     failedRequestsQueue = [];
          //   })
          //   .catch((error) => {
          //     failedRequestsQueue.forEach((request) =>
          //       request.onFailure(error)
          //     );
          //     failedRequestsQueue = [];
          //   })
          //   .finally(() => {
          //     isRefreshing = false;
          //   });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers["Authorization"] = `Bearer ${token}`;

              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }
    }

    return Promise.reject(error);
  }
);

export { api };
