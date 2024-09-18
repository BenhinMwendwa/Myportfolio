import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'
import Home from'./Components/Home'
import Hero from'./Components/Hero'
import MyWork from './Components/MyWork';

function App() {
  return (
    <Router>
      <div className="App">

      
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork/>
      <Contact />
      <Footer/>
      {/* <Routes>
        { <Route exact path="/" component={Home} /> }
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>  
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes> */}
      
      </div>
    </Router>
  );
 

  
}

export default App;
