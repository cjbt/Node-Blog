import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts';
import { FETCH_USERS } from '../reducers';
import User from './User';

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);

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
  console.log(state.users);
  return (
    <>
      {state.users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
};

export default UserList;
