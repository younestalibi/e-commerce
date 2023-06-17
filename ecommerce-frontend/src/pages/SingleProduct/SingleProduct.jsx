import ProductCard from '../../components/ProductCard/ProductCard';
import ProductDisplay from './ProductDisplay';
import './SingleProduct.css'
import image from '../../assets/img.png'
import {AiFillStar,AiOutlineHeart,AiOutlineComment,AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'
import {CiMenuKebab} from 'react-icons/ci'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FilterSlider from '../../components/FilterSlider/FilterSlider';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSingleProduct } from '../../Provider/Features/Product/productSlice';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import ReactStars from 'react-stars'
import { createComment, deleteComment, getComments } from '../../Provider/Features/Comment/commentSlice';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import { formatDate } from '../../utils/formatDate';
import { NearestNumber } from '../../utils/NearestNumber';



const SingleProduct = () => {
    const images=[]
    const divRef = useRef(null);
    const popular=[1,2,3,4] 
    const {id}=useParams()
    const userState= useSelector((state) => state.auth);
    const {isError,isLoading,isSuccess,message,singleProduct} = useSelector((state) => state.product);
    const commentState= useSelector((state) => state.comment);
    const totalRate= commentState.comments.reduce((accumulator, currentNumber) => accumulator + parseInt(currentNumber.rate), 0);
    const averageRate =NearestNumber(totalRate / commentState.comments.length);
    console.log(averageRate)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getSingleProduct(id))
        dispatch(getComments(id))
    },[])
    const specificDivRef = useRef(null);
    const [commentOpen,setCommentOpen]=useState(false)
    const triggerComment=()=>{
        setCommentOpen(!commentOpen)
        // if (specificDivRef.current) {
        //     specificDivRef.current.scrollIntoView({ behavior: 'smooth' });
        // }
        if (specificDivRef.current ) {
            // specificDivRef.current.scrollIntoView({ behavior: 'smooth' });
            specificDivRef.current.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo(0, window.innerHeight);
          }
    }
    const [rate, setRate] = useState(1);
    const [content, setContent] = useState('');
    const ratingChanged = (newRating) => {
        setRate(newRating)
        // console.log(typeof(newRating))
      }
    const handleComment=(e)=>{
        setContent(e.target.value)
    }
    const handleSubmit = () => {
        // Perform actions with the rate and content data
        const formData = new FormData();
        formData.append('rate', rate);
        formData.append('content', content);
        formData.append('product_id', id);
        dispatch(createComment(formData))
      };
    useEffect(()=>{
        setRate(1);
        setContent('');
        if (divRef.current) {
            divRef.current.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
        }
    },[commentState.comment])
       


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

    const [deleteId,setDeleteId]=useState(null)
    const [open, setOpen] = useState(false);
    const showModal = (e) => {
        setOpen(true);
        setDeleteId(e)
    };
    const hideModal = () => {
      setOpen(false);
    };
    const deleteRecord = (e) => {
        console.log('delete record')
        console.log('done ',deleteId)
        dispatch(deleteComment(deleteId))
        // dispatch(resetStateComment())
        setOpen(false);
        setTimeout(() => {
        dispatch(getComments(id));
        }, 100);
    };

    //   function DateList( date ) {
    //     const formatDate = (dates) => {
    //       const formattedDate = useFormattedDate(dates);
    //       return formattedDate;
    //     };
    //     return formatDate(date)
    // }
    return ( 
        <div className='signle-product-container'>
            <div className="single-product-flex-container">
                <div className="single-product-grid-item ">
                    {/* <ProductDisplay images={singleProduct&&singleProduct.images}/> */}
                    <ImageGallery thumbnailPosition='left' items={images} />
                    <SectionTitle title='CUSTOMER REVIEWS'/>
                </div>
                <div className="single-product-grid-item">
                    {/* ------------------- here a ranaaa ---------- */}
                    <div className='signle-product-title'>{singleProduct&&singleProduct.name}looong nalasdjf;lajsdf;lajsd naame proejct hwll owrold</div>
                    <div className='signle-product-title-review'>
                        {/* <div className='signle-product-title-review-stars'>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div> */}
                        <div>
                        <ReactStars  edit={false} count={5} size={35} value={averageRate} color2={'rgb(255, 166, 0)'} />                            
                        </div>
                        <div>
                            <b><span>{commentState.comments.length}</span> review</b>
                        </div>
                        <div className='d-flex align-items-center product-favorites'>
                            <AiOutlineHeart/>
                            <span ><b>Add to favorites</b></span>
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
                                    <b>review <span>{commentState.comments.length}</span></b>
                                    <div>
                                    
                                        {/* {Array.from({length:averageRate}).map((e,i)=>(
                                            <span key={i}><AiFillStar/></span>
                                        ))} */}
                                        <ReactStars  edit={false} count={5} size={25} value={averageRate} color2={'rgb(255, 166, 0)'} />                            
                                    </div>
                                </div>
                                <div onClick={triggerComment} className='single-product-comments-addcomment'>
                                    +Add your review
                                </div>
                            </div>
                            <div className='comments-box-container bg-light' ref={divRef}>
                                {
                                commentState.comments.length>0 ? commentState.comments.map((e,i)=>(
                                    <div key={i} className='single-product-comments-chat'>
                                    <div className='single-product-user-comment'>
                                        <img src={`${import.meta.env.VITE_SERVER_URL}/images/${e.user.image}`} alt="" />
                                        <div>
                                            <b>{e.user.name}{e.user.id}</b>
                                            <div>{formatDate(e.created_at)}</div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div className='single-product-user-review'>
                                            <div className='single-product-user-review-stars'>
                                                {/* {Array.from({length:e.rate}).map((e,i)=>(
                                                    <span key={i}><AiFillStar/></span>
                                                ))} */}
                                                <ReactStars  edit={false} count={5} size={25} value={e.rate} color2={'rgb(255, 166, 0)'} />                            
                                            </div>
                                            <div className='single-product-user-review-description'>
                                                {e.content}
                                            </div>
                                        </div>
                                        {userState.user.id===e.user.id&&
                                        <div className='p-1 d-flex flex-column align-items-center h-100 justify-content-around'>    
                                        <button
                                         className="ms-3 fs-3 text-danger bg-transparent border-0"
                                         onClick={() => alert('edite')}
                                        >
                                            <BiEdit />
                                        </button>
                                        <button
                                         className="ms-3 fs-3 text-danger bg-transparent border-0"
                                         onClick={() => showModal(e.id)}
                                        >
                                            <AiFillDelete  />
                                        </button>
                                        
                                    </div>
                                        }
                                        
                                    </div>
                                    </div>
                                ))
                                :
                                <div className='no-comment-container text-muted'>
                                    <AiOutlineComment size={40}/> <span className='fw-bold fs-5 mx-2'>share your review</span>
                                </div>
                                }
                                {/* {commentState.comments.map((e,i)=>)} */}
                            </div>
                            <div ref={specificDivRef}>
                            {commentOpen && (
                                <div >
                                    <div className="form-comment-control">
                                        <input className="input-comment input-comment-alt" 
                                        placeholder="Add your comment here!" 
                                        type="text" 
                                        value={content}
                                        onChange={handleComment}
                                        />
                                        <span className="input-comment-border input-comment-border-alt"></span>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <ReactStars half={false} count={5} onChange={ratingChanged} size={25} value={rate} color2={'rgb(255, 166, 0)'} />                            
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
 
export default SingleProduct;