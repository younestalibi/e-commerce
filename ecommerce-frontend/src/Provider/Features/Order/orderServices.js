import axiosHttp from "../../../utils/axios-client";
import { config } from "../../../utils/config";

const getOrders = async () => {
  const response = await axiosHttp.get(`/orders`);

  return response.data;
};
const createOrder = async (order) => {
  const response = await axiosHttp.post(`/orders`, order, config);
  // console.log(response.response)
  // if(response.response.status===400){
  //   throw new Error('response.response.data.message')

  // }else{
  //   return response.data;
  // }
  return response.data;
  // return response.data;
  // try {
  //   const response = await axiosHttp.post(`/orders`, order, config);
  // console.log(response)
  // return response.data;
    
  //   // Process the received data
  // } catch (error) {
  //   // Handle the error here if needed
  //   console.log(error)
  // }
};
const updateStatus = async (statusData) => {
  // console.log(statusData)
  const response = await axiosHttp.put(`/orders/batch/${statusData.batchID}/status/${statusData.newStatus}`)
  // axios.put(`/orders/batch/${batchId}/status/${newStatus}`)
  console.log(response)
  return response.data;
};

const getIndividualOrders = async (batchID) => {
  const response = await axiosHttp.get(`/orders/${batchID}`);
  console.log(response)
  return response.data;
};

const orderService = {
  getOrders,
  createOrder,
  getIndividualOrders,
  updateStatus,
};

export default orderService;
