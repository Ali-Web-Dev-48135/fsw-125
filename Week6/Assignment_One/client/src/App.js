import {useState, useEffect} from 'react';
import axios from 'axios';
import RecycledItem from './components/RecycledItem';
import AddItem from './components/AddItem';

import './App.css';
function App() {

  const [recycledItems, setRecycledItems] = useState([]);

  const getRecycledItems = () => {

    axios.get('/recycledItem')
    // .then(response => console.log(response))
    .then(response => setRecycledItems(response.data))
    .then(response => console.log(response))
    .catch(error => console.log(error));
  };

  const addRecycledItem = (itemToAdd) => {
  
    axios.post("/recycledItem", itemToAdd)
      .then(response => {
        setRecycledItems( previousItems => [...previousItems, response.data]);
        
      })
      .catch(error => console.log(error))
    
  };

  const deleteItem = (itemId) => {
    axios.delete(`/recycledItem/${itemId}`)
    .then(response => {
      setRecycledItems(prevItems => prevItems.filter(element => element.Id !== itemId))
    } )
    .catch(error => console.log(error))
  };

  const editItem = (updates, itemId) => {
    axios.put(`/recycledItem/${itemId}`, updates)
    .then(response => {
      setRecycledItems(prevItems => prevItems.map(element => element.Id !== itemId ? element : response.data))
    })
    .catch(error => console.log(error))

  };

  useEffect(() => {
    getRecycledItems();
  }, []);

  
  const itemList = recycledItems.map(item => <RecycledItem
    {...item}
    deleteItem={deleteItem}
    editItem={editItem}
    key={item.Id}/>
    
    )

  return (
    <div className='App'>
      <AddItem btnText="Add Item" submit={addRecycledItem} />
      {itemList}
    </div>
  );
}

export default App;
