import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './components/Features';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navbar />
        
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={
            <main className="flex-grow">
              <div className="pt-24 pb-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Python Script Generator
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Generate optimized Python code through guided prompts
                  </p>
                </div>
              </div>
              <Features />
            </main>
          } />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;