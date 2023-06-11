import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeFilter = ({ min, max, onChange }) => {
  const [range, setRange] = useState([min, max]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
    onChange(newRange);
  };

  return (
    <div className="range-filter">
      <Slider
        min={min}
        max={max}
        range
        value={range}
        onChange={handleRangeChange}
      />
      <div className="range-values">
        <span>${range[0]}</span>
        <span>${range[1]}</span>
      </div>
    </div>
  );
};

export default RangeFilter;
