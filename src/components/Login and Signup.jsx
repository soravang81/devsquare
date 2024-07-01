import React from 'react';

export default function Authentication() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    // Implement sign up functionality here
  };

  const handleLogin = () => {
    // Implement login functionality here
  };
  
  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">User Authentication</h2>
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
      <button onClick={handleSignUp} className="w-full py-2 px-3 bg-blue-500 text-white rounded-md mb-2 hover:bg-blue-700">Sign Up</button>
      <button onClick={handleLogin} className="w-full py-2 px-3 bg-green-500 text-white rounded-md hover:bg-green-700">Login</button>
    </div>
  );
}
