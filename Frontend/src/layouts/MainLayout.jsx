import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: '100vh',
          padding: '40px 80px',
        }}
      >
        {children}
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;