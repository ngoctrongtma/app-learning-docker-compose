// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setData("cant't get data from backend");
        console.error("There was an error fetching data!", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;