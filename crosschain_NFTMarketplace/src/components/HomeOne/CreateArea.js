import { Link } from "react-router-dom";

const CreateArea = () => {
  return (
    <>
      <div className='create-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Create And Sell Your NFTs</h2>
          </div>

          <div className='row align-items-center pt-45'>
            <div className='col-lg-6'>
              <div className='create-img'>
                <img src={require('../../assets/imgs/create-img.png')} alt='Images' />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='create-card-right pl-20'>
                <div className='row justify-content-center'>
                  <div className='col-lg-6 col-6'>
                    <div className='create-card'>
                      <img
                        src={require('../../assets/imgs/create/account_balance_wallet.png')}
                        alt='Images'
                      />
                      <h3> <Link to='/add-wallet'>
                        <a href={() => false}>Set Up Your Wallet</a></Link>
                      </h3>
                      <p>
                        connect wallet by clicking the wallet icon in the top
                        right corner. Learn about the wallets we support.
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 col-6'>
                    <div className='create-card'>
                      <img
                        src={require('../../assets/imgs/create/photo_library.png')}
                        alt='Images'
                      />
                      <h3><Link to='/create-collection'>
                        <a href={() => false}>
                          Create Your Collection
                        </a></Link>
                      </h3>
                      <p>
                        Click Create and Add social links, a description,
                        profile & banner images, and set a secondary sales fee.
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 col-6'>
                    <div className='create-card'>
                      <img
                        src={require('../../assets/imgs/create/add_photo_alternate.png')}
                        alt='Images'
                      />
                      <h3><Link to='/help-center'>
                        <a href={() => false}> Add Your NFTs</a></Link>
                      </h3>
                      <p>
                        Upload your work (image, video, audio, or 3D art), add a
                        title and description, and customize your NFTs
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 col-6'>
                    <div className='create-card'>
                      <img
                        src={require('../../assets/imgs/create/loyalty.png')}
                        alt='Images'
                      />
                      <h3><Link to='/activity'>
                        <a href={() => false}>List Them For Sale</a></Link>
                      </h3>
                      <p>
                        Choose between auctions, fixed-price listings, and
                        declining-price listings. You choose how you want to
                        sell your NFTs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateArea;
