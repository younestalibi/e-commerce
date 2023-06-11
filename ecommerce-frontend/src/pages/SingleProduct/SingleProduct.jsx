import ProductCard from '../../components/ProductCard/ProductCard';
import ProductDisplay from './ProductDisplay';
import './SingleProduct.css'
import image from '../../assets/img.png'
import {AiFillStar,AiOutlineHeart} from 'react-icons/ai'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FilterSlider from '../../components/FilterSlider/FilterSlider';
import { useState } from 'react';
const SingleProduct = () => {
    const popular=[1,2,3,4] 
    const [commentOpen,setCommentOpen]=useState(false)
    const triggerComment=()=>{
        setCommentOpen(!commentOpen)
    }
    return ( 
        <div className='signle-product-container'>
            <div className="single-product-grid-container">
                <div className="single-product-grid-item">
                    <ProductDisplay/>
                    <SectionTitle title='CUSTOMER REVIEWS'/>
                </div>
                <div className="single-product-grid-item">
                    <div className='signle-product-title'>Striped Flutter Sleeve Overlap Collar Pepum Hem Blouse</div>
                    <div className='signle-product-title-review'>
                        <div className='signle-product-title-review-stars'>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>
                        <b>
                            2 reviews
                        </b>
                        <div>
                            <AiOutlineHeart/>
                        </div>
                    </div>
                    <div class="signle-product-pricing">
                        <span class="signle-product-new-price">MAD150</span>
                        <span class="signle-product-old-price">MAD200</span>
                    </div>
                    <div className='signle-product-sold'>
                        <span>42 </span>
                        SOLD
                    </div>
                    {/* <div>
                        <b>About this item</b>
                    </div> */}
                </div>
            </div>
            <div className="single-product-grid-container">
                <div className="single-product-grid-item">
                    
                    <div className='single-product-comments'>
                        <div className='single-product-comments'>
                            <div className='single-product-comments-header'>
                                <div className='single-product-comments-review'>
                                    <b>review <span>2</span></b>
                                    <div>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                    </div>
                                </div>
                                <div onClick={triggerComment} className='single-product-comments-addcomment'>
                                    +Add your review
                                </div>
                            </div>
                            <div>
                                <div className='single-product-comments-chat'>
                                    <div className='single-product-user-comment'>
                                        <img src={image} alt="" />
                                        <div>
                                            <b>name</b>
                                            <div>date</div>
                                        </div>
                                    </div>
                                    <div className='single-product-user-review'>
                                        <div className='single-product-user-review-stars'>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                        </div>
                                        <div className='single-product-user-review-description'>
                                            the comment
                                        </div>
                                    </div>
                                </div>
                                <div className='single-product-comments-chat'>
                                    <div className='single-product-user-comment'>
                                        <img src={image} alt="" />
                                        <div>
                                            <b>name</b>
                                            <div>date</div>
                                        </div>
                                    </div>
                                    <div className='single-product-user-review'>
                                        <div className='single-product-user-review-stars'>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                        </div>
                                        <div className='single-product-user-review-description'>
                                            the comment
                                        </div>
                                    </div>
                                </div>
                                <div className='single-product-comments-chat'>
                                    <div className='single-product-user-comment'>
                                        <img src={image} alt="" />
                                        <div>
                                            <b>name</b>
                                            <div>date</div>
                                        </div>
                                    </div>
                                    <div className='single-product-user-review'>
                                        <div className='single-product-user-review-stars'>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                        </div>
                                        <div className='single-product-user-review-description'>
                                            the comment
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            {commentOpen && (<div class="form-comment-control">
                                <input class="input-comment input-comment-alt" placeholder="Add your comment here!" type="text" />
                                <span class="input-comment-border input-comment-border-alt"></span>
                            </div>)}

                            </div>
                        </div>

                    </div>
                </div>
                <div className="single-product-grid-item">
                    <b>About </b>
                    <p>- Hand wash only and other care instructions</p>
                    <p>- Hand wash only and other care  are on the care label</p>
                    <p>- Hand wash only and other care instructions are instructions on the care label</p>
                    <p>- Hand wash only and other are on the care label</p>
                </div>
            </div>
            <SectionTitle title='YOU MAY LIKE'/>
            <div className='popular-items'>
                {popular.map((e,i)=>(
                    <ProductCard/>
                ))}
            </div>
        </div>
     );
}
 
export default SingleProduct;