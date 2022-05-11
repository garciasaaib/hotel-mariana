import React from 'react'
import { Routes, Route } from "react-router-dom";
import Profile from '../pages/Profile.page'
import Landing from '../pages/Landing.page'
import Login from '../pages/Login.page'
import Register from '../pages/Register.page'
import Home from '../pages/Home.page'
import Room from '../pages/Room.page'
import ForgotPassword from '../pages/ForgotPassword.page'
import NewPassword from '../pages/NewPassword.page'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
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
          <Route path="home" element={<Home />} />
          <Route path="room" element={<Room />} >
            <Route path=":id" element={<Room />} />
          </Route>

          {/* auth routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="newpassword" element={<NewPassword />} />

          {/* user routes */}
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}
