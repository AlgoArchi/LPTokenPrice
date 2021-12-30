import React from 'react';

const PageBanner = ({ bannerHeading, parentTitle, pageTitle,bg }) => {
  return (
    <>
      <div className={`inner-banner ${bg}`}>
        <div className='container col-lg-10'>
          <div className='inner-title'>
            <h3>{bannerHeading}</h3>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
