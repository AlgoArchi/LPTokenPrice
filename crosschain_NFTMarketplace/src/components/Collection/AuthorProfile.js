import React from 'react';
import { Link } from "react-router-dom";

const AuthorProfile = () => {
  return (
    <>
      <div className='author-profile-sidebar  mr-20'>
        <div className='author-user'>
          <img
            src={require('../../assets/imgs/collections/collection-profile.jpg')}
            alt='Images'
          />
          <i className='ri-check-line'></i>
        </div>

        <h3>
          <Link to='/author-profile'>
            <a href={() => false}>Olivia Jenar</a>
          </Link>
        </h3>
        <span>@Jenar</span>
        <p>
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary
        </p>
        <div className='sp-title'>
          0x76669f...a0e9ca52 <i className='ri-folders-line'></i>
        </div>
        <div className='author-content'>
          <div className='content-left'>
            <span>Followers</span>
            <h4>2941</h4>
          </div>

          <div className='content-right'>
            Follow
            <ul className='author-social'>
              <li>
                <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                  <i className='ri-facebook-fill'></i>
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                  <i className='ri-instagram-fill'></i>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                  <i className='ri-twitter-fill'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorProfile;
