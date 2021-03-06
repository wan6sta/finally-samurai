import {Routes, Route} from "react-router-dom";

import Header from './components/Header/Header';
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import Users from "./components/Users/Users";
import Login from "./components/Login/Login";
import Test from "./components/Test/Test";

const App = () => {
  return <>
    <Header/>
    <div className='container'>
      <div className='main'>
        <Navigation/>
        <Routes>
          <Route path='profile/:userId' element={<Profile/>}/>
          <Route path='profile' element={<Profile/>}/>

          <Route path='messages' element={<Messages/>}/>
          <Route path='users' element={<Users/>}/>

          <Route path='settings' element={<h1>Settings</h1>}/>

          <Route path='login' element={<Login/>}/>

          <Route path='test' element={<Test/>}/>
        </Routes>
      </div>
    </div>
  </>
}

export default App
