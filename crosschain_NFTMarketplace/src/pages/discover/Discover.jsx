import PageBanner from '../../components/Common/PageBanner';
import FeaturedArea from '../../components/Common/FeaturedArea';
import InvolvedArea from '../../components/Common/InvolvedArea';

const Discover = () => {
    return (
        <>
            <PageBanner
                bannerHeading='Discover Exclusive Digital Assets'
                parentTitle='Discover'
                pageTitle='Discover Style Two'
                bg='inner-bg4'
            />
            <FeaturedArea title="Discover Assets" pagination={true}/>
            <InvolvedArea />
        </>
    )
}

export default Discover;
