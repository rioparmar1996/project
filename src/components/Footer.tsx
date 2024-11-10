import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">ScriptBuilderAI</h3>
          <p className="text-gray-600 max-w-md">
            Empowering developers with AI-assisted Python code generation.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com" 
               className="text-gray-400 hover:text-gray-600"
               target="_blank"
               rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" 
               className="text-gray-400 hover:text-gray-600"
               target="_blank"
               rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:contact@scriptbuilderai.com" 
               className="text-gray-400 hover:text-gray-600">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="w-full pt-6 mt-6 border-t border-gray-200">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} ScriptBuilderAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}