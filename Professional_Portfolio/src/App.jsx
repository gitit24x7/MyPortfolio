import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Importing the "Chapters" of our book
import Home from './pages/Home';
import Blog from './pages/Blog';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    // 2. The Context Provider (Allows the app to use the Browser's History)
    <Router>
      {/* 3. The Switchboard (Only one child route will render at a time) */}
      <Routes>

        {/* CHAPTER 1: The Full Portfolio (Home) */}
        <Route path="/" element={<Home />} />

        {/* CHAPTER 2: The Blog Listing */}
        <Route path="/blog" element={<Blog />} />

        {/* CHAPTER 3: The Secret Entry (Admin Login) */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* CHAPTER 4: The Admin Dashboard (Hidden) */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
