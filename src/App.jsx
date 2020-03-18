import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from "react-router-dom"

const App = (props) => {

  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content">
        <Route exact path="/dialogs" render={() => <Dialogs dispatch={props.dispatch} messagesPage={props.appState.messagesPage} />} />
          <Route path="/profile" render={() => <Profile dispatch={props.dispatch} profilePage={props.appState.profilePage}/>} />
        </div>
      </div>
  );
}

export default App;
