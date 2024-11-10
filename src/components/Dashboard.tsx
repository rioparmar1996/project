import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <h2 className="text-2xl font-bold mb-4">Welcome to ScriptBuilderAI</h2>
            <p className="text-gray-600">
              Start generating Python scripts using our AI-powered platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}