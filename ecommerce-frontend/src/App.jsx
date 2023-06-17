import './App.css'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Home/Home';
import SearchProductPage from './pages/SearchProductPage/SearchProductPage';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import ShoppingCart from './pages/Shopping_Cart/ShoppingCart';
import OrderComplete from './pages/Order_Complete/OrderComplete';
import Checkout from './pages/Checkout/Checkout'



import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Login from './pages/Authentication/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import MainLayout from './components/MainLayout/MainLayout';
import ForgotPassword from './pages/Authentication/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Authentication/ResetPassword/ResetPassword';
import Customers from './pages/Customers/Customers';
import ProductsList from './pages/Product/ProductsList/ProductsList';
import Addbrand from './pages/Brand/Addbrand/Formbrand';
import BrandsList from './pages/Brand/BrandsList/BrandsList';
import AddProduct from './pages/Product/AddProduct/FromProduct';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import axiosHttp from './utils/axios-client';
import { getUser } from './Provider/Features/Auth/authSlice';
import CategoriesList from './pages/Category/CategoriesList/CategoriesList';
import FormCategory from './pages/Category/FormCategory/FormCategory';
import Formbrand from './pages/Brand/Addbrand/Formbrand';
import OrdersList from './pages/Orders/OrdersList';
import IndexLayout from './components/MainLayout/IndexLayout';
import Test from './Test';
import PaymentLayout from './components/MainLayout/PaymentLayout';
function App() {

  const dispatch=useDispatch()
  useEffect(() => {
    // const fetchUserData =() => {
      // try {
        // const response = await axiosHttp.get('/user');
        dispatch(getUser());
        // console.log(response)
      // } catch (error) {
        // console.error('Failed to get user data:', error);
      // }
    // };

    // fetchUserData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexLayout />}>
            <Route index element={<Home/>}/>
            <Route path="/products" element={<SearchProductPage/>}/>
            <Route path="/products/:slug/:id" element={<SingleProduct/>}/>
            {/* <Route path="/shopping-cart" element={<ShoppingCart/>}/> */}
            <Route path="/order-complete" element={<OrderComplete/>}/>
            <Route path="/checkout" element={<Checkout/>}/>

            <Route path="/shopping-cart" element={<PaymentLayout />}>      
              <Route index element={<ShoppingCart />} />
            </Route>

            
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* <Route path="/cart" element={<Test />}></Route> */}
          <Route path="/test" element={<Test />}></Route>

          

          <Route path="/admin" element={<MainLayout />}>      
            <Route index element={<Dashboard />} />
            {/* <Route path="enquiries" element={<Enquiries />} /> */}
            {/* <Route path="enquiries/:id" element={<ViewEnq />} /> */}
            {/* <Route path="coupon-list" element={<Couponlist />} /> */}
            {/* <Route path="coupon" element={<AddCoupon />} /> */}
            {/* <Route path="coupon/:id" element={<AddCoupon />} /> */}
            <Route path="list-orders" element={<OrdersList />} />
            {/* <Route path="order/:id" element={<ViewOrder />} /> */}
            <Route path="customers" element={<Customers />} />
            <Route path="list-categories" element={<CategoriesList />} />
            <Route path="form-category/:id?" element={<FormCategory />} />
            <Route path="list-brands" element={<BrandsList />} />
            <Route path="form-brand/:id?" element={<Formbrand />} />
            <Route path="list-products" element={<ProductsList />} />
            <Route path="form-product/:id?" element={<AddProduct/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
