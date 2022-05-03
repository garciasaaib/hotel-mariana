import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import Profile from '../components/pages/Profile.page'
import Landing from '../components/pages/Landing.page'
import Login from '../components/pages/Login.page'
import Register from '../components/pages/Register.page'
import Home from '../components/pages/Home.page'
import Room from '../components/pages/Room.page'
import ForgotPassword from '../components/pages/ForgotPassword.page'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Container from '@mui/material/Container';
export default class Router extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container disableGutters component="main" sx={{ pt: 8, pb: 6 }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/room" element={<Room />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
        <Footer />
      </>
    )
  }
}
