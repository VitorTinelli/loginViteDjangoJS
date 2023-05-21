import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    mostrarUsuarios();
  }, []);

  const mostrarUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:8000/cadastros/');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const cadastrar = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/cadastros/', {
        nome,
        cpf,
        email,
      });

      if (response.status === 201) {
        console.log('Cadastro realizado com sucesso!');
        mostrarUsuarios(); 
      } } catch (error) {
      console.error(error);
    }
  };

  const deletar = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/cadastros/${id}`);

      if (response.status === 204) {
        mostrarUsuarios();
      } } catch (error) {

      console.error(error);
    }
  };

  return (
    <div>
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={cadastrar}>
        <div>
          <label>Nome:</label><br></br>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div><br></br>
        <div>
          <label>CPF:</label><br></br>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div><br></br>
        <div>
          <label>Email:</label><br></br>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br></br>
        <button type="submit">Cadastrar</button>
      </form>

      <h2>Lista de Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>{user.cpf}</td>
              <td>{user.email}</td>
              <td><button onClick={() => deletar(user.id)}>Deletar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
