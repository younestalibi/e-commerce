import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {GoSearch} from 'react-icons/go'
import {BsBagCheck} from 'react-icons/bs'
import { useSelector } from "react-redux";

function Navbar() {
    const { user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth);
	const navRef = useRef();
    const [search,setSearch]=useState('')

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div className="nav-title">MY-LOGO</div>
            <div>
            <div className="nav-form-control">
                {/* <div></div> */}
                <input type="value"
                onChange={(e)=>{setSearch(e.target.value)}}
                />
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
                <Link className='nav-link active' to="/">
                    Basket <BsBagCheck/>
                </Link>
                {
                    Boolean(user.name)?
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
                        <li>
                        <Link
                            className="dropdown-item py-1 mb-1"
                            style={{ height: "auto", lineHeight: "20px" }}
                            to="/"
                        >
                            View Profile
                        </Link>
                        </li>
                        <li>
                        <Link
                            className="dropdown-item py-1 mb-1"
                            style={{ height: "auto", lineHeight: "20px" }}
                            to="/"
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