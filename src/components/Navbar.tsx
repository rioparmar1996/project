import React from 'react';
import { Braces, Github, Menu, X, LogIn } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Braces className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ScriptBuilderAI</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#docs" className="text-gray-600 hover:text-gray-900">Documentation</a>
            <a href="https://github.com" 
               className="flex items-center text-gray-600 hover:text-gray-900"
               target="_blank"
               rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-1" />
              GitHub
            </a>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" 
               className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Features
            </a>
            <a href="#docs" 
               className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Documentation
            </a>
            <a href="https://github.com"
               className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
               target="_blank"
               rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-1" />
              GitHub
            </a>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                <LogIn className="w-4 h-4 inline mr-2" />
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}