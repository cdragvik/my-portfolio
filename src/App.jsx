import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './pages/projectPage';
import Home from './pages/homePage';
import Layout from './components/layout';


function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
