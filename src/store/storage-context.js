import { createContext, useEffect, useState } from "react";

const StorageContext = createContext({
  itemsInStorage: [],
  message: '',
  insertItem: (obj) => {},
  getItems: () => {},
  removeAllItems: () => {},
  showMessage: (mess) => {},
});

export const StorageContextProvider = (props) => {
  const initialValue = localStorage.getItem('items') ? JSON.parse(localStorage.getItem("items")) : [];
  const [items, setItems] = useState(initialValue);
  const [message, setMessage] = useState('');

  const insertItem = (obj) => {
    setItems((prevItems) => (prevItems = [...items, obj]));
    console.log(items);
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(items));
  };

  const removeAllItems = () => {
    setItems(prevItems => prevItems = [])
    localStorage.removeItem('items');
  }

  const getItems = () => {
    return items;
  };

  const newMessage = (message) => {
    setMessage(prevMessage => prevMessage = message);
  }

  const StorageContextReturn = {
    itemsInStorage: items,
    message,
    insertItem,
    getItems,
    removeAllItems,
    newMessage,
  };

  return (
    <StorageContext.Provider value={StorageContextReturn}>
      {props.children}
    </StorageContext.Provider>
  );
};

export default StorageContext;
