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
                status: 'finish',
                status: currentURL=='/shopping-cart' ? 'process' : currentURL=='/shopping-cart/checkout' ? 'finish' : currentURL=='/shopping-cart/order-complete' ? 'finish' : 'finish',
                icon: <BsCartCheck/>,
            },
            {
                title: 'Checkout',
                status: 'process',
                icon: <MdShoppingCartCheckout />,
            },
            {
                title: 'Order Complete',
                status: 'wait',
                icon: <LoadingOutlined />,
            },
            ]}
            />
            </div>
            <Outlet/>
            hello wol
            {/* <Footer/> */}
        </div>
     );
}
 
export default PaymentLayout;