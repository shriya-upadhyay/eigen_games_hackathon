import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './AIModelUpload'
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

import {Link} from "react-router-dom"
import AIModelUpload from './AIModelUpload'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AIModelUpload/>
    </>
  )
}

export default App
