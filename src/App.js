//import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Directory from './components/Directory';

function App() {
  return (
    <div className="App">
      <Header/>

      <Directory/>

      <Footer/>
    </div>
  );
}

export default App;
