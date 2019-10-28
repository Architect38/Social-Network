import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
//import { domainToASCII } from 'url';

import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Profile from './components/content/profile/Profile';
import DialogsContainer from './components/content/dialogs/DialogsContainer';
import FriendsContainer from './components/content/friends/FriendsContainer'



function App(props) {
  
  return (
    <BrowserRouter>
    <div className="App">
        <Menu />
        <Header />
        <div className="content">
            <Route path="/profile" render={()=><Profile/>}/>
            <Route path="/dialogs" render={()=><DialogsContainer/>}/>
            <Route path="/friends" render={()=><FriendsContainer/>}/>
        </div>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
