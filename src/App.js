import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Preview from './Preview.js';
import Chats from "./Chats.js";
import ChatView from "./ChatView.js";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './Login.js';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser)
      {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      }
      else {
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (

          <div className ="app_body">
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav> */}
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/chats">
              <Chats/>
            </Route>
  
            <Route exact path="/chats/view">
              <ChatView/>
            </Route>
  
            <Route exact path="/preview">
            {/* <h1>Snapchat </h1> */}
              <Preview></Preview>
              
            </Route>
  
            <Route exact path="/">
              <WebcamCapture/>
            </Route>
          </Switch>
        </div>

        )}
   
    </Router>
     

    </div>
  );
  
}


export default App;

// style = {StyleSheet.create}
