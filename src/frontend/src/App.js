import { useState } from "react";

import './App.css';


function App() {

  const token = 'coneofsilence';

  const [item, setItem] = useState();
  const [search, setSearch] = useState('');

  const searchItem = () => {
    fetch(`http://item-store-be.item-store.svc.cluster.local:8000/items/${search}`, { headers: { 'X-Token': `${token}` } })
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Item Store</h1>
        <input type="text" name="item" placeholder="Search for items" onChange={(e) => { setSearch(e.target.value) }} />
        <button onClick={searchItem}>Search</button>

        {item ? (
          <ul className="item-list">
            <li key={item.id}> {item.title} = {item.description} </li>
          </ul>
        ) : (
          <div className="empty">
            <p>No item to show</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
