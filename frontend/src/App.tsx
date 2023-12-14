import { Routes, Route } from 'react-router-dom';
import About from './components/MainPage/About';
import Contact from './components/MainPage/Contact';
import Login from './components/Login';
import Register from './components/Register';
import UserConf from './components/Config/UserConf';
import RegisterType from './components/RegisterType';
import RegisterProf from './components/RegisterProf';
import MainPage from './components/MainPage/MainPage';
import './App.css';
import ForumHome from './components/Forum/ForumHome';
import Forums from './components/Forum/Forums';
import Depresion from './components/Forum/forumTypes/Depresion';
import MoodPage from './components/MoodPage';
import Breathing from './components/Breathing';
import SubForum from './components/Forum/SubForum';
import UserProvider from './context/UserProvider';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (


    <UserProvider>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registerUser' element={<Register />} />
        <Route path='/registerProf' element={<RegisterProf />} />
        <Route path='/forum' element={
          <PrivateRoute>
            <ForumHome />
          </PrivateRoute>
        } />
        <Route path='/register' element={<RegisterType />} />
        <Route path='/forums' element={
          <PrivateRoute>
            <Forums />
          </PrivateRoute>
        } />
        <Route path='/forum/depresion' element={
          <PrivateRoute>
            <Depresion />
          </PrivateRoute>
        } />
        <Route path='/config/*' element={
          <PrivateRoute>
            <UserConf />
          </PrivateRoute>
        } />
        <Route path='/forum/depresion/subforum' element={
          <PrivateRoute>
            <SubForum />
          </PrivateRoute>
        } />
        <Route path='/moods' element={
          <PrivateRoute>
            <MoodPage />
          </PrivateRoute>
        } />
        <Route path='/breathing' element={
          <PrivateRoute>
            <Breathing />
          </PrivateRoute>
        } />
      </Routes>
    </UserProvider>

  );
}

export default App;