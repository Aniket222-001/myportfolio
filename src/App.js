import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Aboutme from './Components/Aboutme';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contactme from './Components/Contactme';
import Main from './Main'


function App() {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Main/>}/>  
        <Route path='/Home' element={<Home/>}/>
        <Route path='/aboutme' element={<Aboutme/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Contactme' element={<Contactme/>}/>   
      </Routes> */}
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Skills/>
      <Project/>
      <Contactme/>
    </div>
  );
}

export default App;
