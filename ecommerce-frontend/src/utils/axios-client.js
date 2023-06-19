import axios from "axios";

const axiosHttp = axios.create({
  baseURL: "http://localhost:8000/api"
});

axiosHttp.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user")
  // ? JSON.parse(localStorage.getItem("user"))
  // : null;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }
);

axiosHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      localStorage.removeItem('user');
      // alert('hello wrold')
    }
    // return Promise.reject(error);
    return error;
  }
);

export default axiosHttp;
