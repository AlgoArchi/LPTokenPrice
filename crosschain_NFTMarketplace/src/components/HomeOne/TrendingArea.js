import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import { Link } from "react-router-dom";

const options = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: false,
  dots: false,
  autoplay: true,
  smartSpeed: 500,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const TrendingArea = () => {
  const [display, setDisplay] = useState(false);
  const [, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
  }, []);

  return (
    <>
      <div className='trending-area pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-7'>
              <div className='section-title'>
                <h2>Trending Artwork</h2>
              </div>
            </div>

            <div className='col-lg-4 col-md-5'>
              <div className='trending-btn text-end'>
                <Link to='/item-details'>
                  <a className='default-btn border-radius-5' href={() => false}>Explore More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='trending-slider  pt-45'>
            {display ? (
              <OwlCarousel {...options}>
                <div className='trending-item'>
                  <div className='trending-img'>
                    <Link to='/item-details'>
                      <a href={() => false}>
                        <img
                          src={require('../../assets/imgs/trending/trending-img1.png')}
                          alt='Images'
                        />
                      </a>
                    </Link>

                    <div className='trending-user'>
                      <Link to='/author-profile'>
                        <a className='trending-user-option' href={() => false}>
                          <img
                            src={require('../../assets/imgs/trending/trending-user1.jpg')}
                            alt='Images'
                          />
                          <span>Created by @Farnil</span>
                        </a>
                      </Link>
                    </div>
                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                    <div className='trending-title'>
                      <span>100 ETH 12/14</span>
                      <h3>Bid 80 ETH</h3>
                    </div>
                  </div>

                  <div className='content'>
                    <h3>
                      <Link to='/item-details'>
                        <a href={() => false}>Les Immortal's</a>
                      </Link>
                    </h3>
                    <span className="text-danger">
                      <i className='ri-heart-line'></i> 340
                    </span>
                  </div>
                </div>

                <div className='trending-item'>
                  <div className='trending-img'>
                    <Link to='/item-details'>
                      <a href={() => false}>
                        <img
                          src={require('../../assets/imgs/trending/trending-img2.png')}
                          alt='Images'
                        />
                      </a>
                    </Link>

                    <div className='trending-user'>
                      <Link to='/author-profile'>
                        <a className='trending-user-option' href={() => false}>
                          <img
                            src={require('../../assets/imgs/trending/trending-user2.jpg')}
                            alt='Images'
                          />
                          <span>Created by @Anvi</span>
                        </a>
                      </Link>
                    </div>
                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                    <div className='trending-title'>
                      <span>110 ETH 12/14</span>
                      <h3>Bid 90 ETH</h3>
                    </div>
                  </div>

                  <div className='content'>
                    <h3>
                      <Link to='/item-details'>
                        <a href={() => false}>Industrial Revolution</a>
                      </Link>
                    </h3>
                    <span className="text-danger">
                      <i className='ri-heart-line'></i> 365
                    </span>
                  </div>
                </div>

                <div className='trending-item'>
                  <div className='trending-img'>
                    <Link to='/item-details'>
                      <a href={() => false}>
                        <img
                          src={require('../../assets/imgs/trending/trending-img3.png')}
                          alt='Images'
                        />
                      </a>
                    </Link>

                    <div className='trending-user'>
                      <Link to='/author-profile'>
                        <a className='trending-user-option' href={() => false}>
                          <img
                            src={require('../../assets/imgs/trending/trending-user3.jpg')}
                            alt='Images'
                          />
                          <span>Created by @Anvi</span>
                        </a>
                      </Link>
                    </div>
                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                    <div className='trending-title'>
                      <span>120 ETH 12/14</span>
                      <h3>Bid 70 ETH</h3>
                    </div>
                  </div>

                  <div className='content'>
                    <h3>
                      <Link to='/item-details'>
                        <a href={() => false}>Walking on Air</a>
                      </Link>
                    </h3>
                    <span className="text-danger">
                      <i className='ri-heart-line'></i> 190
                    </span>
                  </div>
                </div>

                <div className='trending-item'>
                  <div className='trending-img'>
                    <Link to='/item-details'>
                      <a href={() => false}>
                        <img
                          src={require('../../assets/imgs/trending/trending-img4.png')}
                          alt='Images'
                        />
                      </a>
                    </Link>

                    <div className='trending-user'>
                      <Link to='/author-profile'>
                        <a className='trending-user-option' href={() => false}>
                          <img
                            src={require('../../assets/imgs/trending/trending-user4.jpg')}
                            alt='Images'
                          />
                          <span>Created by @Aiden</span>
                        </a>
                      </Link>
                    </div>

                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                    <div className='trending-title'>
                      <span>100 ETH 12/14</span>
                      <h3>Bid 80 ETH</h3>
                    </div>
                  </div>

                  <div className='content'>
                    <h3>
                      <Link to='/item-details'>
                        <a href={() => false}>Tranquility (Modal)</a>
                      </Link>
                    </h3>
                    <span className="text-danger">
                      <i className='ri-heart-line'></i> 204
                    </span>
                  </div>
                </div>

                <div className='trending-item'>
                  <div className='trending-img'>
                    <Link to='/item-details'>
                      <a href={() => false}>
                        <img
                          src={require('../../assets/imgs/trending/trending-img5.png')}
                          alt='Images'
                        />
                      </a>
                    </Link>
                    <div className='trending-user'>
                      <Link to='/author-profile'>
                        <a className='trending-user-option' href={() => false}>
                          <img
                            src={require('../../assets/imgs/trending/trending-user5.jpg')}
                            alt='Images'
                          />
                          <span>Created by @Jekob</span>
                        </a>
                      </Link>
                    </div>

                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                    <div className='trending-title'>
                      <span>105 ETH 12/14</span>
                      <h3>Bid 60 ETH</h3>
                    </div>
                  </div>

                  <div className='content'>
                    <h3>
                      <Link to='/item-details'>
                        <a href={() => false}>To Infinity</a>
                      </Link>
                    </h3>
                    <span className="text-danger">
                      <i className='ri-heart-line'></i> 204
                    </span>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingArea;
