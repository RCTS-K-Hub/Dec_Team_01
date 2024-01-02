import '../App.css';
import Navbar from "../components/navbar/navbar"
import TopBody from '../components/topbody/topbody';
import IconsContainer from '../components/iconsContainer/iconsContainer';
import Community from '../components/community/community';
import Resources from '../components/resources/resources';
import JoinCommunity from '../components/joinCommunity/joinCommunity';
import Footer from '../components/footer/footer';

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
