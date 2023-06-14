import React, { useState } from 'react';
import './Pagination.css';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    const minPage = Math.max(1, currentPage - 2);
    const maxPage = Math.min(totalPages, minPage + 4);

    for (let i = minPage; i <= maxPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={i === currentPage ? 'active' : ''}
          onClick={() => handleClick(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <ul className="pagination">
        <li
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => {
            if (currentPage !== 1) {
              handleClick(currentPage - 1);
            }
          }}
        >
          <BiLeftArrow />
        </li>
        {renderPageNumbers()}
        <li
          className={`next ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => {
            if (currentPage !== totalPages) {
              handleClick(currentPage + 1);
            }
          }}
        >
          <BiRightArrow />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
