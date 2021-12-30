import { useState } from 'react';
import SearchModal from './SearchModal';
import { Link } from 'react-router-dom';

const NavbarTwo = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleWallet = () => {
    setShowWallet(!showWallet);
  };

  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  //sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== 'undefined') {
    // browser code
    window.addEventListener('scroll', showStickyMenu);
  }
  return (
    <>
      <div className={sticky ? 'is-sticky navbar-area' : 'navbar-area'}>
        <div className='mobile-responsive-nav'>
          <div className='container-fluid'>
            <div className='mobile-responsive-menu'>
              <div
                onClick={() => toggleMenu()}
                className='hamburger-menu hamburger-two'
              >
                {showMenu ? (
                  <i className='ri-close-line'></i>
                ) : (
                  <i className='ri-menu-line'></i>
                )}
              </div>
              <div className='logo'>
                <Link to='/'>
                  <a href={() => false}>
                    <img src={require('../../assets/imgs/logo-2.png')} alt='logo' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            showMenu ? 'show desktop-nav nav-area' : 'desktop-nav nav-area'
          }
        >
          <div className='container-fluid'>
            <nav className='navbar navbar-expand-md navbar-light '>
              <Link to='/'>
                <a className='navbar-brand'>
                  <img src={require('../../assets/imgs/logo-2.png')} alt='Logo' />
                </a>
              </Link>

              <div className='nav-widget-form nav-widget-form-bg'>
                <form className='search-form'>
                  <input
                    type='search'
                    className='form-control'
                    placeholder='Search items, Creators '
                  />
                  <button type='submit'>
                    <i className='ri-search-line'></i>
                  </button>
                </form>
              </div>

              <div
                className='collapse navbar-collapse mean-menu'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a href='#' className='nav-link'>
                      Home
                      <i className='ri-arrow-down-s-line'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link to='/'>
                          <a className='nav-link'>Home One</a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/index-2'>
                          <a className='nav-link'>Home Two</a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/index-3'>
                          <a className='nav-link'>Home Three</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className='nav-item'>
                    <a href='#' className='nav-link '>
                      Discover
                      <i className='ri-arrow-down-s-line'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link to='/auction'>
                          <a className='nav-link'>Live Auction</a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/discover-1'>
                          <a className='nav-link'>Discover Style One</a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/discover-2'>
                          <a className='nav-link'>Discover Style Two</a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/item-details'>
                          <a className='nav-link'>Item Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className='nav-item'>
                    <Link to='/activity'>
                      <a className='nav-link'>Activity</a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <a href='#' className='nav-link'>
                      Pages
                      <i className='ri-arrow-down-s-line'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link to='/collection'>
                          <a className='nav-link'>Collection</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          to='/create-collection'
                         
                        >
                          <a className='nav-link'>Create Collection</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link to='/authors'>
                          <a className='nav-link'>Authors</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link to='/author-profile'>
                          <a className='nav-link'>Author Profile</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link to='/team'>
                          <a className='nav-link'>Team</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link to='/testimonials'>
                          <a className='nav-link'>Testimonials</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <a href='#' className='nav-link'>
                          User
                          <i className='ri-arrow-down-s-line'></i>
                        </a>
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <Link to='/login'>
                              <a className='nav-link'>Log In</a>
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link to='/register'>
                              <a className='nav-link'>Register</a>
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link
                              to='/forgot-password'
                             
                            >
                              <a className='nav-link'>Forgot Password</a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className='nav-item'>
                        <Link to='/terms-condition'>
                          <a className='nav-link'>Terms & Conditions</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link to='/privacy-policy'>
                          <a className='nav-link'>Privacy Policy</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link to='/404'>
                          <a className='nav-link'>404 Page</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link to='/coming-soon'>
                          <a className='nav-link'>Coming Soon</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className='nav-item'>
                    <a href='#' className='nav-link'>
                      Community
                      <i className='ri-arrow-down-s-line'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link to='/about'>
                          <a className='nav-link'>About Us</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link to='/add-wallet'>
                          <a className='nav-link'>Add Wallet</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <a href='#' className='nav-link'>
                          Blog
                          <i className='ri-arrow-down-s-line'></i>
                        </a>
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <Link to='/blog-1'>
                              <a className='nav-link'>Blog Grid</a>
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link to='/blog-2'>
                              <a className='nav-link'>Blog Left Sidebar</a>
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link to='/blog-3'>
                              <a className='nav-link'>Blog Right Sidebar</a>
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link to='/blog-details'>
                              <a className='nav-link'>Blog Details</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link to='/categories'>
                              <a className='nav-link'>Categories</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link to='/tags'>
                              <a className='nav-link'>Tags</a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className='nav-item'>
                        <Link to='/help-center'>
                          <a className='nav-link'>Help Center</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className='nav-item'>
                    <Link to='/contact'>
                      <a className='nav-link'>Contact Us</a>
                    </Link>
                  </li>
                </ul>

                <div className='others-options'>
                  <ul className='optional-item-list'>
                    <li>
                      <Link to='/create-collection'>
                        <a href={() => false}>Create</a>
                      </Link>
                    </li>
                    <li>
                      <Link to='/add-wallet'>
                        <a className='active'>Connect Wallet</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className='mobile-nav'>
          <div
            className='search-btn global-pointer'
            onClick={() => toggleSearchModal()}
          >
            <a data-bs-toggle='modal' data-bs-target='#searchmodal'>
              <i className='ri-search-line'></i>
            </a>
          </div>
        </div>

        <div className='side-nav-responsive'>
          <div className='container-max'>
            <div className='dot-menu' onClick={() => toggleWallet()}>
              <div className='circle-inner'>
                <div className='circle circle-one'></div>
                <div className='circle circle-two'></div>
                <div className='circle circle-three'></div>
              </div>
            </div>

            <div className={showWallet ? 'container active' : 'container'}>
              <div className='side-nav-inner'>
                <div className='side-nav justify-content-center align-items-center'>
                  <div className='side-nav-item'>
                    <ul className='optional-item-list'>
                      <li>
                        <Link
                          to='/create-collection'
                         
                        >
                          <a href={() => false}>Create</a>
                        </Link>
                      </li>
                      <li>
                        <Link to='/add-wallet'>
                          <a className='active'>Connect Wallet</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchModal
        showSearchModal={showSearchModal}
        toggleSearchModal={toggleSearchModal}
      />
    </>
  );
};

export default NavbarTwo;
