import { useState } from 'react';
import './ShoppingCart.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import interac from '../../assets/Shopping_Cart/interac.png'
import betcoin from '../../assets/Shopping_Cart/betcoin.png'
import master_card from '../../assets/Shopping_Cart/master_card.png'
import visa from '../../assets/Shopping_Cart/visa.avif'
import dress from '../../assets/Shopping_Cart/dress.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'antd';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import { removeFromCart } from '../../Provider/Features/Cart/cartSlice';
const columns = [
    // {
    //   title: "SNo",
    //   dataIndex: "key",
    // },
    {
      title: "Name",
      key: 'name',
      dataIndex: "name",
    //   sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Image",
      key: 'image',
      dataIndex: "image",
    },
    
    {
      title: "Color",
      key: 'color',
      dataIndex: "color",
    },
    {
      title: "Quantity",
      key: 'quantity',
      dataIndex: "quantity",
    },
    {
      title: "Price",
      key: 'price',
      dataIndex: "price",
    },
    {
      title: "Total",
      key: 'total',
      dataIndex: "total",
    },
    
    
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import {AiFillStar,AiOutlineHeart,AiOutlineComment, AiTwotoneHeart} from 'react-icons/ai'


const ShoppingCart = () => {
    const dispatch = useDispatch();
    const [deleteId,setDeleteId]=useState(null)
    const [open, setOpen] = useState(false);
    const showModal = (e) => {
        setOpen(true);
        setDeleteId(e)
    };
    const hideModal = () => {
        setOpen(false);
    };


    const {cart,isLoading} = useSelector((state) => state.cart);
    const data = [];
    var totalCart=0
    var discount=0
    for (const [index,item] of cart.entries()) {
        console.log(item)
        totalCart+=item.quantity*item.price
        data.push({
        key: item.id,
        name: item.name,
        color: <span style={{backgroundColor:item.color,padding:'0 27px',margin:'auto',borderRadius:'4px'}}></span>,
        price: `${item.price}Dh`,
        image:
        <img 
            style={{width:'60px',height:'60px',objectFit:"cover"}} 
            src={`${import.meta.env.VITE_SERVER_URL}/storage/${item.image && item.image}`}
        />,
        quantity:item.quantity,
        price:item.price,
        total:item.quantity*item.price,
        action: (
            <>
            <Link to={`/products/${item.slug}/${item.id}`} className=" fs-3 text-danger">
                <AiFillEye />
            </Link>
            <button
                className="ms-3 fs-3 text-danger bg-transparent border-0"
                onClick={() => showModal(item.id)}
            >
                <AiFillDelete />
            </button>
            </> 
        ),
        });
    }
    const deleteRecord = (e) => {
        if(typeof(e)=='object'){
            for(let id of e){
                dispatch(removeFromCart(id)) //delete array of ids
                setSelectedRowKeys([]);
            }
        }else{
            dispatch(removeFromCart(e))
        }
        
        // dispatch(resetStateProduct())
        setOpen(false);
        // setTimeout(() => {
        // dispatch(getProducts());
        // }, 100);
      };
    const [plusButton,setPlusButton]=useState()
    const [minusButton,setMinusButton]=useState()


    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        showModal(selectedRowKeys)
        // setLoading(true);
        // ajax request after empty completing
        // setTimeout(() => {
        // setSelectedRowKeys([]);
        // setLoading(false);
        // }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    // console.log(selectedRowKeys)
    const hasSelected = selectedRowKeys.length > 0;






    const [couponCode, setCouponCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  // Calculate total amount based on cartItems

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = () => {
    // Logic for handling the checkout process
  };
    return ( 
        <div className='cart-container'>
            
            <div className='cart-wrapper'>
                <div>
                    <div
                    style={{
                    marginBottom: 16,
                    }}
                    >
                    <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Delete
                    </Button>
                    <span
                    style={{
                        marginLeft: 8,
                    }}
                    >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                    </div>
                    <div className=''>
                    <strong>Your Cart</strong>
                    <strong className="">({cart.length})</strong>
                    </div>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} loading={isLoading} />
                </div>
                <div>
                    <div className='card p-4'>
                        <div className='d-flex my-2 justify-content-between'>
                            <div>Subtotal</div>
                            <b>{`${totalCart}Dh`}</b>
                        </div>
                        <div className='d-flex my-2 justify-content-between'>
                            <div>Discount</div>
                            <b>0DH</b>
                        </div>
                        <div className='d-flex my-2 justify-content-between'>
                            <div>Total</div>
                            <b>{`${totalCart-discount}Dh`}</b>
                        </div>
                        <div className='coupon-code-input my-3'>
                            <input type="text" placeholder="Coupon Code"/>
                            <input type="button" value="Apply Coupon" />
                        </div>
                        <div className='checkout-button my-4'>
                            <Link disabled={true} to='/checkout'>Checkout | {`${totalCart-discount}Dh`}</Link>
                        </div>
                        
                    </div>

                </div>

            </div>
            <div className="shopping-cart-div-1-cards">
                        <div className='shopping-cart-div-1-cards-card1'>
                            <a className='shopping-cart-div-1-cards-card1-icon'><i class="fa-solid fa-receipt"></i></a>
                            <div className='shopping-cart-div-1-cards-card1-text1'>Order by 10pm for free next day delivery on Orders overs $100</div>
                            <div className='shopping-cart-div-1-cards-card1-text2'>We deliver Monday to Saturday - excluding Holidays</div>
                        </div>
                        <div className='shopping-cart-div-1-cards-card2'>
                            <a className='shopping-cart-div-1-cards-card2-icon'><i class="fa-solid fa-box"></i></a>
                            <div className='shopping-cart-div-1-cards-card2-text1'>Free next day delivery to stores.</div>
                            <div className='shopping-cart-div-1-cards-card2-text2'>Home delivery is $4.99 for orders under $100 and is FREE for all orders over $100</div>
                        </div>
                        <div className='shopping-cart-div-1-cards-card3'>
                            <a className='shopping-cart-div-1-cards-card3-icon'><i class="fa-solid fa-truck"></i></a>
                            <div className='shopping-cart-div-1-cards-card3-text'>30 days to return it to us for a refund. We have made returns SO EASY - you can now return your order to a store or send it with FedEx FOR FREE</div>
                        </div>
                    </div>
            <CustomAlert
                setOpen={setOpen}
                open={open}
                performAction={() => {
                    deleteRecord(deleteId);
                }}
                title="Are you sure you want to delete this Product?"
            />
        </div>
     );
}
 
export default ShoppingCart;