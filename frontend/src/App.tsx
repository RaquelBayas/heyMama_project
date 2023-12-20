import { Routes, Route } from 'react-router-dom';

import UserProvider from './context/UserProvider';
import PrivateRoute from './components/PrivateRoute';

import MainPage from './components/MainPage/MainPage';
import Login from './components/Login';
import Register from './components/Register';
import RegisterType from './components/RegisterType';
import RegisterProf from './components/RegisterProf';

import ForumHome from './components/Forum/ForumHome';
import Forums from './components/Forum/Forums';
import SubForum from './components/Forum/forumTypes/SubForum';
import MoodPage from './components/MoodPage';
import Breathing from './components/Breathing';
import NewArticle from './components/Articles/NewArticle';
import Profile from './components/Profile/Profile';
import Layout from './components/Layout';
import UserSetting from './components/Settings/UserSetting';
import Articles from './components/Forum/Articles';
import ArticleContent from './components/Forum/ArticleContent';
import Chat from './components/Chat/Chat';
import Timeline from './components/Timeline/Timeline';
import Discussion from './components/Forum/Discussion';
import TestEdimburgo from './components/TestEdimburgo';
import Consults from './components/Consults/Consults';
import ListConsults from './components/Consults/ListConsults';
import ConsultPage from './components/Consults/ConsultPage';
import ChatPage from './components/Chat/ChatPage';


function App() {

  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registerUser' element={<Register />} />
        <Route path='/registerProf' element={<RegisterProf />} />
        <Route path='/forum' element={
          <PrivateRoute Professional={true}>
            <ForumHome />
          </PrivateRoute>
        } />
        <Route path='/chat' element={
          <PrivateRoute>
            <ChatPage />
          </PrivateRoute>
        } />
        <Route path='/register' element={<RegisterType />} />
        <Route path='/forums' element={
          <PrivateRoute>
            <Forums />
          </PrivateRoute>
        } />
        <Route path='/setting/*' element={
          <PrivateRoute>
            <UserSetting />
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
        <Route path='/articles' element={
          <PrivateRoute>
            <Articles />
          </PrivateRoute>
        } />
        <Route path='/articles/content/:articleId' element={
          <PrivateRoute>
            <ArticleContent />
          </PrivateRoute>
        } />
        <Route path='/articles/newArticle' element={
          <PrivateRoute>
            <NewArticle />
          </PrivateRoute>
        } />
        <Route path='/forum/subforum/:forum_id/discussion/:discussion_id' element={
          <PrivateRoute>
            <Discussion />
          </PrivateRoute>
        } />
        <Route path='/profile/:user_id' element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path='/timeline' element={
          <PrivateRoute>
            <Timeline userId={undefined} loggedUser={undefined}  />
          </PrivateRoute>
        } />
         <Route path='/testEdimburgo' element={
          <PrivateRoute>
            <TestEdimburgo />
          </PrivateRoute>
        } />
         <Route path='/listConsults' element={
          <PrivateRoute>
            <ListConsults />
          </PrivateRoute>
        } />
        <Route path='/consult' element={
          <PrivateRoute>
            <ConsultPage />
          </PrivateRoute>
        } />
        <Route path='/consults/:consult_id' element={
          <PrivateRoute>
            <Consults />
          </PrivateRoute>
        } />
      </Routes>
    </UserProvider>
  );
}

export default App;