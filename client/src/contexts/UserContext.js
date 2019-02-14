import { createContext } from 'react';

const UserContext = createContext({
  users: [],
  posts: [],
  id: null
});

export default UserContext;
