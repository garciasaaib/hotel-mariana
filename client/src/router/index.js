import React from 'react'
import { Routes, Route } from "react-router-dom";
import Profile from '../components/pages/Profile.page'
import Landing from '../components/pages/Landing.page'
import Login from '../components/pages/Login.page'
import Register from '../components/pages/Register.page'
import Home from '../components/pages/Home.page'
import Room from '../components/pages/Room.page'
import ForgotPassword from '../components/pages/ForgotPassword.page'
import NewPassword from '../components/pages/NewPassword.page'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Container from '@mui/material/Container';
export default function Router() {
  return (
    <>
      <Navbar />
      <Container
        disableGutters
        component="main"
        sx={{
          pt: 0,
          pb: 6,
          margin: "0 auto",
          minWidth: '100%',
          width: '100%',
        }}
      >
        <Routes>
          {/* free routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/room" element={<Room />} />

          {/* auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />

          {/* user routes */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}
