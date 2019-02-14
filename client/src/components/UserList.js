import React, { useContext } from 'react';

import { UserContext } from '../contexts';
import User from './User';

const UserList = () => {
  const { state } = useContext(UserContext);

  return (
    <>
      {state.users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
};

export default UserList;
