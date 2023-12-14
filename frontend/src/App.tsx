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
import SubForum from './components/Forum/forumTypes/SubForum';
import MoodTracker from './components/MoodTracker';
import Articles from './components/Forum/Articles';
import ArticleContent from './components/Forum/ArticleContent';
import Discussion from './components/Forum/Discussion';
import Layout from './components/Layout';
import Breathing from './components/Breathing';
// import Depresion from './components/Forum/forumTypes/Depresion';
// import MoodPage from './components/MoodPage';
// import UserProvider from './context/UserProvider';
// import PrivateRoute from './components/PrivateRoute';

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

      <Route path='/forum/subforum/:id' element={
        <Layout>
          <SubForum />
        </Layout>} />

      <Route path='/forum/subforum/discussion/:id' element={<Discussion />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/articles/content/:id' element={<ArticleContent />} />
      <Route path='/config/*' element={<UserConf />} />
      <Route path='/mood' element={<MoodTracker />} />
      <Route path='/breathing' element={<Breathing />} />
    </Routes>
  );

}

export default App;