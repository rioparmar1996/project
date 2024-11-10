import React from 'react';
import { Code2, Lightbulb, Workflow, Shield, Zap, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Workflow className="w-6 h-6 text-blue-500" />,
      title: "Guided 5-Stage Process",
      description: "Our structured approach ensures thorough problem analysis before code generation, leading to better solutions."
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      title: "Python Code Generation",
      description: "Get clean, efficient, and well-documented Python code that follows best practices and PEP 8 guidelines."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
      title: "Perfect for Learning",
      description: "Understand how experienced developers break down problems and implement solutions step by step."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Best Practices Built-in",
      description: "Generated code follows industry standards with proper error handling and input validation."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Instant Results",
      description: "Get production-ready Python code in minutes instead of hours of manual coding and debugging."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Beginner Friendly",
      description: "Perfect for students and new developers learning Python programming through practical examples."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose ScriptBuilderAI?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Accelerate your Python development journey with our AI-powered assistant
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center p-6 rounded-lg bg-blue-50">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to start building better Python scripts?
              </h3>
              <p className="text-gray-600 mb-4">
                Try our AI-powered code generator and experience the difference.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Start Generating Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}