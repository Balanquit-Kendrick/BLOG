import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import './App.css'
const routes = (
  <Router>
    <Routes>
      <Route path='/' exact element={<Dashboard />}/>
      <Route path='/login' exact element={<Login />}/>
      <Route path='/signup' exact element={<SignUp />}/>
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>
      {routes}
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App