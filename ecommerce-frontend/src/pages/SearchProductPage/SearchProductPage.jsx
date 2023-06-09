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
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import ProductFilter from '../../components/ProductFilter/ProductFilter';
import SearchLoader from '../../components/Loader/SearchLoader';
import { useLocation, useParams } from 'react-router-dom';

const SearchProductPage = () => {
  // This should be replaced with your actual data
  const {category}=useParams()
  console.log(category)
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
  var {products,isError,isLoading,getProducts,isSuccess,message,deletedProduct} = useSelector((state) => state.product);
  const dispatch=useDispatch()
  const [filter,setFilter]=useState({
    category:category,
    query: null,
    minPrice:null,
    maxPrice:null,
    gender:null,
    rating:null
  })
  const [path,setPath]=useState('/get-products')
  const location=useLocation()
  useEffect(() => {
    dispatch(resetStateProduct())
    dispatch(getsearchedproducts({filter,path}));
    // console.log('now')
   
  }, []);
console.log(products)
  const [currentPage, setCurrentPage] = useState();
  const [totalPages, setTotalPages] = useState();
  useEffect(()=>{
    if(products && isSuccess){
      console.log(products.current_page)
      setCurrentPage(products.current_page);
      setTotalPages(products.last_page);
    }
  },[isSuccess])

  const fetchData =(pageNumber) => {
    console.log(pageNumber)
    setPath(`/get-products?page=${pageNumber}`)
    // dispatch(resetStateProduct())
    dispatch(getsearchedproducts({filter,path}));
  };
  useEffect(() => {
    fetchData(currentPage);
    window.scrollTo({ top: 0, behavior: "instant" }); 
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const [value, setValue] = useState({ min: 0, max:500 });
  // console.log(value)

  const handleFilter = (filters) => {
    // Implement your filter logic here
    // Update the filteredProducts state with the filtered results
    // Example: Make an API call to retrieve the filtered products based on the filters object
    // Set the retrieved products in the filteredProducts state
    console.log(filters); // Example log to see the filter criteria in the console
    setFilter({
      category:category,
      query: null,
      minPrice:filters.minPrice,
      maxPrice:filters.maxPrice,
      gender:filters.gender,
      rating:filters.rating
    })
    // setCurrentPage(1);
    // setTotalPages(null);
    dispatch(resetStateProduct())
    dispatch(getsearchedproducts({filters,path}));
    
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
      <ProductFilter onFilter={handleFilter} />
     
        {/* <div className='search-products-filter'>
          <b>Filter</b>

          <InputRange
            maxValue={1000}
            minValue={0}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
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
        </div> */}
      </div>
      <div class="right-column d-flex">
        
        {products.data?
        products.data.map((product,i)=>(
            <ProductCard product={product}/>
        ))
        :
        <SearchLoader/>
        }
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
