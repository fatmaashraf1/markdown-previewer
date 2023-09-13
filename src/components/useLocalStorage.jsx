import { useState } from 'react';

// Custom hook to save and retrieve data in local storage
const useLocalStorage = (key, initialValue) => {
    
  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState(storedValue || initialValue);

  // update the state and local storage
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
