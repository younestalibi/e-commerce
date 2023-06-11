import './OrderComplete.css';
import dress from '../../assets/Shopping_Cart/dress.jpg'

export default function OrderComplete(){
    return(
        <div>
            <div className="OrderComplete-page-nav">
                <a className='OrderComplete-page-shopping-cart-icon'><i class="fa-solid fa-check"></i></a>
                <strong className='OrderComplete-page-shopping-cart-text'>Shopping Cart</strong>
                
                <strong className='OrderComplete-page-line1'>________</strong>

                <a className='OrderComplete-page-checkout-icon'><i class="fa-solid fa-check"></i></a>
                <strong className='OrderComplete-page-checkout-text'>Checkout</strong>

                <strong className='OrderComplete-page-line2'>________</strong>

                <a className='OrderComplete-page-order-complete-icon'><i class="fa-solid fa-cart-shopping"></i></a>
                <strong className='OrderComplete-page-order-complete-text'>Order Complete</strong>
            </div>

            <div className='OrderComplete-page-container'>

                <div className='OrderComplete-page-div-1'>
                    <strong>Your Order</strong>
                    <a className='OrderComplete-page-div-1-icon'><i class="fa-solid fa-check"></i></a>
                    <strong className="OrderComplete-page-div-1-paid">Paid</strong>
                    <strong className="OrderComplete-page-div-1-line">______________________________________________________________________________________________________________________________________________________</strong>
                </div>

                <div className='OrderComplete-page-div-2'>
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
                </div>

                <div className='OrderComplete-page-div-3'>
                    <strong>TOTAL</strong>
                    <strong className="OrderComplete-page-div-3-total-money">$497.00</strong>
                    <strong className="OrderComplete-page-div-1-line">______________________________________________________________________________________________________________________________________________________</strong>
                </div>

                <div className='OrderComplete-page-div-4'>
                    
                    <div className='OrderComplete-page-div-4-leftDiv'>
                        <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Shipping</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>New York, US</strong>
                        </div>
                        <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Shipping Options</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>Same-Day Dispatching</strong>
                        </div>
                        <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Email Money Transfer</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>Interac</strong>
                        </div>
                    </div>

                    <div className='OrderComplete-page-div-4-rightDiv'>
                        <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Subtotal</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>$497.00</strong>
                        </div>
                        <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Discount</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>$0.0</strong>
                        </div>
                        <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Shipping Costs</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>$50.00</strong>
                        </div>
                        <div className='OrderComplete-page-div-4-leftDiv-divs'>
                            <strong className='OrderComplete-page-div-4-leftDiv-textLeft'>Point</strong>
                            <strong className='OrderComplete-page-div-4-leftDiv-textRight'>- $250</strong>
                        </div>
                        <strong className="OrderComplete-page-div-1-line">_______________________________________________________________________</strong>
                        <div className='OrderComplete-page-div-4-rightDev-totalDiv'>
                            <strong>TOTAL</strong>
                            <strong className="OrderComplete-page-div-3-total-money">$297.00</strong>
                        </div>
                        <strong className="OrderComplete-page-div-1-line">_______________________________________________________________________</strong>
                    </div>

                </div>
                <div className='OrderComplete-page-div-5'><strong className="OrderComplete-page-div-1-line">______________________________________________________________________________________________________________________________________________________</strong></div>
                <div className='OrderComplete-page-div-6'>New Order, Click button bellow</div>
                <div className='OrderComplete-page-div-7'><button className='OrderComplete-page-div-7-button'>Shop Now</button></div>

            </div>
        </div>
    )
}