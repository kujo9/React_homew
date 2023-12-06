import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Home, CarDetails, CarList, Auth } from './components'; 
import './index.css';
import { theme } from './Theme/themes';
import { FirebaseAppProvider } from 'reactfire'; 
import 'firebase/auth'; 
import { firebaseConfig } from './firebaseConfig'; 


function Application() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path="/" element={<CarList />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default Application