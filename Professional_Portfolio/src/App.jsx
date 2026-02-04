import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './pages/BlogPost';
// 1. Importing the "Chapters" of our book
import Home from './pages/Home';
import Blog from './pages/Blog';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    // 2. The Context Provider (Allows the app to use the Browser's History)
    <Router>
      {/* 3. The Switchboard (Only one child route will render at a time) */}
      <Routes>

        {/* 1: The Full Portfolio (Home) */}
        <Route path="/" element={<Home />} />

        {/* 2: The Blog Listing */}
        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* 3: The Secret Entry (Admin Login) */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* 4: The Admin Dashboard (Hidden) */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Catch-all route for 404s */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
