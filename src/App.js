import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import { getLogin } from './redux/auth_reducer';
import {connect} from 'react-redux';

//import { domainToASCII } from 'url';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Profile from './components/content/profile/Profile';
import Dialogs from './components/content/dialogs/Dialogs';
import Friends from './components/content/friends/Friends';
import Login from './components/login/Login';


class App extends React.Component {
  componentDidMount(){
    this.props.getLogin();
  }
  render(){
    return(
      <BrowserRouter>
        { 
          this.props.authFetching===true
           ? <img src="/preloader.svg"/>
           : this.props.isAuth===false
              ? <Login/>
              : <div className="App">
                    <div className="menu">
                      <Menu />
                    </div>
                    <div className="header">
                      <Header />
                    </div>
                    <div className="content">
                        <Route exact path="/profile" render={()=><Profile/>}/>
                        <Route path="/profile/:userid" render={()=><Profile/>}/>
                        <Route path="/dialogs" render={()=><Dialogs/>}/>
                        <Route path="/friends" render={()=><Friends/>}/>
                    </div>
                </div>
        }
      </BrowserRouter>     
    ); 
  }
}

let mapStateToProps = (state) => {
  return {
      isAuth: state.auth.isAuth,
      authFetching: state.auth.authFetching
  }
}
export default connect(mapStateToProps,{getLogin})(App);