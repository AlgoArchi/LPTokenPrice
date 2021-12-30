import PageBanner from '../../components/Common/PageBanner';
import AuthorArea from '../../components/Authors/AuthorArea';
import InvolvedArea from '../../components/Common/InvolvedArea';

const Authors = () => {
    return (
        <>
            <PageBanner
                bannerHeading='Our Top Authors'
                parentTitle='Pages'
                pageTitle='Authors'
                bg='inner-bg9'
            />
            <AuthorArea/>
            <InvolvedArea />
        </>
    )
}

export default Authors;
