import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    
    <Router>
    <div>
    <Header/>
    <Navbar/>
      <Routes>
      <Route path ='/about' element= {<About/>}/>
      </Routes>    
      <Routes>
      <Route path ='/' element= {<Home/>}/>
      </Routes> 
        
    </div>
    </Router>
  );
}

export default App;
