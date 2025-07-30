import React from 'react';
import { usePlugin } from '../../context/pluginContext';

interface AjaxLoaderProps {
  message?: string;
}

const AjaxLoader: React.FC<AjaxLoaderProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <div className="flex gap-x-1">
        <div className="w-3 h-3 rounded-full animate-bounce first-circle opacity-20 bg-gray-900" />
        <div className="w-3 h-3 rounded-full animate-bounce second-circle opacity-50 bg-gray-900" />
        <div className="w-3 h-3 rounded-full animate-bounce third-circle bg-gray-900" />
      </div>
      {message && <div className="text-sm text-gray-600 pt-2">{message}</div>}
    </div>
  );
};

export default AjaxLoader;
