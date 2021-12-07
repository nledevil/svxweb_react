import { ApolloProvider } from '@apollo/client';
import React, { createContext, useContext, useReducer } from 'react';
import { apolloClient } from '../config/graphConfig';
import { stateReducer } from './stateReducer';

let iState = {};

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const ApolloWrapper = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    <StateProvider initialState={{ ...iState }} reducer={stateReducer}>
      {children}
    </StateProvider>
  </ApolloProvider>
);

export const useStateValue = () => useContext(StateContext);
