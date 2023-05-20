import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Footer from './Components/Footer';
import Services from './Pages/Service';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
     <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path="/services" exact Component={Services}/>
        </Routes>
        <Footer />
     </Router>
    </div>
  );
}

export default App;
