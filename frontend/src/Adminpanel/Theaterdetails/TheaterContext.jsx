import React, { createContext, useState } from 'react';

export const TheaterContext = createContext();

export const TheaterProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries((prev) => [...prev, entry]);
  };

  const updateEntry = (index, updatedEntry) => {
    const updatedEntries = [...entries];
    updatedEntries[index] = updatedEntry;
    setEntries(updatedEntries);
  };

  const deleteEntry = (index) => {
    setEntries((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <TheaterContext.Provider
      value={{ entries, addEntry, updateEntry, deleteEntry }}
    >
      {children}
    </TheaterContext.Provider>
  );
};
