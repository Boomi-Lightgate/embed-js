import React from 'react';

interface SpinnerProps {
  message?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-50 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
          <div className="absolute inset-0 rounded-full bg-gray-50 opacity-10 animate-ping"></div>
        </div>
        <span className="text-gray-100 text-sm font-medium animate-pulse">{message}</span>
      </div>
    </div>
  );
};

export default Spinner;
