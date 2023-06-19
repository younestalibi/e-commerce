import { Link } from 'react-router-dom';
import './Menu.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCategories } from '../../../Provider/Features/Category/categorySlice';
import axiosHttp from '../../../utils/axios-client';
const Menu = () => {
    const {isSuccess,isError,isLoading,Categories,deletedCategory}= useSelector((state) => state.Category);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getCategories())
    },[])
    console.log(Categories)
    const [category,setCategory]=useState(null)

    const performSearch = async (category) => {
        try {
            console.log(category)
          const response = await axiosHttp.get(`/search?category=${category}`);
          console.log(response)
        //   setSearchResults(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    return ( 
        <div className='menu-container'>
            <ul>
                <li>
                    <Link className="active" to="/products">New Arrivals</Link>
                    <span>#Fresh</span>
                </li>
                {
                    Categories.map((e,i)=>(
                        <li key={i}>
                            <Link to={`/products/${e.name}`}>{e.name}</Link>
                            {/* <b style={{cursor:'pointer'}} onClick={()=>{performSearch(e.name)}}>{e.name}</b> */}
                        </li>
                    ))
                }   
            </ul>
        </div>
     );
}
 
export default Menu;