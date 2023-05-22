import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Loginpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
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
      }
    } catch (error) {
      setError('Usuário ou senha incorretos!')
    }
  };


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} method='POST'>
        <div>
          <label>Usuário:</label><br></br>
          <input
            type="text"
            value={username}
            onChange={(user) => setUsername(user.target.value)}
          />
        </div><br></br>
        <div>
          <label>Senha:</label><br></br>
          <input
            type="password"
            value={password}
            onChange={(senha) => setPassword(senha.target.value)}
          />
        </div><br></br>
        <button type="submit">Logar</button><br></br>
        <p style={{color: 'red'}}>{error}</p>
      </form>
    </div>
  );
}

export default Loginpage;
