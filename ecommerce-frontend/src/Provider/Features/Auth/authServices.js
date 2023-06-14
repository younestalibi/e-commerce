import axios from "axios";
// import { config } from "../../utils/axiosconfig";
import { base_url } from "../../../utils/baseUrl";
import axiosHttp from "../../../utils/axios-client";
const login = async (user) => {
    console.log('hello world')
  const response = await axiosHttp.post(`${base_url}/login`,user);
  console.log(response)
  if (response.data) {
    localStorage.setItem("user", response.data.token);
  }
  return response.data;
};
const logout = async () => {
  const response = await axiosHttp.post(`${base_url}/logout`);
  localStorage.removeItem("user");
  return response.data;
};
const getUser = async (user) => {
  const response = await axiosHttp.get(`${base_url}/user`);
  return response.data;
};

const getOrders = async () => {
  const response = await axios.get(`${base_url}user/getallorders`);

  return response.data;
};
const getOrder = async (id) => {
  const response = await axios.post(
    `${base_url}user/getorderbyuser/${id}`,
    ""
  );

  return response.data;
};

const authService = {
  login,
  getUser,
  getOrders,
  getOrder,
  logout
};

export default authService;
