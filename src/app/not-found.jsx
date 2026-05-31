import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-purple-300 text-center px-4">
      
      {/* Icon */}
      <div className="text-purple-600 text-6xl mb-4 animate-bounce">
        <FaExclamationTriangle />
      </div>

      {/* Title */}
      <h1 className="text-6xl font-extrabold text-purple-700 mb-2">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-md mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
  <button className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition duration-300 cursor-pointer">
    ⬅ Back to Home
  </button>
</Link>

    </div>
  );
};

export default NotFound;