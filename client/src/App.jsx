// import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, Route, Routes, 
} from "react-router-dom";
// import axios from "axios"
import './App.css'

import Login from './pages/Login'
import Home from './pages/Home';
import Register from "./pages/Register";

function App() {
  // const [count, setCount] = useState(0)
  // const [users, setUsers] = useState()

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://127.0.0.1:5001/");
  //   console.log(response)
  // }

  // const getEmoji = async () => {
  //   const response = await axios.get("http://127.0.0.1:5001/emoji");
  //   console.log(response.data)
  // }

  // useEffect(() => {
  //   getEmoji()
  // }, [])

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
