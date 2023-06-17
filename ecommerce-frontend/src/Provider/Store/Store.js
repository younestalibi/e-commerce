import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/Auth/authSlice";
// import customerReducer from "../features/cutomers/customerSlice";
import productSlice from "../Features/Product/productSlice";
import brandSlice from "../Features/Brand/brandSlice";
import categorySlice from "../Features/Category/categorySlice";
import orderSlice from "../Features/Order/orderSlice";
import commentSlice from "../Features/Comment/commentSlice";
import favoritesSlice from "../Features/Favorites/favoritesSlice";
import cartSlice from "../Features/Cart/cartSlice";
// import blogReducer from "../features/blogs/blogSlice";
// import colorReducer from "../features/color/colorSlice";
// import enquiryReducer from "../features/enquiry/enquirySlice";
// import uploadReducer from "../features/upload/uploadSlice";
// import couponReducer from "../features/coupon/couponSlice";
export const store = configureStore({
  reducer: {
    order: orderSlice,
    auth: authSlice,
    favorites: favoritesSlice,
    // customer: customerReducer,
    product: productSlice,
    brand: brandSlice,
    Category: categorySlice,
    comment: commentSlice,
    cart: cartSlice,

    // blogs: blogReducer,
    // color: colorReducer,
    // enquiry: enquiryReducer,
    // upload: uploadReducer,
    // coupon: couponReducer,
  },
});
