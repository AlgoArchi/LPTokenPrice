import PageBanner from '../../components/Common/PageBanner';
import AuthorProfileArea from '../../components/AuthorProfile/AuthorProfileArea';
import InvolvedArea from '../../components/Common/InvolvedArea';

const AuthorProfile = () => {
    return (
        <div className="author-color">
            <PageBanner
                bannerHeading='Author Profile'
                parentTitle='Pages'
                pageTitle='Profile'
                bg='inner-bg10'
            />
            <AuthorProfileArea />
            <InvolvedArea />
        </div>
    )
}

export default AuthorProfile;
