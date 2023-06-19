import axios from "axios";
// import { config } from "../../utils/axiosconfig";
import { base_url } from "../../../utils/baseUrl";
import axiosHttp from "../../../utils/axios-client";
const login = async (user) => {
    console.log('hello world')
  const response = await axiosHttp.post(`/login`,user);
  console.log(response)
  if (response.data) {
    localStorage.setItem("user", response.data.token);
  }
  // if(response.response.status===422){
  //   return new Error(response.response.data.errors)
  // }
  return response.data;
};
const register = async (user) => {
  const response = await axiosHttp.post(`/register`,user);
  console.log(response)
  if (response.data) {
    localStorage.setItem("user", response.data.token);
  }
  return response.data;
};
const logout = async () => {
  const response = await axiosHttp.post(`/logout`);
  localStorage.removeItem("user");
  return response.data;
};
const getUser = async () => {
  const response = await axiosHttp.get(`/user`);
  console.log(response.data)
  return response.data;
};

// const getOrders = async () => {
//   const response = await axios.get(`${base_url}user/getallorders`);

//   return response.data;
// };
// const getOrder = async (id) => {
//   const response = await axios.post(
//     `${base_url}user/getorderbyuser/${id}`,
//     ""
//   );

//   return response.data;
// };

const authService = {
  login,
  getUser,
  register,
  // getOrders,
  // getOrder,
  logout,
};

export default authService;
