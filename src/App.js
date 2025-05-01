import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listTodos } from './graphql/queries'; // 假設你有一個 listTodos

function App() {
  const [todos, setTodos] = useState([]);
  const client = generateClient();

  useEffect(() => {
    async function fetchTodos() {
      try {
        const result = await client.graphql({
          query: listTodos
        });
        setTodos(result.data.listTodos.items);
      } catch (err) {
        console.error('Error fetching todos', err);
      }
    }
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {todos.map(t => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
