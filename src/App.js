import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

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
