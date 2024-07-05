import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import LoginValidation from "./Validation";
import axios from 'axios';

export function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [action, setAction] = useState("Sign Up");
  const [selectedValue, setSelectedValue] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const apiClient = axios.create({
    baseURL: 'https://dev-square.onrender.com',
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post('/signup', {
        username,
        name,
        email,
        userType: selectedValue,
        password,
      });
      console.log('User created:', response.data);
    } catch (error) {
      console.error('Error signing up:', error.response.data);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const values = {
      user: username,
      pass: password,
    };
    setErrors({});
    const validationErrors = LoginValidation(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await apiClient.post('/login', {
        username,
        password,
      });
      console.log('Logged in:', response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error.response.data);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">{action}</h2>
      <form onSubmit={action === "Sign Up" ? handleSignUp : handleLogin}>
        {action === "Sign Up" && (
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full py-2 px-3 border border-gray-300 rounded-md mt-4"
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              className="w-full py-2 px-3 border border-gray-300 rounded-md mt-4"
            />
            <Select onValueChange={setSelectedValue}>
              <
// @ts-ignore
              SelectTrigger
                className={`w-full py-2 px-3 border border-gray-300 rounded-md mt-4 font-medium focus:outline-none focus:ring-1 ${
                  selectedValue ? 'text-black font-normal' : 'text-gray-400'
                }`}
              >
                <SelectValue placeholder="User Type" />
              </SelectTrigger>
              <
// @ts-ignore
              SelectContent>
                <
// @ts-ignore
                SelectItem value="founder">Founder</SelectItem>
                <
// @ts-ignore
                SelectItem value="investor">Investor</SelectItem>
                <
// @ts-ignore
                SelectItem value="regular">Regular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        <input
          type={action === "Sign Up" ? "email" : "text"}
          placeholder={action === "Sign Up" ? "Email" : "Username or Email"}
          value={email}
          onChange={handleEmailChange}
          className="w-full py-2 px-3 border border-gray-300 rounded-md mt-4"
        />
        {errors.
// @ts-ignore
        user && <span className="text-red-500">{errors.user}</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full py-2 px-3 border border-gray-300 rounded-md mt-4"
        />
        {errors.
// @ts-ignore
        pass && <span className="text-red-500">{errors.pass}</span>}
        {action === "Sign Up" ? (
          <button
            type="submit"
            className="w-full py-2 px-3 bg-blue-500 text-white rounded-md mt-2 hover:bg-blue-700"
          >
            Sign Up
          </button>
        ) : (
          <button
            type="submit"
            className="w-full py-2 px-3 mt-4 bg-green-500 text-white rounded-md hover:bg-green-700"
          >
            Login
          </button>
        )}
      </form>
      <button
        onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}
        className="w-full py-2 px-3 bg-gray-500 text-white rounded-md hover:bg-gray-700 mt-2"
      >
        {action === "Sign Up" ? "Login" : "Sign Up"}
      </button>
    </div>
  );
}
