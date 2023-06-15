import ProductCard from '../../components/ProductCard/ProductCard';
import ProductDisplay from './ProductDisplay';
import './SingleProduct.css'
import image from '../../assets/img.png'
import {AiFillStar,AiOutlineHeart} from 'react-icons/ai'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FilterSlider from '../../components/FilterSlider/FilterSlider';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSingleProduct } from '../../Provider/Features/Product/productSlice';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import ReactStars from 'react-stars'
import { createComment } from '../../Provider/Features/Comment/commentSlice';

const images = [
    // {
    //   original: 'https://picsum.photos/id/1018/1000/600/',
    //   thumbnail: 'https://picsum.photos/id/1018/250/150/',
    // },
    // {
    //   original: 'https://picsum.photos/id/1015/1000/600/',
    //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
    // },
    // {
    //   original: 'https://picsum.photos/id/1019/1000/600/',
    //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
    // },
    // {
    //   original: 'https://picsum.photos/id/1018/1000/600/',
    //   thumbnail: 'https://picsum.photos/id/1018/250/150/',
    // },
    // {
    //   original: 'https://picsum.photos/id/1015/1000/600/',
    //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
    // },
    // {
    //   original: 'https://picsum.photos/id/1019/1000/600/',
    //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
    // },
    // {
    //   original: 'https://picsum.photos/id/1018/1000/600/',
    //   thumbnail: 'https://picsum.photos/id/1018/250/150/',
    // },
    // {
    //   original: 'https://picsum.photos/id/1015/1000/600/',
    //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
    // },
    // {
    //   original: 'https://picsum.photos/id/1019/1000/600/',
    //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
    // },
  ];

const SingleProduct = () => {
    const popular=[1,2,3,4] 
    const {id}=useParams()
    const {isError,isLoading,isSuccess,message,singleProduct} = useSelector((state) => state.product);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getSingleProduct(id))
    },[])
    console.log(id)
    console.log(singleProduct)
    const [commentOpen,setCommentOpen]=useState(false)
    const triggerComment=()=>{
        setCommentOpen(!commentOpen)
    }
    const [rate, setRate] = useState(1);
    const [content, setContent] = useState('');
    const ratingChanged = (newRating) => {
        // console.log(newRating)
        setRate(newRating)
      }
    const handleComment=(e)=>{
        // console.log(e.target.value)
        setContent(e.target.value)
    }
    const handleSubmit = () => {
        // Perform actions with the rate and content data
        const formData = new FormData();
        formData.append('rate', rate);
        formData.append('content', content);
        formData.append('product_id', id);
        console.log(rate, content);
        dispatch(createComment(formData))
        // Reset form fields
        // setRate(1);
        // setContent('');
      };
       


// console.log(singleProduct.images)
    if(singleProduct){
        for (let i = 0; i < singleProduct.images.length; i++) {
        images.push({
        //   key: i + 1,
          original:`${import.meta.env.VITE_SERVER_URL}/storage/${singleProduct.images[i] && singleProduct.images[i].image_path}`,
        thumbnail:`${import.meta.env.VITE_SERVER_URL}/storage/${singleProduct.images[i] && singleProduct.images[i].image_path}`,
        });
      }
    }
    
      console.log(images)
    return ( 
        <div className='signle-product-container'>
            <div className="single-product-flex-container">
                <div className="single-product-grid-item w-50">
                    {/* <ProductDisplay images={singleProduct&&singleProduct.images}/> */}
                    <ImageGallery thumbnailPosition='left' items={images} />
                    <SectionTitle title='CUSTOMER REVIEWS'/>
                </div>
                <div className="single-product-grid-item">
                    {/* ------------------- here a ranaaa ---------- */}
                    <div className='signle-product-title'>{singleProduct&&singleProduct.name}</div>
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
                        <span class="signle-product-new-price">{`${singleProduct&&singleProduct.price}MAD`}</span>
                        {/* <span class="signle-product-old-price">MAD200</span> */}
                    </div>
                    <div className='signle-product-sold'>
                        <span>42 </span>
                        SOLD
                    </div>
                    {/* <div>
                        <b>About this item</b>
                    </div> */}
                    {/* ------------------- here a ranaaa ---------- */}
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
                            {commentOpen && (
                                <div>
                                    <div class="form-comment-control">
                                        <input class="input-comment input-comment-alt" 
                                        placeholder="Add your comment here!" 
                                        type="text" 
                                        value={content}
                                        onChange={handleComment}
                                        />
                                        <span class="input-comment-border input-comment-border-alt"></span>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <ReactStars count={5} onChange={ratingChanged} size={24} value={rate} color2={'#ffd700'} />                            
                                        <button className="comment-button" onClick={handleSubmit}>
                                            Comment
                                        </button>
                                    </div>
                                </div>
                                
                            )}

                            </div>
                        </div>

                    </div>
                </div>
                <div className="single-product-grid-item">
                    <b>About </b>
                    <p>{singleProduct&&singleProduct.description}</p>
                </div>
            </div>
            <SectionTitle title='YOU MAY LIKE'/>
            <div className='popular-items'>
                {popular.map((e,i)=>(
                    // <ProductCard/>
                    <div>asdf</div>
                ))}
            </div>
        </div>
     );
}
 
export default SingleProduct;