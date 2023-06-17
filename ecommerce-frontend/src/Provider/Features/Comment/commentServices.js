import axios from "axios";
// import { config } from "../../utils/axiosconfig";
import axiosHttp from "../../../utils/axios-client";


const createComment = async (comment) => {
  const response = await axiosHttp.post(`/comments`,comment);
  return response.data;
};
const getComments = async (productID) => {
  const response = await axiosHttp.get(`/comments/${productID}`);
  return response.data;
};

const deleteComment = async (commentId) => {
  const response = await axiosHttp.delete(`/comments/${commentId}`);
  return response.data;
};




const commentService = {
    createComment,
    getComments,
    deleteComment
};

export default commentService;
