import { useState } from 'react'
import Home from './Home'
import { Routes, Route } from "react-router-dom";
import Admin from "./Admin.tsx";

function App() {

  return (
      <div  className="App">
          <Routes>
              <Route path='/' element={ <Home/> } />
              <Route path='/admin' element={ <Admin/> } />
          </Routes>
      </div>
  )
}

export default App
