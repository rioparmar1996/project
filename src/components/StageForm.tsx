import React from 'react';
import { Send } from 'lucide-react';

interface StageFormProps {
  stage: number;
  question: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export default function StageForm({ stage, question, placeholder, value, onChange, onSubmit }: StageFormProps) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 transition-all duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Stage {stage}</h2>
      <h3 className="text-lg text-gray-700 mb-4">{question}</h3>
      <div className="space-y-4">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        <button
          onClick={onSubmit}
          disabled={!value.trim()}
          className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <span className="mr-2">Continue</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}