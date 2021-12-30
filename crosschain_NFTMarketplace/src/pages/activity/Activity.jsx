import PageBanner from '../../components/Common/PageBanner';
import ActivityArea from '../../components/Activity/ActivityArea';
import TrendingArea from '../../components/Common/TrendingArea';

const Activity = () => {
    return (
        <>
            <PageBanner
                bannerHeading='Recent Activity'
                parentTitle='Activity'
                pageTitle=''
                bg='inner-bg8'
            />
            <ActivityArea/>
            <TrendingArea bg="trending-area-bg-two"/>
        </>
    )
}

export default Activity;
