import { Link } from "react-router-dom";

const BannerArea = () => {
  return (
    <>
      <div className='banner-area-three'>
        <div className='container'>
          <div className='banner-content-three'>
            <h1>The World Of Creative & Rare Digital Artwork</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam etiam rhoncus aenean a iaculis aliquet rhoncus sed.
              Accumsan sodales consectetur.
            </p>
            <div className='banner-btn'>
              <Link to='/about'>
                <a className='default-btn border-radius-5'>Explore More</a>
              </Link>

              <Link to='/add-wallet'>
                <a className='default-btn two border-radius-5'>Connect NFT</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerArea;
