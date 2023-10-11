// Layout.jsx

import React from 'react';
import Header from './header';
import Footer from './footer';


function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
