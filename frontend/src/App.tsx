import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserConf from './components/Config/UserConf';
import RegisterType from './components/RegisterType';
import RegisterProf from './components/RegisterProf';
import MainPage from './components/MainPage/MainPage';
import ForumHome from './components/Forum/ForumHome';
import Forums from './components/Forum/Forums';
import MoodPage from './components/MoodPage';
import Breathing from './components/Breathing';
import UserProvider from './context/UserProvider';
import NewArticle from './components/Articles/NewArticle';
import Profile from './components/Profile/Profile';
import PrivateRoute from './components/PrivateRoute';
import SubForum from './components/Forum/forumTypes/SubForum';
import Layout from './components/Layout';


function App() {

  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<MainPage />} />
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
        <Route path='/config/*' element={
          <PrivateRoute>
            <UserConf />
          </PrivateRoute>
        } />
        <Route path='/forum/subforum/:id' element={
          <PrivateRoute>
            <Layout>
              <SubForum />
            </Layout>
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
        <Route path='/articles/newArticle' element={
          <PrivateRoute>
            <NewArticle />
          </PrivateRoute>
        } />
        <Route path='/profile' element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
      </Routes>
    </UserProvider>
  );
}

export default App;