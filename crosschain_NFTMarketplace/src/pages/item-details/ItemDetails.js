import PageBanner from '../../components/Common/PageBanner';
import ItemDetailsArea from '../../components/ItemDetails/ItemDetailsArea';
import TrendingArea from '../../components/Common/TrendingArea';

const ItemDetails = () => {
    return (
        <>
            <PageBanner
                bannerHeading='Discover Item Details'
                parentTitle='Discover'
                pageTitle='Item Details'
                bg='inner-bg12'
            />
            <ItemDetailsArea/>
            <TrendingArea bg="trending-area-bg-two"/>
        </>
    )
}

export default ItemDetails;
