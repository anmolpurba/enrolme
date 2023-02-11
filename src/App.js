import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Institution from './components/institutions/Institution';
import Contact from './components/contact/Contact';
import About from './components/aboutus/About';
import Ielts from './components/ielts/Ielts';
import Reading from './ieltsdetail/reading/Reading.js';
import Listening from "./ieltsdetail/listening/Listening.js";
import Speaking from "./ieltsdetail/speaking/Speaking.js";
import Writing from "./ieltsdetail/writing/Writing.js";
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={
              <><Navbar /> <Banner /> <Footer/></>
            } />
            <Route path="/institution" element={<> <Navbar /> <Institution /> </>} />
            <Route path="/contact" element={<><Navbar /><Contact /></>} />
            <Route path="/about" element={<><Navbar /><About /></>} />
            <Route path="/ielts" element={<><Navbar /><Ielts /></>} />
            <Route path="/reading" element={<><Navbar /> <Reading/> </>} />
            <Route path="/listening" element={<><Navbar /> <Listening /> </>} />
            <Route path="/speaking" element={<><Navbar /> <Speaking /> </>} />
            <Route path="/writing" element={<><Navbar /> <Writing /> </>} />
            <Route path="/signup" element={<> <Navbar/> <Signup/> </>} />
            <Route path="/signin" element={<> <Navbar/> <Signin/> </>} />
          </Routes>
        
        
    </Router>
  );
}

export default App;
