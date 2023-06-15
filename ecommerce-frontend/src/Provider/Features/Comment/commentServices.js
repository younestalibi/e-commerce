import axios from "axios";
// import { config } from "../../utils/axiosconfig";
import axiosHttp from "../../../utils/axios-client";


const createComment = async (comment) => {
  console.log(comment.get('product_id'))
  const response = await axiosHttp.post(`/comments`,comment);
  console.log(response)

  return response.data;
};




const commentService = {
    createComment,
};

export default commentService;
