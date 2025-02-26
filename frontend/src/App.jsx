import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import AIModelUpload from './AIModelUpload'
import LandingPage from './LandingPage'
import Stake from "./Stake";

import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material"




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<AIModelUpload />} />
        <Route path="/stake" element={<Stake />} />
        {/* Add additional routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
