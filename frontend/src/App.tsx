import {Routes, Route} from 'react-router-dom';

import Landpage from './components/Landpage';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import RegisterType from './components/RegisterType';
import RegisterProf from './components/RegisterProf';
import './App.css'


function App() {

  return (
      <Routes>
        <Route path='/' element={<Landpage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/registerUser' element={<Register/>}/> 
        <Route path='/registerProf' element={<RegisterProf/>}/> 
        <Route path='/register' element={<RegisterType/>}/> 
      </Routes>
   )  
}

export default App