import React from 'react';

export default function AdvancedSearch() {
  return (
    <div className="py-8 px-8 max-w-md mx-auto bg-white rounded-xl shadow-lg">
      <div className="my-4">
        <input
          type="text"
          placeholder="Search for users..."
          className="w-full px-4 py-2 text-lg text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out hover:border-indigo-500"
        />
      </div>
      <div className="my-4">
        <input
          type="text"
          placeholder="Search for posts..."
          className="w-full px-4 py-2 text-lg text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out hover:border-indigo-500"
        />
      </div>
      <div className="my-4">
        <input
          type="text"
          placeholder="Search for blog articles..."
          className="w-full px-4 py-2 text-lg text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out hover:border-indigo-500"
        />
      </div>
      <button
        className="w-full py-2 text-lg text-white font-semibold bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
      >
        Search
      </button>
    </div>
  );
}
