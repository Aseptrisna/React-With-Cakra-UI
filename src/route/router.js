import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  LoginView,
  SignupView,
  ProfileView,
  TableView,
  Home,
} from '../../src/page/view'

import{LoginSetup,HomeSetup} from '../../src/page/setup'

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSetup />} />
        <Route path="/signup" element={<SignupView />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/table" element={<TableView />} />
        <Route path="/home" element={<HomeSetup />} />
      </Routes>
    </Router>
  );
}
