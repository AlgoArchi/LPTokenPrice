import React from 'react';
import { Link } from "react-router-dom";

const InvolvedArea = () => {
  return (
    <>
      <div className='involved-area-two pt-100 pb-70'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Get Involved</h2>
          </div>

          <div className='row pt-45 justify-content-center'>
            <div className='col-lg-4 col-6'>
              <div className='involved-card'>
                <div className='icon'>
                  <img src={require('../../assets/imgs/forum.png')} alt='' />
                </div>
                <h3>
                  <b>Join Our Community</b>
                </h3>
                <ul className='social-link'>
                  <li>
                    <a href='https://www.google.com/' target='_blank' rel="noreferrer">
                      <i className='ri-telegram-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                      <i className='ri-twitter-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                      <i className='ri-instagram-fill'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-4 col-6'>
              <div className='involved-card'>
                <div className='icon'>
                <img src={require('../../assets/imgs/color_lens.png')} alt='' />
                </div>
                <h3>
                  <b>Become A Creator</b>
                </h3>
                <Link to='/register'>
                  <a className='default-btn' href={() => false}>
                    Register
                  </a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-6'>
              <div className='involved-card'>
                <div className='icon'>
                <img src={require('../../assets/imgs/emoji_people.png')} alt='' />
                </div>
                <h3>
                  <b>Reach Out To Our Team</b>
                </h3>
                <Link to='/contact'>
                  <a className='default-btn' href={() => false}>
                    Contact Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvolvedArea;
