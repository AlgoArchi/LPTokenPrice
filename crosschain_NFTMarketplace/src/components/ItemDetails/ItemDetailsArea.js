import React from 'react';
import ItemDetailsDescription from './ItemDetailsDescription';
import ItemDetailsHistory from './ItemDetailsHistory';
import ItemDetailsUser from './ItemDetailsUser';

const ItemDetailsArea = () => {
  return (
    <>
      <div className='item-details-area pt-100 pb-70'>
        <div className='container row justify-content-md-center'>
          <div className='row col-xxl-10'>
            <div className='col-xl-7'>
              <div className='item-details-left-side pr-20'>
                <div className='item-details-img'>
                  <img
                    src={require('../../assets/imgs/Item-details/Item-details1.png')}
                    alt='Images'
                  />
                  <span>
                    <i className='ri-heart-line'></i> 340
                  </span>
                </div>

                <ItemDetailsHistory />
              </div>
            </div>

            <div className='col-xl-5'>
              <div className='item-details-dsce'>
                <ItemDetailsDescription />

                <ItemDetailsUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsArea;
