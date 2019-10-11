import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
        <Menu />
        <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
