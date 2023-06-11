import './Footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer(){
	return(
		<div>
			<footer className="footer-container">
				<div className="footer-wrapper">
					<div className="footer-row">
						<div className="footer-col">
							<h4>company info</h4>
							<ul>
								<li><a href="#">about caftani's closet</a></li>
								<li><a href="#">Social Responsibility</a></li>
								<li><a href="#">Affiliate</a></li>
								<li><a href="#">Fashion Blogger</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>helps & support</h4>
							<ul>
								<li><a href="#">Shipping Info</a></li>
								<li><a href="#">Returns</a></li>
								<li><a href="#">How to Order</a></li>
								<li><a href="#">How to Track</a></li>
								<li><a href="#">Size Chart</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>customer care</h4>
							<ul>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">Payment</a></li>
								<li><a href="#">Bonus Point</a></li>
								<li><a href="#">Notices</a></li>
							</ul>
						</div>
					<div className='footer-media'>
						<div className=" social">
							<h4>Socials</h4>
							<div className="social-links">
								<a href="#"><i className="fab fa-facebook-f"></i></a>
								<a href="#"><i className="fab fa-twitter"></i></a>
								<a href="#"><i className="fab fa-instagram"></i></a>
								<a href="#"><i className="fab fa-linkedin-in"></i></a>
							</div>
						</div>
						<div className="">
							<h4>Platforms</h4>
							<div className="social-links">
								<a href="#"><i className="fa-brands fa-android"></i></a>
								<a href="#"><i className="fa-brands fa-apple"></i></a>
							</div>
						</div>
					</div>
						<div className="footer-sign-up">
							<h4>SIGN UP FOR Laura's Closet  STYLE NEWS</h4>
							<input type="text" placeholder="Your email"/>
							<button type='submit' className="button">subscribe</button>
							<span className="span">By clicking the SUBSCRIBE button, you are agreeing to our <a href="#">Privacy & Cookie Policy</a></span>
						</div>
					</div>
		
					<div className="footer-row">
						<div className='footer-info-wrapper'>
							<div className="footer-info">
								<ul>
									<li><a href="#">©2010-2022 Caftani's Closet All Rights Reserved</a></li>
									<div className="footer-links">
										<li>
											<a href="#">Privacy Center</a> <span>|</span>
											<a href="#">Privacy & Cookie Policy</a><span>|</span>
											<a href="#">Manage Cookies</a><span>|</span><br/>
											<a href="#">Terms & Conditions</a> <span>|</span>
											<a href="#">Copyright Notice</a> <span>|</span>
											<a href="#">Imprint</a>
										</li>
									</div>
								</ul>
							</div>
							<div className="accept">
								<h3>We accept</h3>
								<div className="acceptedPAy">
									<i className="fa-brands fa-cc-mastercard"></i>
									<i className="fa-brands fa-cc-paypal"></i>
									<i className="fa-brands fa-ebay"></i>
									<i className="fa-brands fa-google-pay"></i>
									<i className="fa-brands fa-cc-discover"></i>
									<i className="fa-brands fa-cc-apple-pay"></i> <br/>
									<i className="fa-brands fa-cc-amex"></i>
									<i className="fa-brands fa-cc-amazon-pay"></i>
									<i className="fa-brands fa-alipay"></i>
									<i className="fa-brands fa-bitcoin"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}