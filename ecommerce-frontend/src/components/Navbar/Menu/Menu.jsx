import { Link } from 'react-router-dom';
import './Menu.css'
const Menu = () => {
    return ( 
        <div className='menu-container'>
            <ul>
                <li>
                    <Link className="active" to="#home">New Arrivals</Link>
                    <span>#Fresh</span>
                </li>
                <li>
                    <Link to="#news">Bride dresses</Link>
                </li>
                <li>
                    <Link to="#contact">Bride Tekchitas</Link>
                </li>
                <li>
                    <Link to="#about">Caftans</Link>
                </li>
                <li>
                    <Link to="#about">Dresses</Link>
                </li>
                <li>
                    <Link to="#about">Tekchitas</Link>
                </li>
                <li>
                    <Link to="#about">Cover-Ups</Link>
                </li>
                <li>
                    <Link to="#about">Jewelries</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Menu;