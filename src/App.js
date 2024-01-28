import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
