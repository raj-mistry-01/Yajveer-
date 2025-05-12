import React from 'react'
import reactDom from "react-dom/client";
import Navbar from "./components/navbar";
import Navbar2 from './components/navbar2';
import MainNav from './components/mainnav';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
        <>
        <Navbar></Navbar>
        <Navbar2></Navbar2>
        <MainNav></MainNav>
        </>
    )
}

export default App