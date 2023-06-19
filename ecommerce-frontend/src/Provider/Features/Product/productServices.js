import { config } from "../../../utils/config";
import axiosHttp from "../../../utils/axios-client";


const getsearchedproducts = async (filters) => {
  console.log(filters)

  const response = await axiosHttp.get(filters.path,{
    params:filters.filters
  }
  );
  console.log('---------------')
  console.log(response.data)
  console.log('---------------')

  return response.data;
};
const getProducts = async () => {
  const response = await axiosHttp.get(`/products`);
  return response.data;
};
const createProduct = async (product) => {
  const response = await axiosHttp.post(`/product`, product, config);
  return response.data;
};
const getSuggestion = async () => {
  const response = await axiosHttp.get(`/products-suggestions`);
  console.log(response)
  return response.data;
};
const deleteProduct = async (id) => {
    const response = await axiosHttp.delete(`/products/${id}`);
    return response.data;
  };
const getSingleProduct = async (id) => {
    const response = await axiosHttp.get(`/products/${id}`);
    return response.data;
};
const updateProduct = async (product) => {
    const response = await axiosHttp.post(`/products/${product.get('id')}`,product,config);
  console.log(response)
    return response.data;
  };
const productService = {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getSingleProduct,
  getSuggestion,
  getsearchedproducts
};

export default productService;
