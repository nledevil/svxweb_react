import ContentWrapper from '../../components/ContentWrapper';
import { Link } from "react-router-dom";

const NoMatchScreen = () => {
  return (
    <ContentWrapper pageName="PAGE NOT FOUND" hideButtons>
      <Link to="/">Return to Dashboard</Link>
    </ContentWrapper>
  );
};

export default NoMatchScreen;
