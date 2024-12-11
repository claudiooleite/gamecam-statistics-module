import React, { createContext, useState, useContext } from 'react';

import { dummyData } from '../data/dummyData';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  // Initialize game data state with dummyData
  const [data, setData] = useState(dummyData);

  // Function to update the game data
  const updateGameData = (newData) => {
    setData(prevData => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <GameContext.Provider value={{ data, updateGameData }}>
      {children}
    </GameContext.Provider>
  );
};

// Create a custom hook to use the GameContext
export const useGame = () => {
  return useContext(GameContext);
};
