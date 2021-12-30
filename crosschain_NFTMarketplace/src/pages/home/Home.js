import BannerArea from '../../components/HomeOne/BannerArea';
import TrendingArea from '../../components/HomeOne/TrendingArea';
import TopSeller from '../../components/Common/TopSeller';
import AuctionArea from '../../components/HomeOne/AuctionArea';
import FeaturedArea from '../../components/Common/FeaturedArea';
import CreateArea from '../../components/HomeOne/CreateArea';
import AuthorArea from '../../components/HomeOne/AuthorArea';
import CollectionsArea from '../../components/Common/CollectionsArea';

const Home = () => {
    return (
        <>
            <BannerArea />
            <TrendingArea />
            <TopSeller />
            <AuctionArea />
            <FeaturedArea title="Featured Assets"/>
            <CreateArea />
            <AuthorArea />
            <CollectionsArea />
        </>
    )
}

export default Home;
