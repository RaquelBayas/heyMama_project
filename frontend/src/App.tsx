import {Routes, Route} from 'react-router-dom';
import './App.css'
import Register from './components/Register';
import RegisterType from './components/RegisterType';
import RegisterProf from './components/RegisterProf';


function App() {

  return (
      <Routes>
        <Route path='/registerUser' element={<Register/>}/> 
        <Route path='/registerProf' element={<RegisterProf/>}/> 
        <Route path='/register' element={<RegisterType/>}/> 
      </Routes>
   )  
}

export default App