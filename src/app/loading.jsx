import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-purple-300 text-center px-4">
      
      {/* Spinner */}
      <div className="loading loading-spinner loading-lg text-purple-600 mb-4"></div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">
        Loading...
      </h2>

      {/* Sub text */}
      <p className="text-gray-600 max-w-md mt-2"> 
        Please wait while we prepare your content.
      </p>

      {/* Animated dots */}
      <div className="flex gap-1 mt-3">
        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-300"></span>
      </div>

    </div>
  );
};

export default LoadingPage;