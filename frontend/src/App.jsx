import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Login from "./pages/Login"
import Home from "./pages/Home"
import NotFound from './pages/NotFound'
import Register from "./pages/Register"
import Logout from "./pages/Logout"




function App() {



  function RegisterAndLogout(){
    localStorage.clear()
    return <Register/>
  }

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home/>
              </ProtectedRoutes>
            }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<RegisterAndLogout/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App