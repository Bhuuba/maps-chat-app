import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/layout.css';

const AppLayout = () => (
  <>
    <Navbar />
    <main className="container">
      <Outlet />
    </main>
  </>
);

export default AppLayout;
