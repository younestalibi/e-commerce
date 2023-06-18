import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import {AiFillStar,AiOutlineHeart,AiOutlineComment, AiTwotoneHeart} from 'react-icons/ai'
import { MdShoppingCartCheckout} from 'react-icons/md'
import { Outlet, useLocation } from "react-router-dom";
import './PaymentLayout.css'
import { BsCartCheck, BsFillCartCheckFill } from 'react-icons/bs';

const PaymentLayout = () => {
    const location = useLocation();
    const currentURL = location.pathname;
    console.log(currentURL)
    return ( 
        <div className='payment-layout-container'>
            {/* <Header/>
            <Navbar/>
            <Menu/> */}
            <div className='payment-layout-steps'>
            <Steps
            items={[
            {
                title: 'Shopping Cart',
                status: currentURL=='/shopping-cart' ? 'process' : currentURL=='/checkout' ? 'finish' :  'finish',
                icon: <BsCartCheck/>,
            },
            {
                title: 'Checkout',
                status: currentURL=='/shopping-cart' ? 'wait' : currentURL=='/checkout' ? 'process' : currentURL=='/order-complete' ? 'finish' : 'finish',
                icon: <MdShoppingCartCheckout />,
            },
            {
                title: 'Order Complete',
                status: currentURL=='/shopping-cart' ? 'wait' : currentURL=='/checkout' ? 'wait' : currentURL=='/order-complete' ? 'process' : 'process',
                icon: <LoadingOutlined />,
            },
            ]}
            />
            </div>
            <Outlet/>
            {/* <Footer/> */}
        </div>
     );
}
 
export default PaymentLayout;