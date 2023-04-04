import axios from "axios";

axios.interceptors.request.use(config => {

  let token = window.localStorage.getItem('token');
  if (token) {
    config.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

const UNAUTHORIZED = 401;

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    try {
      const {
        response: { status },
      } = error
      return Promise.reject(error);
    } catch {
      return Promise.reject(error);
    }
  },
);

export default V => {
  Object.defineProperties(V.prototype, {
    $http: {
      get() {
        return axios;
      },
      post() {
        return axios;
      },
      put() {
        return axios;
      },
      patch() {
        return axios;
      },
    },
  });
};