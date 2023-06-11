import './FilterSlider.css'
import React, { useState } from 'react';
import { useEffect } from 'react';
// import InputRange from "react-input-range";
// import "react-input-range/lib/css/index.css";

const FilterSlider = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
  
    const handleMinChange = (e) => {
      setMinPrice(Math.min(Number(e.target.value), maxPrice));
    };
  
    const handleMaxChange = (e) => {
      setMaxPrice(Math.max(Number(e.target.value), minPrice));
    };
  
    return (
      <div>
        <input type="number" value={minPrice} onChange={handleMinChange} />
        <div className="slider">
          <div className="thumb" style={{ left: `${minPrice}%` }} />
          <div className="thumb" style={{ left: `${maxPrice}%` }} />
        </div>
        <input type="number" value={maxPrice} onChange={handleMaxChange} />
      </div>
    );
  };
export default FilterSlider;
