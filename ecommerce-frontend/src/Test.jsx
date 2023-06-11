import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

function Test() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    title: 'Product Title',
    size: 'M',
    color: 'Blue',
    price: 19.99,
    images: [
      'https://api.manifest-ai.com/storage/abouts/May2023/LmVuznbNkf5w7a6Y243n.jpg',
      'https://api.manifest-ai.com/storage/abouts/May2023/LmVuznbNkf5w7a6Y243n.jpg',
      'https://api.manifest-ai.com/storage/abouts/May2023/LmVuznbNkf5w7a6Y243n.jpg',
      'https://api.manifest-ai.com/storage/abouts/May2023/LmVuznbNkf5w7a6Y243n.jpg',
      'https://api.manifest-ai.com/storage/abouts/May2023/LmVuznbNkf5w7a6Y243n.jpg',
      // Add more thumbnail image paths here
    ],
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCheckout = () => {
    // Perform checkout logic here
    console.log(`Checkout: Quantity: ${quantity}`);
  };

  return (
    <div className="product-item">
      <div className="product-images w-25">
      <ImageGallery items={images} />;

        {/* <img src={product.images[selectedImage]} alt="Product" className="main-image" /> */}
        {/* <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`thumbnail-image ${index === selectedImage ? 'active' : ''}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div> */}
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>Size: {product.size}</p>
        <p>Color: {product.color}</p>
        <p>Price: ${product.price}</p>
        <div className="quantity">
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
        </div>
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Test;
