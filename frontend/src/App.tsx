import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import RegisterType from './components/RegisterType';
import RegisterProf from './components/RegisterProf';
import MainPage from './components/MainPage';
import './App.css'

function App() {

  return (
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registerUser' element={<Register/>}/> 
        <Route path='/registerProf' element={<RegisterProf/>}/> 
        <Route path='/register' element={<RegisterType/>}/> 
      </Routes>
   )  
}

export default App