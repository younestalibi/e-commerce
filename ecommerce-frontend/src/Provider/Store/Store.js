import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/Auth/authSlice";
// import customerReducer from "../features/cutomers/customerSlice";
import productSlice from "../Features/Product/productSlice";
import brandSlice from "../Features/Brand/brandSlice";
import categorySlice from "../Features/Category/categorySlice";
import orderSlice from "../Features/Order/orderSlice";
// import bCategoryReducer from "../features/bcategory/bcategorySlice";
// import blogReducer from "../features/blogs/blogSlice";
// import colorReducer from "../features/color/colorSlice";
// import enquiryReducer from "../features/enquiry/enquirySlice";
// import uploadReducer from "../features/upload/uploadSlice";
// import couponReducer from "../features/coupon/couponSlice";
export const store = configureStore({
  reducer: {
    order: orderSlice,
    auth: authSlice,
    // customer: customerReducer,
    product: productSlice,
    brand: brandSlice,
    Category: categorySlice,
    // bCategory: bCategoryReducer,
    // blogs: blogReducer,
    // color: colorReducer,
    // enquiry: enquiryReducer,
    // upload: uploadReducer,
    // coupon: couponReducer,
  },
});
