import React, { useContext, useReducer } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { UserList, UserCard } from './components';
import { UserContext } from './contexts';
import { usersReducer } from './reducers';

const App = () => {
  const initialState = useContext(UserContext);
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Route exact path='/' component={UserList} />
      <Route path='/user/:id' component={UserCard} />
    </UserContext.Provider>
  );
};

export default App;
