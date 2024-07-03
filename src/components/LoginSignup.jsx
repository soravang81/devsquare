import React, { useState } from 'react';

export function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [action, setAction] = useState('Sign Up');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSignUp = () => {
    // Implement sign-up functionality here
    console.log(`Signing up with Email: ${email}, Password: ${password}, Username: ${username}`);
  };

  const handleLogin = () => {
    // Implement login functionality here
    console.log(`Logging in with Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">{action}</h2>
      {action === 'Sign Up' && (
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className="w-full py-2 px-3 border border-gray-300 rounded-md mb-4"
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        className="w-full py-2 px-3 border border-gray-300 rounded-md mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        className="w-full py-2 px-3 border border-gray-300 rounded-md mb-4"
      />
      {action === 'Sign Up' ? (
        <button
          onClick={handleSignUp}
          className="w-full py-2 px-3 bg-blue-500 text-white rounded-md mb-2 hover:bg-blue-700"
        >
          Sign Up
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="w-full py-2 px-3 bg-green-500 text-white rounded-md hover:bg-green-700"
        >
          Login
        </button>
      )}
      <button
        onClick={() => setAction(action === 'Sign Up' ? 'Login' : 'Sign Up')}
        className="w-full py-2 px-3 bg-gray-500 text-white rounded-md hover:bg-gray-700 mt-2"
      >
        {action === 'Sign Up' ? 'Login' : 'Sign Up'}
      </button>
    </div>
  );
}
