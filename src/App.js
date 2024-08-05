import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About'; // Add other components as needed
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register'
import StudentDashboard from './pages/StudentDashboard';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
