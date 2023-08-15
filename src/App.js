import './App.css';
import React from 'react';
import Main from './Components/Main';
import Projects from './Components/Projects';
import Details from './Components/Modal/Details'
import Footer from './Components/Footer';


function App() {
 
  return (
    <div className="App">
      <Main/>
      <Projects/>
      {/* <Details/> */}
      <Footer/>
    </div>
  );
}

export default App;
