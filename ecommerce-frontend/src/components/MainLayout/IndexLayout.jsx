import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Navbar/Header/Header";
import Menu from "../Navbar/Menu/Menu";
import Navbar from "../Navbar/Navbar/Navbar";
import './IndexLayout.css'
const IndexLayout = () => {

    return ( 
        <div className="container-layout">
            <Header/>
            <Navbar/>
            <Menu/>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default IndexLayout;