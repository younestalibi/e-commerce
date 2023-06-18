import React, { useState } from 'react';
import './ProductFilter.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import ReactStars from 'react-stars';
const ProductFilter = ({ onFilter }) => {
  const [gender, setGender] = useState('');
  const [rating, setRating] = useState('');

 

  const [value, setValue] = useState({ min: 0, max:1000 });
  console.log(value)
    const ratingChanged = (newRating) => {
        setRating(newRating)
    console.log(newRating)
    }
    const handleFilter = () => {
        onFilter({
          minPrice:value.min,
          maxPrice:value.max,
          gender,
          rating
        });
      };
  return (
    <div className="product-filter">
      <h3 className="filter-heading">Filters</h3>
      <div className="filter-row">
      <label className="filter-label mb-4">Price (min/max):</label>

        {/* <label className="filter-label">Min Price:</label>
        <input
          className="filter-input"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        /> */}
        <InputRange
            maxValue={1000}
            minValue={0}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
      </div>
      <div className="filter-row">
        <label className="filter-label">Gender:</label>
        <div className="radio-buttons ">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="gender-all"
              value=""
              checked={gender === ''}
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label" htmlFor="gender-all">
              All
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="gender-male"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label" htmlFor="gender-male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="gender-female"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label" htmlFor="gender-female">
              Female
            </label>
          </div>
        </div>
      </div>
   

      <div className="filter-row">
        <label className="filter-label">Rating:</label>
        <ReactStars half={true} count={5} onChange={ratingChanged} size={25} value={rating} color2={'rgb(255, 166, 0)'} />                            
      </div>
      <button className="filter-button" onClick={handleFilter}>
        Apply Filters
      </button>
    </div>
  );
};

export default ProductFilter;
