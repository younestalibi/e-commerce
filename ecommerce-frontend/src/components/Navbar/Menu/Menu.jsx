import { Link } from 'react-router-dom';
import './Menu.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../../Provider/Features/Category/categorySlice';
const Menu = () => {
    const {isSuccess,isError,isLoading,Categories,deletedCategory}= useSelector((state) => state.Category);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getCategories())
    },[])
    console.log(Categories)
    return ( 
        <div className='menu-container'>
            <ul>
                <li>
                    <Link className="active" to="#home">New Arrivals</Link>
                    <span>#Fresh</span>
                </li>
                {
                    Categories.map((e,i)=>(
                        <li key={i}>
                            <Link to="#news">{e.name}</Link>
                        </li>
                    ))
                }   
            </ul>
        </div>
     );
}
 
export default Menu;