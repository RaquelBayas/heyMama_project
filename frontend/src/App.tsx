import { Routes, Route } from 'react-router-dom';
import About from './components/MainPage/About';
import Contact from './components/MainPage/Contact';
import Login from './components/Login';
import Register from './components/Register';
import UserConf from './components/Config/UserConf';
import RegisterType from './components/RegisterType';
import RegisterProf from './components/RegisterProf';
import MainPage from './components/MainPage/MainPage';
import './App.css'
import ForumHome from './components/Forum/ForumHome';
import Forums from './components/Forum/Forums';
import Depresion from './components/Forum/forumTypes/Depresion'
import MoodTracker from './components/MoodTracker';
import Breathing from './components/Breathing';
import SubForum from './components/Forum/SubForum';

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registerUser' element={<Register />} />
      <Route path='/registerProf' element={<RegisterProf />} />
      <Route path='/register' element={<RegisterType />} />
      <Route path='/forum' element={<ForumHome />} />
      <Route path='/forums' element={<Forums />} />
      <Route path='/forum/depresion' element={<Depresion />} />
      <Route path='/config/*' element={<UserConf />} />
      <Route path='/forum/depresion/subforum' element={<SubForum />} />
      <Route path='/mood' element={<MoodTracker />} />
      <Route path='/breathing' element={<Breathing />} />
    </Routes>
  )
}

export default App