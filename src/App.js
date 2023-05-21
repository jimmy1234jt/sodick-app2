import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Footer from './Components/Footer';
import Services from './Pages/Service';
import About from './Pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
     <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path="/services" exact Component={Services}/>
          <Route path="/about" exact Component={About}/>
          <Route path="/contacts" exact Component={Contact}/>
        </Routes>
        <Footer />
     </Router>
    </div>
  );
}

export default App;
