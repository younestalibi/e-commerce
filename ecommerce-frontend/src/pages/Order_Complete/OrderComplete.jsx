import './OrderComplete.css';
import dress from '../../assets/Shopping_Cart/dress.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { createOrder, resetStateOrder } from '../../Provider/Features/Order/orderSlice';
import { useEffect } from 'react';
import { toast } from "react-toastify";


const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
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

  ];
  
export default function OrderComplete(){
    const location = useLocation();
    const { firstName, lastName, email, phone, address, city, zipCode } = location.state;
    console.log(location.state)
    const {cart,isLoading} = useSelector((state) => state.cart);
    // const {message,isError,isSuccess,createdOrder}=useSelector((state)=>state.order)
    const orderState=useSelector((state)=>state.order)
    // useEffect(() => {
    //     console.log(orderState)
    //     if (orderState.isSuccess && orderState.createdOrder) {
    //     toast.success("Product Deleted Successfullly!");
    //     }
    //     if (orderState.isError) {
    //     toast.error("Insufficient quantity available for one or more products");
    //     }
    // }, [orderState.isSuccess, orderState.isError, orderState.isLoading]);
    // console.log(orderState.createdOrder)
    // console.log(orderState.isSuccess)
    console.log(cart)
    // useEffect(()=>{
    //     if (orderState.isSuccess && orderState.createdOrder) {
    //         toast.success("Order Added Successfullly!");
    //       }
    //       console.log('hello world ')
    //     if (orderState.isError) {
    //         toast.error("Something Went Wrong!");
    //     }
    // },[orderState.isSuccess,orderState.isLoading,orderState.isError])
    const data = [];
    var totalCart=0
    var discount=0
    for (const [index,item] of cart.entries()) {
        // console.log(item)
        totalCart+=item.quantity*item.price
        data.push({
        key: index+1,
        name: item.name,
        color: <span style={{backgroundColor:item.color,padding:'0 27px',margin:'auto',borderRadius:'4px'}}></span>,
        price: `${item.price}Dh`,
        image:
        <img 
            style={{width:'60px',height:'60px',objectFit:"cover"}} 
            src={`${import.meta.env.VITE_SERVER_URL}/storage/${item.image && item.image}`}
        />,
        quantity:item.quantity,
        // price:item.price,
        total:item.quantity*item.price,
        // action: (
        //     <>
        //     <Link to={`/products/${item.slug}/${item.id}`} className=" fs-3 text-danger">
        //         <AiFillEye />
        //     </Link>
        //     <button
        //         className="ms-3 fs-3 text-danger bg-transparent border-0"
        //         onClick={() => showModal(item.id)}
        //     >
        //         <AiFillDelete />
        //     </button>
        //     </> 
        // ),
        });
    }
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleOrder=()=>{
        const orders = [];
        const formData = new FormData();
        for(let item of cart){
            console.log(item)

            orders.push({
                product_id:item.id,
                quantity: item.quantity,
                price:item.price,
                first_name:firstName ,
                last_name: lastName,
                email: email,
                phone: phone,
                address: address,
                city: city,
                zip_code: zipCode
            })
        }
        formData.append('orders', JSON.stringify(orders));
        // console.log(orders)
        // dispatch(resetStateOrder())

        dispatch(createOrder({orders:orders}))
        setTimeout(()=>{
            navigate('/')
        },500)


    }
    return(
        <div>
            {/* <div className="OrderComplete-page-nav">
                <a className='OrderComplete-page-shopping-cart-icon'><i class="fa-solid fa-check"></i></a>
                <strong className='OrderComplete-page-shopping-cart-text'>Shopping Cart</strong>
                
                <strong className='OrderComplete-page-line1'>________</strong>

                <a className='OrderComplete-page-checkout-icon'><i class="fa-solid fa-check"></i></a>
                <strong className='OrderComplete-page-checkout-text'>Checkout</strong>

                <strong className='OrderComplete-page-line2'>________</strong>

                <a className='OrderComplete-page-order-complete-icon'><i class="fa-solid fa-cart-shopping"></i></a>
                <strong className='OrderComplete-page-order-complete-text'>Order Complete</strong>
            </div> */}

            <div className='OrderComplete-page-container'>

                <div className='OrderComplete-page-div-1'>
                    <strong>Your Order</strong>
                    <a className='OrderComplete-page-div-1-icon'><i class="fa-solid fa-check"></i></a>
                    <strong className="OrderComplete-page-div-1-paid">Paid</strong>
                    <strong className="OrderComplete-page-div-1-line">______________________________________________________________________________________________________________________________________________________</strong>
                </div>

                {/* <div className='OrderComplete-page-div-2'>
                    <div className="OrderComplete-page-div-2-product">
                        <img className="OrderComplete-page-div-2-product-img" src={dress} alt="dress"/>
                        <span className="OrderComplete-page-div-2-product-text">1x ZW VESTE EN JEAN À SURPIQÛRES</span>
                        <button className='OrderComplete-page-div-2-product-buttons-plusminus'><i class="fa-solid fa-minus"></i></button>
                        <span className='OrderComplete-page-div-2-product-numberElement'>1</span>
                        <button className='OrderComplete-page-div-2-product-buttons-plusminus'><i class="fa-solid fa-plus"></i></button>
                        <strong className='OrderComplete-page-div-2-product-forOneItem'>$200.00</strong>
                        <strong className='OrderComplete-page-div-2-product-forNItem'>$200.00</strong>
                    </div>
                    <strong className="OrderComplete-page-div-1-line">______________________________________________________________________________________________________________________________________________________</strong>

                    <div className="OrderComplete-page-div-2-product">
                        <img className="OrderComplete-page-div-2-product-img" src={dress} alt="dress"/>
                        <span className="OrderComplete-page-div-2-product-text">1x ZW VESTE EN JEAN À SURPIQÛRES</span>
                        <button className='OrderComplete-page-div-2-product-buttons-plusminus'><i class="fa-solid fa-minus"></i></button>
                        <span className='OrderComplete-page-div-2-product-numberElement'>1</span>
                        <button className='OrderComplete-page-div-2-product-buttons-plusminus'><i class="fa-solid fa-plus"></i></button>
                        <strong className='OrderComplete-page-div-2-product-forOneItem'>$200.00</strong>
                        <strong className='OrderComplete-page-div-2-product-forNItem'>$200.00</strong>
                    </div>
                    <strong className="OrderComplete-page-div-1-line">______________________________________________________________________________________________________________________________________________________</strong>

                    <div className="OrderComplete-page-div-2-product">
                        <img className="OrderComplete-page-div-2-product-img" src={dress} alt="dress"/>
                        <span className="OrderComplete-page-div-2-product-text">1x ZW VESTE EN JEAN À SURPIQÛRES</span>
                        <button className='OrderComplete-page-div-2-product-buttons-plusminus'><i class="fa-solid fa-minus"></i></button>
                        <span className='OrderComplete-page-div-2-product-numberElement'>1</span>
                        <button className='OrderComplete-page-div-2-product-buttons-plusminus'><i class="fa-solid fa-plus"></i></button>
                        <strong className='OrderComplete-page-div-2-product-forOneItem'>$200.00</strong>
                        <strong className='OrderComplete-page-div-2-product-forNItem'>$200.00</strong>
                    </div>
                    <strong className="OrderComplete-page-div-1-line">______________________________________________________________________________________________________________________________________________________</strong>
                </div> */}
                <Table columns={columns} dataSource={data} loading={isLoading} />

                {/* <div className='OrderComplete-page-div-3'>
                    <strong>TOTAL</strong>
                    <strong className="OrderComplete-page-div-3-total-money">{`${totalCart}Dh`}</strong>
                    <strong className="OrderComplete-page-div-1-line">______________________________________________________________________________________________________________________________________________________</strong>
                </div> */}

                <div className='OrderComplete-page-div-4'>
                    
                    <div className='OrderComplete-page-div-4-leftDiv'>
                        <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Name & Last name</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>{firstName+' '+lastName}</strong>
                        </div>
                        <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Shipping</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>{address}</strong>
                        </div>
                        {/* <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Shipping Options</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>Same-Day Dispatching</strong>
                        </div> */}
                        <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Email </strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>{email}</strong>
                        </div>
                    </div>

                    <div className='OrderComplete-page-div-4-rightDiv'>
                        <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Subtotal</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>{`${totalCart}Dh`}</strong>
                        </div>
                        <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Discount</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>{`-${discount}Dh`}</strong>
                        </div>
                        {/* <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Shipping Costs</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>$50.00</strong>
                        </div> */}
                        {/* <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Point</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>- $250</strong>
                        </div> */}
                        <strong className="OrderComplete-page-div-1-line">_______________________________________________________________________</strong>
                        <div className='OrderComplete-page-div-4-rightDev-totalDiv'>
                            <strong>TOTAL</strong>
                            <strong className="OrderComplete-page-div-3-total-money">{`${totalCart-discount}Dh`}</strong>
                        </div>
                        <strong className="OrderComplete-page-div-1-line">_______________________________________________________________________</strong>
                    </div>

                </div>

                <div className='OrderComplete-page-div-5'><strong className="OrderComplete-page-div-1-line">______________________________________________________________________________________________________________________________________________________</strong></div>
                <div className='OrderComplete-page-div-6'>New Order, Click button bellow</div>
                <div className='OrderComplete-page-div-7'><button onClick={handleOrder} className='OrderComplete-page-div-7-button'>Shop Now</button></div>

            </div>
        </div>
    )
}