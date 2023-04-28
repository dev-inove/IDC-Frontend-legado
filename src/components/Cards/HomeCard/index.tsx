import WelcomeCard from '../WelcomeCard';
import Infocard from '../InfoCard';
import * as styles from './styles';

function HomeCards() {
  return (
    <styles.HomeCardsContainer>
      <WelcomeCard />
      <Infocard />
    </styles.HomeCardsContainer>
  );
}

export default HomeCards;
