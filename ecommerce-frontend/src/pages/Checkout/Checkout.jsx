import { useState } from 'react';
import './Checkout.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import interac from '../../assets/Shopping_Cart/interac.png'
import betcoin from '../../assets/Shopping_Cart/betcoin.png'
import master_card from '../../assets/Shopping_Cart/master_card.png'
import dollar from '../../assets/Shopping_Cart/dollar.png'
import visa from '../../assets/Shopping_Cart/visa.avif'
import dress from '../../assets/Shopping_Cart/dress.jpg'
import { Link, useNavigate } from 'react-router-dom';
export default function Checkout(){
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [cityError, setCityError] = useState('');
    const [zipCodeError, setZipCodeError] = useState('');

    const navigate=useNavigate()
    const handleSubmit = (e) => {
    e.preventDefault();
    

   

        // Reset the previous error messages
        setFirstNameError('');
        setLastNameError('');
        setEmailError('');
        setPhoneError('');
        setAddressError('');
        setCityError('');
        setZipCodeError('');

        // Perform form validation
        let isValid = true;

        if (!firstName) {
            setFirstNameError('First Name is required');
            isValid = false;
        }

        if (!lastName) {
            setLastNameError('Last Name is required');
            isValid = false;
        }

        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid Email');
            isValid = false;
        }

        if (!phone) {
            setPhoneError('Phone Number is required');
            isValid = false;
        }

        if (!address) {
            setAddressError('Address is required');
            isValid = false;
        }

        if (!city) {
            setCityError('City is required');
            isValid = false;
        }

        if (!zipCode) {
            setZipCodeError('Zip Code is required');
            isValid = false;
        }

        // If any field is invalid, stop form submission
        if (!isValid) {
            return;
        }

        // If all fields are valid, proceed with form submission
        console.log('Form submitted!');
        navigate('/order-complete', {
            state: {
              firstName,
              lastName,
              email,
              phone,
              address,
              city,
              zipCode
            }
        });
        // Add your form submission logic here
    };

    const isValidEmail = (email) => {
    // Simple email validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
    };

// }
    return(
        <div>
            {/* <div className="checkout-page-nav">
                <a className='checkout-page-shopping-cart-icon'><i class="fa-solid fa-check"></i></a>
                <strong className='checkout-page-shopping-cart-text'>Shopping Cart</strong>
                
                <strong className='checkout-page-line1'>________</strong>

                <a className='checkout-page-checkout-icon'><i class="fa-solid fa-cart-shopping"></i></a>
                <strong className='checkout-page-checkout-text'>Checkout</strong>

                <strong className='checkout-page-line2'>________</strong>

                <a className='checkout-page-order-complete-icon'><i class="fa-solid fa-cart-shopping"></i></a>
                <strong className='checkout-page-order-complete-text'>Order Complete</strong>
            </div> */}

            <div className="checkout-page-container">
                <div className="checkout-page-div-1">
                    <strong>Shipping</strong>
                    <strong className="checkout-page-div-1-number-of-products">(3)</strong>
                    <div className="checkout-page-div-1-line">_______________________________________________________________________________________</div>
                    <form className="checkout-form needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="row">
                    <div className="form-group col">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className={`form-control my-3 ${firstNameError ? 'is-invalid' : firstName ? 'is-valid' : ''}`}
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) =>{ setFirstName(e.target.value);setFirstNameError("")}}
                        required
                    />
                    {firstNameError && <div className="invalid-feedback">{firstNameError}</div>}
                    </div>
                    <div className="form-group col">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className={`form-control my-3 ${lastNameError ? 'is-invalid' : lastName ? 'is-valid' : ''}`}
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) =>{ setLastName(e.target.value);setLastNameError("")}}
                        required
                    />
                    {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                    className={`form-control my-3 ${emailError ? 'is-invalid' :email?'is-valid':'' }`}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) =>{ setEmail(e.target.value);setEmailError('')}}
                    required
                    />
                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                    className={`form-control my-3 ${phoneError ? 'is-invalid' : phone ? 'is-valid' : ''}`}
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) =>{ setPhone(e.target.value);setPhoneError("")}}
                    required
                    />
                    {phoneError && <div className="invalid-feedback">{phoneError}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                    className={`form-control my-3 ${addressError ? 'is-invalid' : address ? 'is-valid' : ''}`}
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) =>{ setAddress(e.target.value);setAddressError("")}}
                    required
                    />
                    {addressError && <div className="invalid-feedback">{addressError}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                    className={`form-control my-3 ${cityError ? 'is-invalid' : city ? 'is-valid' : ''}`}
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) =>{ setCity(e.target.value);setCityError('')}}
                    required
                    />
                    {cityError && <div className="invalid-feedback">{cityError}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                    className={`form-control my-3 ${zipCodeError ? 'is-invalid' : zipCode ? 'is-valid' : ''}`}
                    type="number"
                    id="zipCode"
                    value={zipCode}
                    onChange={(e) =>{ setZipCode(e.target.value);setZipCodeError('')}}
                    required
                    />
                    {zipCodeError && <div className="invalid-feedback">{zipCodeError}</div>}
                </div>
                <button className="submit-button btn btn-outline-info" type="submit">
                    Place Order
                </button>
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
                        <input onChange={handleCheckboxChange} className='checkout-div-2-confirmation-checkbox' type='checkbox'/>
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
                    <button className='checkout-div-2-button-chekout' onClick={handleSubmit} >Checkout | $547.00</button>
                    {/* <Link className='checkout-div-2-button-chekout' to='/order-complete'> Checkout | $547.00</Link> */}
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