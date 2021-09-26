//setup data layer
//we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// That prepared the data layer

export const StateContext = createContext();

// Wrap our app and provide the data layer

export const StateProvider = ({reducer, initialState, children}) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
  )
  
};

//this is how we use it inside of a component - below is a custom prop
export const useStateValue = () => useContext(StateContext);  