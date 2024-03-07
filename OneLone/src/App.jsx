import { BrowserRouter, Route, Routes } from "react-router-dom"

import Dashboard from "./Pages/Dashboard/Dashboard"
import User from "./Pages/User/User"
import Settings from "./Pages/Settings/Settings"
import Customer from "./Pages/Customers/Customer"
import Login from "./Pages/Authentication/Login"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProtectedWrapper from "./Pages/Utils/ProtectedRoute"


function App() {


  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<ProtectedWrapper><Dashboard /></ProtectedWrapper>} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<ProtectedWrapper><User /></ProtectedWrapper>} />
          <Route path="/Settings" element={<ProtectedWrapper><Settings /></ProtectedWrapper>} />
          <Route path="/Customers" element={<ProtectedWrapper><Customer /></ProtectedWrapper>} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
