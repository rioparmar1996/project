import React from 'react';
import { Check, Circle } from 'lucide-react';

interface StageIndicatorProps {
  currentStage: number;
  totalStages: number;
}

export default function StageIndicator({ currentStage, totalStages }: StageIndicatorProps) {
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {Array.from({ length: totalStages }, (_, i) => (
        <div key={i} className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
            ${i + 1 === currentStage ? 'border-blue-500 bg-blue-50' : 
              i + 1 < currentStage ? 'border-green-500 bg-green-50' : 
              'border-gray-300 bg-white'}`}>
            {i + 1 < currentStage ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <span className={`text-sm font-semibold ${i + 1 === currentStage ? 'text-blue-500' : 'text-gray-500'}`}>
                {i + 1}
              </span>
            )}
          </div>
          {i < totalStages - 1 && (
            <div className={`w-16 h-0.5 ${i + 1 < currentStage ? 'bg-green-500' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  );
}