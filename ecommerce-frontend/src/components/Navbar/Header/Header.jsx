import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Header.css'
const Header = () => {

    return ( 
        <div className="header-container">
            <div className='header-title'>
                Welcome here in our store enjoy shopping
            </div>
            <div className='header-menu'>
                <Dropdown options={['English','Español','Français']}/>
                <span>|</span>
                <Dropdown options={['MAD','USD']}/>
            </div>
        </div>
     );
}
 
export default Header;