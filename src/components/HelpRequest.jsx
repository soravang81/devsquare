import React, { useState } from "react";

export default function HelpRequests() {
  const [requests, setRequests] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePostRequest = () => {
    if (title.trim() && description.trim()) {
      setRequests([...requests, { title, description, id: Date.now() }]);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-xl shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Help Requests</h2>
      <div className="flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-inner text-black">
        <div className="flex flex-col space-y-2 overflow-y-auto max-h-60 p-2 bg-gray-100 rounded-lg">
          {requests.map((request) => (
            <div key={request.id} className="p-4 bg-gray-200 rounded-lg">
              <h3 className="font-bold text-lg">{request.title}</h3>
              <p>{request.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Title of the help request"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Describe what help you need"
            // rows="4"
          />
          <button
            onClick={handlePostRequest}
            className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Post Request
          </button>
        </div>
      </div>
    </div>
  );
}
