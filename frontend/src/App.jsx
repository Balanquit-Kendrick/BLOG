import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import LandingPage from './pages/LandingPage/LandingPage';
import './App.css'
import ProtectedRoute from './components/protected-routes';
import Setting from './pages/Auth/Setting';

const routes = (
  <Router>
    <Routes>
      <Route path='/' exact element={<LandingPage />}/>
      <Route element={<ProtectedRoute/>}> 
        <Route path='/dashboard' exact element={<Dashboard />}/>
        <Route path='/profile-setting' exact element={<Setting />}/>
      </Route>
      <Route path='/login' exact element={<Login />}/>
      <Route path='/signup' exact element={<SignUp />}/>
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div data-theme="dark">
      {routes}
    </div>
  )
}

export default App