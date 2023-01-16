import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import UserForm from './pages/UserForm/UserForm';
import Footer from './components/Footer/Footer';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<UserForm />} />
        <Route path="/signup" element={<UserForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
