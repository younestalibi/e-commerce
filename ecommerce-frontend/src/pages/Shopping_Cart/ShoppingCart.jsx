import { useState } from 'react';
import './ShoppingCart.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import interac from '../../assets/Shopping_Cart/interac.png'
import betcoin from '../../assets/Shopping_Cart/betcoin.png'
import master_card from '../../assets/Shopping_Cart/master_card.png'
import visa from '../../assets/Shopping_Cart/visa.avif'
import dress from '../../assets/Shopping_Cart/dress.jpg'


export default function ShoppingCart(){
    const [plusButton,setPlusButton]=useState()
    const [minusButton,setMinusButton]=useState()
    return(
        <div>
            <div className="shopping-cart-nav">
                <a className='shopping-cart-icon'><i class="fa-solid fa-cart-shopping"></i></a>
                <strong className='shopping-cart-text'>Shopping Cart</strong>
                
                <strong className='shopping-cart-line'>________</strong>

                <a className='checkout-icon'><i class="fa-solid fa-cart-shopping"></i></a>
                <span className='checkout-text'>Checkout</span>

                <strong className='shopping-cart-line'>________</strong>

                <a className='order-complete-icon'><i class="fa-solid fa-cart-shopping"></i></a>
                <span className='order-complete-text'>Order Complete</span>
            </div>

            <div className="shopping-cart-container">
                <div className="shopping-cart-div-1">
                    <strong>Your Cart</strong>
                    <strong className="shopping-cart-div-1-number-of-products">(3)</strong>
                    <div className="shopping-cart-div-1-line">_______________________________________________________________________________________</div>
                    <div className="shopping-cart-div-1-product">
                        <img className="shopping-cart-div-1-product-img" src={dress} alt="dress"/>
                        <span className="shopping-cart-div-1-product-text">1x ZW VESTE EN JEAN À SURPIQÛRES</span>
                        <button className='shopping-cart-div-1-product-buttons-plusminus'><i class="fa-solid fa-minus"></i></button>
                        <span className='shopping-cart-div-1-product-numberElement'>1</span>
                        <button className='shopping-cart-div-1-product-buttons-plusminus'><i class="fa-solid fa-plus"></i></button>
                        <strong className='shopping-cart-div-1-product-forOneItem'>$200.00</strong>
                        <strong className='shopping-cart-div-1-product-forNItem'>$200.00</strong>
                    </div>
                    <div className="shopping-cart-div-1-line-thin">_______________________________________________________________________________________</div>
                    <div className="shopping-cart-div-1-product">
                        <img className="shopping-cart-div-1-product-img" src={dress} alt="dress"/>
                        <span className="shopping-cart-div-1-product-text">1x ZW VESTE EN JEAN À SURPIQÛRES</span>
                        <button className='shopping-cart-div-1-product-buttons-plusminus'><i class="fa-solid fa-minus"></i></button>
                        <span className='shopping-cart-div-1-product-numberElement'>1</span>
                        <button className='shopping-cart-div-1-product-buttons-plusminus'><i class="fa-solid fa-plus"></i></button>
                        <strong className='shopping-cart-div-1-product-forOneItem'>$200.00</strong>
                        <strong className='shopping-cart-div-1-product-forNItem'>$200.00</strong>
                    </div>
                    <div className="shopping-cart-div-1-line-thin">_______________________________________________________________________________________</div>
                    <div className="shopping-cart-div-1-product">
                        <img className="shopping-cart-div-1-product-img" src={dress} alt="dress"/>
                        <span className="shopping-cart-div-1-product-text">1x ZW VESTE EN JEAN À SURPIQÛRES</span>
                        <button className='shopping-cart-div-1-product-buttons-plusminus'><i class="fa-solid fa-minus"></i></button>
                        <span className='shopping-cart-div-1-product-numberElement'>1</span>
                        <button className='shopping-cart-div-1-product-buttons-plusminus'><i class="fa-solid fa-plus"></i></button>
                        <strong className='shopping-cart-div-1-product-forOneItem'>$200.00</strong>
                        <strong className='shopping-cart-div-1-product-forNItem'>$200.00</strong>
                    </div>
                    <div className="shopping-cart-div-1-line-thin">_______________________________________________________________________________________</div>
                    <div className="shopping-cart-div-1-line-thin">_______________________________________________________________________________________</div>
                    <div className="shopping-cart-div-1-texts">
                        <strong className="shopping-cart-div-1-texts-text-1">Delivery</strong>
                        <strong className="shopping-cart-div-1-texts-text-2">Free Returns</strong>
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
                </div>

                <div className="shopping-cart-div-2">
                    <div className='shopping-cart-div-2-textDiv'>
                        <span className='shopping-cart-div-2-text-text'>Total</span>
                        <strong className='shopping-cart-div-2-text-price'>$497.00</strong>
                    </div>
                    <div className='shopping-cart-div-2-textDiv'>
                        <span className='shopping-cart-div-2-text-text'>Discount</span>
                        <strong className='shopping-cart-div-2-text-price'>$0.0</strong>
                    </div>
                    <div className='shopping-cart-div-2-textDiv'>
                        <span className='shopping-cart-div-2-text-text'>Shipping Costs</span>
                        <strong className='shopping-cart-div-2-text-price'>$50.00</strong>
                    </div>
                    <input className='shopping-cart-div-2-input' type='text' placeholder='Coupon code'/>
                    <button className='shopping-cart-div-2-button-applyCoupon'>Apply Coupon</button>
                    <div className="shopping-cart-div-1-line-thin">_____________________________________________</div>
                    <progress className='progress-bar' value="50" max="100"></progress>
                    <div className='shopping-cart-div-2-free-shipping'>
                        <span className="shopping-cart-div-2-thin-text">Get Free </span><span className="shopping-cart-div-2-shipping">Shipping </span> <span className="shopping-cart-div-2-thin-text">for orders over</span> <span className="shopping-cart-div-2-100-dollar">$100.00</span>
                        <div className="shopping-cart-div-2-continueshopping"><a href='#'>Continue Shopping</a></div>
                    </div>
                    <button className='shopping-cart-div-2-button-chekout'>Checkout | $547.00</button>
                    <div className="shopping-cart-div-1-line-thin">_____________________________________________</div>
                    <div className='shopping-cart-div-2-payement-text'>SECURE PAYMENTS PROVIDED BY</div>
                    <div className='shopping-cart-div-2-payement-imgs'>
                        <button className='shopping-cart-div-2-payement-imgs-button1'><img className="shopping-cart-div-2-payement-imgs-img1" src={master_card} alt="master_card"/></button>
                        <button className='shopping-cart-div-2-payement-imgs-button2'><img className="shopping-cart-div-2-payement-imgs-img1" src={visa} alt="visa"/></button>
                        <button className='shopping-cart-div-2-payement-imgs-button3'><img className="shopping-cart-div-2-payement-imgs-img2" src={betcoin} alt="betcoin"/></button>
                        <button className='shopping-cart-div-2-payement-imgs-button4'><img className="shopping-cart-div-2-payement-imgs-img2" src={interac} alt="interac"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}