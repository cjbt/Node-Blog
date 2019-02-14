import React, { useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import { UserList, UserCard } from './components';
import { UserContext } from './contexts';
import { usersReducer, FETCH_USERS } from './reducers';

const App = () => {
  const initialState = useContext(UserContext);
  const [state, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/users')
      .then(res => {
        dispatch({
          type: FETCH_USERS,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  }, [state.users.length]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Route exact path='/' render={prop => <UserList {...prop} />} />
      <Route path='/user/:id' component={UserCard} />
    </UserContext.Provider>
  );
};

export default App;
