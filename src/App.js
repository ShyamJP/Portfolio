import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projcts';
import Aboutus from './Components/About US/Aboutus';
import Contact from './Components/Contact Us/Contact';
import Error from './Components/Error';
import Resume from './Components/Home/Resume'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])
  return (
    <>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/aboutus' Component={Aboutus}/>
        <Route exact path='/skills' Component={Skills}/>
        <Route exact path='/projects' Component={Projects}/>
        <Route exact path='/contact' Component={Contact}/>
        <Route exact path='/resume' Component={Resume} />
        <Route path='*' Component={Error}/>
      </Routes>
    </>
  );
}

export default App;
