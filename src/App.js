import './App.css';
import {Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"

import Home from './components/Home'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />

      </Routes>
    </>
  );
}

export default App;