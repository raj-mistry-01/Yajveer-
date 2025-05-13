import React from 'react'
import reactDom from "react-dom/client";
import Login from './components/login';
import { Routes, Route } from 'react-router';
import Home from './components/home';

const App = () => {
  return (
        <>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
        </>
    )
}

export default App