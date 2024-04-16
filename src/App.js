import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import ItemList from './ItemList';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name") sortedItems = items.slice().sort((a,b) => a.name.localeCompare(b.name));
  if(sortBy === "checked") sortedItems = items.slice().sort((a,b) => Number(a.isChecked) - Number(b.isChecked));

  function handleAddItems(item){
      setItems(items =>[...items, item]); 
  }

  function handleDeleteItem(id){
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) => 
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
        )
      );
  
  } 
  
  function handleClearList(){
    const confirmed = window.confirm("Are you sure you want to clear?");
    if (confirmed){
      setItems([]);
    }
  }

  return (
    <div className="App">
      <Header/>
      <Form onAddItem={handleAddItems}/>
      <ItemList 
        items={sortedItems}
        onDeleteItem={handleDeleteItem}
        onCheckedItem={handleCheckedItems}
      />
      <br/>
      <button className="Clear" onClick={handleClearList}>Clear</button>
      <br/>
      <select className='Sort' value={sortBy} onChange={(e) =>setSortBy(e.target.value)}>
        <option value="input">Sort by Input</option>
        <option value="name">Sort by name</option>
        <option value="checked">Sort by check status order</option>
      </select>
      <Footer items={items}/>
    </div>
  );
}

export default App;

