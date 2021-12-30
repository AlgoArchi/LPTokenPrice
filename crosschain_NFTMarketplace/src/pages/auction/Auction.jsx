import PageBanner from '../../components/Common/PageBanner';
import AuctionArea from '../../components/Auction/AuctionArea';
import InvolvedArea from '../../components/Common/InvolvedArea';

const Auction = () => {
    return (
        <div className="author-color">
            <PageBanner
                bannerHeading='Live Auction Is Going On'
                parentTitle='Discover'
                pageTitle='Live Auction'
                bg="inner-bg5"
            />
            <AuctionArea />
            <InvolvedArea />
        </div>
    )
}

export default Auction;
