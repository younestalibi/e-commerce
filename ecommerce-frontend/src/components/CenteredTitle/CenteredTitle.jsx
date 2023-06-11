import React from 'react';
import './CenteredTitle.css';

const CenteredTitle = ({ title }) => {
  return (
    <div className="centered-title">
      <h1>{title}</h1>
      <hr />
    </div>
  );
};

export default CenteredTitle;
