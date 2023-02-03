import './App.css';
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import healthcare from "./components/images/heartbeat.gif"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Institution from './components/institutions/Institution';

function App() {
  return (
    <Router>
        {/* <Navbar />
        <Banner /> */}
          <Routes>
            <Route path="/" element={
              <><Navbar /> <Banner /> <Footer/></>
            } />
            <Route path="/institution" element={<> <Navbar /> <Institution /> </>} />
          </Routes>
        
        
    </Router>
  );
}

export default App;
