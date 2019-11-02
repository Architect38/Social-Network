import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
//import { domainToASCII } from 'url';

import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Profile from './components/content/profile/Profile';
import Dialogs from './components/content/dialogs/Dialogs';
import Friends from './components/content/friends/Friends'



function App(props) {
  
  return (
    <BrowserRouter>
    <div className="App">
        <Menu />
        <Header />
        <div className="content">
            <Route path="/profile/:userid?" render={()=><Profile/>}/>
            <Route path="/dialogs" render={()=><Dialogs/>}/>
            <Route path="/friends" render={()=><Friends/>}/>
        </div>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
