import React, { useState } from 'react';
import { Mail, Lock, User, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    captcha: '',
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      email: '',
      password: '',
      confirmPassword: '',
      captcha: '',
    };

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!captchaValue) {
      newErrors.captcha = 'Please complete the CAPTCHA';
    }

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      return;
    }

    // Mock signup - In a real app, this would call an API
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="relative">
              <label htmlFor="email" className="sr-only">Email address</label>
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="Email address"
              />
              {errors.email && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
              )}
            </div>
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}

            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border ${
                  errors.password ? 'border-red-300' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="Password"
              />
              {errors.password && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
              )}
            </div>
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password}</p>
            )}

            <div className="relative">
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border ${
                  errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
              )}
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-600 mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="your-recaptcha-site-key"
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>
          {errors.captcha && (
            <p className="text-sm text-red-600 text-center">{errors.captcha}</p>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}