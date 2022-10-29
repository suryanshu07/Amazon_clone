import React from 'react';
import './App.css';
import Nav from "./Nav";
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app"> 
        <Nav/>
        <Routes>
          <Route path="/checkout"
            element={<Checkout/>}
          />
          <Route path="/"
            element={<Home/>}
          />
        </Routes>
      </div>  
    </Router>
    
  );
}

export default App;
