import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import HikerItem from './components/HikerItem';
import HikerForm from './components/HikerForm';

function App() {
  const [hikers, setHikers] = useState([]);

  useEffect(() => {
    async function loadHikers() {
      const response = await api.get('/hikers');

      setHikers(response.data);
    }

    loadHikers();
  }, []);

  async function handleAddHiker(data) {
    const response = await api.post('/hikers', data);

    setHikers([...hikers, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Add Hiker</strong>
        <HikerForm onSubmit={handleAddHiker}/>
      </aside>
      <main>
        <ul>
          {hikers.map( hiker => (
            <HikerItem key={hiker._id} hiker={hiker}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
