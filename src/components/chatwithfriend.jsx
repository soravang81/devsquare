import React, { useState } from 'react';

export default function ChatWithFriend() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput('');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Chat with a Friend</h2>
      <div className="flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-inner text-black">
        <div className="flex flex-col space-y-2 overflow-y-auto max-h-60 p-2 bg-gray-100 rounded-lg">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${message.sender === 'You' ? 'bg-blue-100 self-end' : 'bg-gray-300 self-start'}`}
            >
              <span className="font-semibold">{message.sender}: </span>
              <span>{message.text}</span>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Type a message"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

