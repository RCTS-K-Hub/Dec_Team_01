import './App.css';
import Navbar from "./components/navbar"
import TopBody from './components/topbody';
import IconsContainer from './components/iconsContainer';
import Community from './components/community';
import Resources from './components/resources';
import JoinCommunity from './components/joinCommunity';
import Footer from './components/footer';

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
