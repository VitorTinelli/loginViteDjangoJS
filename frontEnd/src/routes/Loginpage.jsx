import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Loginpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login/', {
        username,
        password,
      });

      if (response.status === 200) {
        navigateTo('/view')
      } else {
        navigateTo('/')
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} method='POST'>
        <div>
          <label>Username:</label><br></br>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div><br></br>
        <div>
          <label>Password:</label><br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Loginpage;
