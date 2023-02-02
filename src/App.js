import './App.css';
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="row">
        <Card gif="https://media2.giphy.com/media/JtBZm3Getg3dqxK0zP/200w.webp?cid=ecf05e477p0szlf4ffkp4ij3bnop8yvrw13hh2w4la0l8ebm&rid=200w.webp&ct=g" title="Buisness" descr="Buisness Strategies is all about buisness" />
        <Card gif="https://media0.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif?cid=ecf05e472zyonucx51ggdqoegvqnkkhsi6ik3rowpy8pzpxw&rid=giphy.gif&ct=g" title="Computer Science" descr="Computer Science promotes unemployement." />
        <Card gif="https://media1.giphy.com/media/IheewDzC0n3G0/giphy.gif?cid=ecf05e4706dhj7v0zb7y06qxsmz3yq7ar81gkowt1mtv5308&rid=giphy.gif&ct=g" title="Mechanical Engineer" descr="Mechancial Engineering is branch of cse" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
