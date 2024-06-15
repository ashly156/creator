// src/components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-75"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></div>
      </div>
    </div>
  );
};

export default Loading;
