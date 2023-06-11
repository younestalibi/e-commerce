import { useState } from 'react';
import './Checkout.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import interac from '../../assets/Shopping_Cart/interac.png'
import betcoin from '../../assets/Shopping_Cart/betcoin.png'
import master_card from '../../assets/Shopping_Cart/master_card.png'
import dollar from '../../assets/Shopping_Cart/dollar.png'
import visa from '../../assets/Shopping_Cart/visa.avif'
import dress from '../../assets/Shopping_Cart/dress.jpg'
export default function Checkout(){
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return(
        <div>
            <div className="checkout-page-nav">
                <a className='checkout-page-shopping-cart-icon'><i class="fa-solid fa-check"></i></a>
                <strong className='checkout-page-shopping-cart-text'>Shopping Cart</strong>
                
                <strong className='checkout-page-line1'>________</strong>

                <a className='checkout-page-checkout-icon'><i class="fa-solid fa-cart-shopping"></i></a>
                <strong className='checkout-page-checkout-text'>Checkout</strong>

                <strong className='checkout-page-line2'>________</strong>

                <a className='checkout-page-order-complete-icon'><i class="fa-solid fa-cart-shopping"></i></a>
                <strong className='checkout-page-order-complete-text'>Order Complete</strong>
            </div>

            <div className="checkout-page-container">
                <div className="checkout-page-div-1">
                    <strong>Shipping</strong>
                    <strong className="checkout-page-div-1-number-of-products">(3)</strong>
                    <div className="checkout-page-div-1-line">_______________________________________________________________________________________</div>
                    <form>
                        <div className="checkout-page-div-1-firstAndLastName">
                            <div>
                                <label className="checkout-page-div-1-first-name">FIRST NAME *</label>
                                <input className='checkout-page-div-1-first-name-input' type='text'/>
                            </div>
                            <div>
                                <label className="checkout-page-div-1-last-name">LAST NAME *</label>
                                <input className='checkout-page-div-1-last-name-input' type='text'/>
                            </div>
                        </div>
                        <div className="checkout-page-div-1-country-1">
                            <label className="checkout-page-div-1-country-label1">COUNTRY / REGION *</label>
                            <select className="checkout-page-div-1-country-select">
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                        <div className="checkout-page-div-1-country-2">
                            <div>
                                <label className="checkout-page-div-1-country-label2">COUNTRY / REGION *</label>
                                <input className='checkout-page-div-1-country-input1' type='text' placeholder='House number and street name'/>
                                <input className='checkout-page-div-1-country-input2' type='text' placeholder='Apartment, suite, unit, etc. (optional)'/>
                            </div>
                        </div>
                        <div className="checkout-page-div-1-cityDiv">
                            <div>
                                <label className="checkout-page-div-1-cityDiv-text">Town / City *</label>
                                <input className='checkout-page-div-1-cityDiv-input' type='text'/>
                            </div>
                            <div>
                                <label className="checkout-page-div-1-cityDiv-text">Province *</label>
                                <input className='checkout-page-div-1-cityDiv-input' type='text'/>
                            </div>
                            <div>
                                <label className="checkout-page-div-1-cityDiv-text">Postcode / ZIP *</label>
                                <input className='checkout-page-div-1-cityDiv-input' type='text'/>
                            </div>
                        </div>
                        <div className="checkout-page-div-1-phoneEmail">
                            <div>
                                <label className="checkout-page-div-1-phoneEmail-text">Phone (optional)</label>
                                <input className='checkout-page-div-1-phoneEmail-input' type='text'/>
                            </div>
                            <div>
                                <label className="checkout-page-div-1-phoneEmail-text">Email address *</label>
                                <input className='checkout-page-div-1-phoneEmail-input' type='text' placeholder='johndoe@example.com'/>
                            </div>
                        </div>
                        <div className="checkout-page-div-1-line-between">______________________________________________________________________________________</div>
                        <div className="checkout-page-div-1-orderShipping">
                            {/* ////////////////////////////////////// */}
                            <div>
                                <input className='checkout-page-div-1-orderShipping-checkbox' type='checkbox' checked={isChecked} onChange={handleCheckboxChange}/>
                                <label>Ship to a different Address?</label>
                                {isChecked && (
                                    <form>
                                        <div className="checkout-page-div-1-firstAndLastName">
                                            <div>
                                                <label className="checkout-page-div-1-first-name">FIRST NAME *</label>
                                                <input className='checkout-page-div-1-first-name-input' type='text'/>
                                            </div>
                                            <div>
                                                <label className="checkout-page-div-1-last-name">LAST NAME *</label>
                                                <input className='checkout-page-div-1-last-name-input' type='text'/>
                                            </div>
                                        </div>
                                        <div className="checkout-page-div-1-country-1">
                                            <label className="checkout-page-div-1-country-label1">COUNTRY / REGION *</label>
                                            <select className="checkout-page-div-1-country-select">
                                                <option>1</option>
                                                <option>1</option>
                                                <option>1</option>
                                            </select>
                                        </div>
                                        <div className="checkout-page-div-1-country-2">
                                            <div>
                                                <label className="checkout-page-div-1-country-label2">COUNTRY / REGION *</label>
                                                <input className='checkout-page-div-1-country-input1' type='text' placeholder='House number and street name'/>
                                                <input className='checkout-page-div-1-country-input2' type='text' placeholder='Apartment, suite, unit, etc. (optional)'/>
                                            </div>
                                        </div>
                                        <div className="checkout-page-div-1-cityDiv">
                                            <div>
                                                <label className="checkout-page-div-1-cityDiv-text">Town / City *</label>
                                                <input className='checkout-page-div-1-cityDiv-input' type='text'/>
                                            </div>
                                            <div>
                                                <label className="checkout-page-div-1-cityDiv-text">Province *</label>
                                                <input className='checkout-page-div-1-cityDiv-input' type='text'/>
                                            </div>
                                            <div>
                                                <label className="checkout-page-div-1-cityDiv-text">Postcode / ZIP *</label>
                                                <input className='checkout-page-div-1-cityDiv-input' type='text'/>
                                            </div>
                                        </div>
                                        <div className="checkout-page-div-1-phoneEmail">
                                            <div>
                                                <label className="checkout-page-div-1-phoneEmail-text">Phone (optional)</label>
                                                <input className='checkout-page-div-1-phoneEmail-input' type='text'/>
                                            </div>
                                            <div>
                                                <label className="checkout-page-div-1-phoneEmail-text">Email address *</label>
                                                <input className='checkout-page-div-1-phoneEmail-input' type='text' placeholder='johndoe@example.com'/>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                            {/* ///////////////////////////////// */}
                            <div className="checkout-page-div-1-orderShipping">
                                <label className="checkout-page-div-1-orderShipping-text">Order Notes (optional)</label>
                                <textarea className='checkout-page-div-1-orderShipping-textarea' cols="30" rows="10" placeholder='Notes about your order, e.g. special notes for delivery.'></textarea>
                            </div>
                        </div>
                        <div className="checkout-page-div-1-line-between">______________________________________________________________________________________</div>
                        <div className="checkout-page-div-1-orderShipping">
                            <div>
                                <label>Where did you hear About Us?</label>
                                <textarea className='checkout-page-div-1-hearaboutus-textarea' cols="30" rows="10" placeholder='Notes about your order, e.g. special notes for delivery.'></textarea>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="checkout-div-2">
                    <div className='checkout-div-2-textDiv'>
                        <span className='checkout-div-2-text-text'>Total</span>
                        <strong className='checkout-div-2-text-price'>$497.00</strong>
                    </div>
                    <div className='checkout-div-2-textDiv'>
                        <span className='checkout-div-2-text-text'>Shipping</span>
                        <strong className='checkout-div-2-text-price'>New York, US</strong>
                    </div>
                    <div className='checkout-div-2-textDiv'>
                        <span className='checkout-div-2-text-text'>Discount</span>
                        <strong className='checkout-div-2-text-price'>$0.0</strong>
                    </div>
                    <div className='checkout-div-2-textDiv'>
                        <span className='checkout-div-2-text-text'>Shipping Costs</span>
                        <strong className='checkout-div-2-text-price'>$50.00</strong>
                    </div>
                    <div className="checkout-div-1-line-thin">_____________________________________________</div>
                    <div className='checkout-div-2-textDiv-email-transfer'>
                        <span className='checkout-div-2-text-text'>Email Money Transfer</span>
                        <span className='checkout-div-2-way-payement'><img className="checkout-div-2-email-transfer-img" src={interac} alt="interac"/></span>
                    </div>
                    <input className='checkout-div-2-input' type='text' placeholder='Coupon code'/>
                    <button className='checkout-div-2-button-applyCoupon'>Apply Coupon</button>
                    <div className="checkout-div-1-line-thin">_____________________________________________</div>
                    <div className='checkout-div-2-confirmation'>
                        <input className='checkout-div-2-confirmation-checkbox' type='checkbox'/>
                        <label className='checkout-div-2-text-text'>I confirm that my address is 100% correct and WILL NOT hold Top Shelf BC liable if this shipment is sent to an incorrect address. *</label>
                    </div>
                    <div className='checkout-div-2-confirmation'>
                        <input className='checkout-div-2-confirmation-checkbox' type='checkbox'/>
                        <label className='checkout-div-2-text-text'>Sign me up to receive email updates and news (optional)</label>
                    </div>
                    <div className="checkout-div-1-line-thin">_____________________________________________</div>
                    <div className='checkout-div-2-textDiv-point'>
                        <img className="checkout-div-2-point-img" src={dollar} alt="dollar"/><span className='checkout-div-2-text-text'>Your point </span>10.850
                        <span className='checkout-div-2-point-button'>
                            <label class="checkout-div-2-point-button-switch">
                                <input type="checkbox"/>
                                <span class="checkout-div-2-point-button-slider checkout-div-2-point-button-round"></span>
                            </label>
                        </span>
                    </div>
                    <button className='checkout-div-2-button-chekout'>Checkout | $547.00</button>
                    <div className='checkout-div-2-payement-text'>SECURE PAYMENTS PROVIDED BY</div>
                    <div className='checkout-div-2-payement-imgs'>
                        <button className='checkout-div-2-payement-imgs-button1'><img className="checkout-div-2-payement-imgs-img1" src={master_card} alt="master_card"/></button>
                        <button className='checkout-div-2-payement-imgs-button2'><img className="checkout-div-2-payement-imgs-img1" src={visa} alt="visa"/></button>
                        <button className='checkout-div-2-payement-imgs-button3'><img className="checkout-div-2-payement-imgs-img2" src={betcoin} alt="betcoin"/></button>
                        <button className='checkout-div-2-payement-imgs-button4'><img className="checkout-div-2-payement-imgs-img2" src={interac} alt="interac"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}