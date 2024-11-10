import React from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeOutputProps {
  code: string;
}

export default function CodeOutput({ code }: CodeOutputProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <span className="text-sm text-gray-400">Generated Python Script</span>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 px-3 py-1 rounded-md bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-4 bg-gray-900 text-gray-100 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}