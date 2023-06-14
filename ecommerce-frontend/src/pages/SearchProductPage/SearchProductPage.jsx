// Import your components and CSS
import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import SingleProductCard from './SingleProductCard';
import './SearchProductPage.css';
import banner from '../../assets/banner-search.png'
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '../../components/Pagination/Pagination';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getsearchedproducts, resetStateProduct } from '../../Provider/Features/Product/productSlice';
import axiosHttp from '../../utils/axios-client';
// import RangeFilter from '../../components/RangeFilter/RangeFilter';


const SearchProductPage = () => {
  // This should be replaced with your actual data
  const dummyData = [
    {id: 1, name: 'Product 1', price: '$100'},
    {id: 2, name: 'Product 2', price: '$200'},
    {id: 3, name: 'Product 3', price: '$300'},
    {id: 1, name: 'Product 1', price: '$100'},
    {id: 2, name: 'Product 2', price: '$200'},
    {id: 3, name: 'Product 3', price: '$300'},
    {id: 1, name: 'Product 1', price: '$100'},
    {id: 2, name: 'Product 2', price: '$200'},
    {id: 3, name: 'Product 3', price: '$300'},
    // add more dummy products as needed
  ];
  var {products,isError,isLoading,isSuccess,message,deletedProduct} = useSelector((state) => state.product);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(resetStateProduct())
    dispatch(getsearchedproducts('/get-products'));
  }, []);
  const [currentPage, setCurrentPage] = useState();
  const [totalPages, setTotalPages] = useState();
  useEffect(()=>{
    if(products && isSuccess){
      setCurrentPage(products.current_page);
      setTotalPages(products.last_page);
    }
  },[isSuccess])

  const fetchData =(pageNumber) => {
    dispatch(resetStateProduct())
    dispatch(getsearchedproducts(`/get-products?page=${pageNumber}`));
  };
  useEffect(() => {
    fetchData(currentPage);
    window.scrollTo({ top: 0, behavior: "instant" }); 
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    
    <div>
      {/* <ImageSlider pictures={dummyData}/> */}
      <div className='banner-products-search'>
        <img src={banner} alt="" />
        <div className='banner-products-search-div'>
          <b>Ladies Top</b>
          <div>Slash Sales begins in April. Get up to 80% Discount on all Products <a href="#"><b>Read More</b></a></div>
        </div>
      </div>
      <div className='search-Product-top'>
        <div>
          <strong >Showing {products.from? products.from:''} - {products.to? products.to:''}</strong>
          <span className='mx-2'> out of {products.total? products.total:''} Products</span>
        </div>
      </div>
      <div class="search-products-container">
      
      <div class="left-column">        
        <div className='search-products-filter'>
          <b>Filter</b>
          <div>
            <input type="checkbox" name="" id="woman" />
            <label htmlFor="woman">woman</label>
          </div>
          <div>
            <input type="checkbox" name="" id="Ladies" />
            <label htmlFor="Ladies">woman</label>
          </div>
          <div>
            <input type="checkbox" name="" id="Girls" />
            <label htmlFor="Girls">Girls</label>
          </div>
          <div>
            <input type="checkbox" name="" id="Babies" />
            <label htmlFor="Babies">Babies</label>
          </div>
        </div>
        <div className='search-products-filter'>
          <b>Brands</b>
          <div>
            <input type="checkbox" name="" id="woman" />
            <label htmlFor="woman">woman</label>
          </div>
          <div>
            <input type="checkbox" name="" id="Ladies" />
            <label htmlFor="Ladies">woman</label>
          </div>
          <div>
            <input type="checkbox" name="" id="Girls" />
            <label htmlFor="Girls">Girls</label>
          </div>
          <div>
            <input type="checkbox" name="" id="Babies" />
            <label htmlFor="Babies">Babies</label>
          </div>
          <div>
            <input type="checkbox" name="" id="Ladies" />
            <label htmlFor="Ladies">woman</label>
          </div>
          <div>
            <input type="checkbox" name="" id="Girls" />
            <label htmlFor="Girls">Girls</label>
          </div>
          <div>
            <input type="checkbox" name="" id="Babies" />
            <label htmlFor="Babies">Babies</label>
          </div>
        </div>
      </div>
      <div class="right-column">
        {products.data&&products.data.map((product,i)=>(
            <ProductCard product={product}/>
        ))}
      </div>
      </div>
      <div>
      
      
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        />
      
      </div>
    </div>
  );
}

export default SearchProductPage;
