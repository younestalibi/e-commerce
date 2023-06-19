import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import {GoSearch} from 'react-icons/go'
import {BsBagCheck} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Provider/Features/Auth/authSlice";
import axiosHttp from "../../../utils/axios-client";
import logo from '../../../assets/logo-lebsa.jpeg'

function Navbar() {
    const location=useLocation()
    const { user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth);
	const navRef = useRef();
    const [search,setSearch]=useState('')
    const dispatch=useDispatch()
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    useEffect(()=>{
        setSearchResults([])
        setSearch('')

    },[location])
    // console.log(user)

    // const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // const [searchResults, setSearchResults] = useState([]);
    const [typingTimeout, setTypingTimeout] = useState(null);
  
    const handleSearch = (query) => {
      // Cancel previous timeout if exists
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }

      if (query === '') {
        setSearchResults([]);
        return;
      }
  
      // Set a new timeout to delay the search request
      const newTimeout = setTimeout(() => {
        performSearch(query);
      }, 500); // Adjust the delay time (in milliseconds) according to your needs
  
      // Update the typingTimeout state
      setTypingTimeout(newTimeout);
    };
  
    const performSearch = async (query) => {
      try {
        const response = await axiosHttp.get(`/search?query=${search}`);
        console.log(response)
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      // Cleanup the timeout when component unmounts
      return () => {
        if (typingTimeout) {
          clearTimeout(typingTimeout);
        }
      };
    }, []);

    // const handleSearch = async () => {
    //     try {
    //     const response = await axiosHttp.get(`/search?query=${search}`);
    //     setSearchResults(response.data);
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };


	return (
		<header>
			<div className="nav-title">
                <img style={{width:'70px',height:"70px",objectFit:'contain'}} src={logo} alt="" />
                <span>L-EBSA</span>
            </div>
            <div>
            <div className="nav-form-control">
                {/* <div></div> */}
                <input type="value"
                value={search}
                onChange={(e)=>{
                    setSearch(e.target.value)
                    handleSearch(e.target.value);
                }}
                />
                <ul class="list-group list-search" >
                {searchResults.length>0? searchResults.map((result,i) => (
                    <Link to={`/products/${result.slug}/${result.id}`}> 
                    <li class="list-group-item d-flex align-items-center"key={i}>
                        <img className="border shadow-sm rounded-circle " style={{width:'40px',height:'40px',objectFit:'contain'}} src={`${import.meta.env.VITE_SERVER_URL}/storage/${result.images.length>0 && result.images[0].image_path}`} alt="" />
                        
                        <span className="mx-3" >{result.name}</span>
                    </li>
                    </Link>
                ))
                :
                search.length>0&&
                <div className="card d-flex justify-content-center align-items-center">
                    <div className="loading-search bg-white">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            
                }
                   
                </ul>
                
                
                {search.length==0 &&
                <label>
                    <span style={{transitionDelay:'0ms'}}>S</span>
                    <span style={{transitionDelay:'50ms'}}>e</span>
                    <span style={{transitionDelay:'100ms'}}>a</span>
                    <span style={{transitionDelay:'150ms'}}>r</span>
                    <span style={{transitionDelay:'200ms'}}>c</span>
                    <span style={{transitionDelay:'250ms'}}>h</span>
                    <span style={{transitionDelay:'300ms'}}>&nbsp;</span>
                    <span style={{transitionDelay:'350ms'}}>f</span>
                    <span style={{transitionDelay:'400ms'}}>o</span>
                    <span style={{transitionDelay:'450ms'}}>r</span>
                    <span style={{transitionDelay:'500ms'}}>&nbsp;</span>
                    <span style={{transitionDelay:'550ms'}}>a</span>
                    <span style={{transitionDelay:'600ms'}}>n</span>
                    <span style={{transitionDelay:'650ms'}}>&nbsp;</span>
                    <span style={{transitionDelay:'700ms'}}>i</span>
                    <span style={{transitionDelay:'750ms'}}>t</span>
                    <span style={{transitionDelay:'800ms'}}>e</span>
                    <span style={{transitionDelay:'850ms'}}>m</span>
                    <span style={{transitionDelay:'900ms'}}>...</span>
                </label>
                }
                <GoSearch/>
                
            </div>
            
            </div>
			<div className="nav-menu" ref={navRef}>
				{/* <Link className='nav-link' to="/">Store</Link> */}
                <Link className='nav-link active' to="/shopping-cart">
                    <span>Basket</span> <BsBagCheck/>
                </Link>
                {
                    user?
                    <>
                    <Link className='nav-link' to="/">
                    <img 
                    width={40}
                    height={40}
                    className="rounded-circle"
                    src={`${import.meta.env.VITE_SERVER_URL}/images/${user.image}`} 
                    alt="profile" 
                    />
                    </Link>
                    <div
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="w-auto"
                    >
                    <h6 className="mb-0">{user&&user.name}</h6>
                    <p className="mb-0">{user&&user.email}</p>
                    </div>
                    <div className="dropdown-menu w-auto" aria-labelledby="dropdownMenuLink">
                        {user.role==='admin'&&
                        <li>
                        <Link
                            className="dropdown-item py-1 mb-1"
                            style={{ height: "auto", lineHeight: "20px" }}
                            to="/admin"
                        >
                            View Profile
                        </Link>
                        </li>
                        }
                        
                        <li>
                        <Link
                            className="dropdown-item py-1 mb-1"
                            style={{ height: "auto", lineHeight: "20px" }}
                            to="/products"
                            onClick={()=>{dispatch(logout())}}
                        >
                            Signout
                        </Link>
                        </li>
                    </div>
                    </>:
                    <Link to={'/login'}>Login/Register</Link>
                }
				

				{/* <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</div>
			{/* <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button> */}
		</header>
	);
}

export default Navbar;