import Navbar from "../Navbar/Navbar"
import TopBody from '../Universe/universe';
import IconsContainer from '../Icons/icons';
import Community from '../Community/community';
import Resources from '../Educational/educational';
import JoinCommunity from '../JoinCommunity/joincommunity';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="body">
      <Navbar />
      <TopBody />
      <IconsContainer />
      <Community />
      <Resources />
      <JoinCommunity />
      <Footer />
    </div>
  );
}

export default App;
