import React from 'react';

const Pagination = () => {
  return (
    <>
      <div className='col-lg-12 col-md-12 text-center'>
        <div className='pagination-area'>
          <a href={() => false} className='prev page-numbers'>
            <i className='ri-arrow-left-s-line'></i>
          </a>

          <span className='page-numbers current' aria-current='page'>
            1
          </span>
          <a href={() => false} className='page-numbers'>
            2
          </a>
          <a href={() => false} className='page-numbers'>
            3
          </a>

          <a href={() => false} className='next page-numbers'>
            <i className='ri-arrow-right-s-line'></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Pagination;
