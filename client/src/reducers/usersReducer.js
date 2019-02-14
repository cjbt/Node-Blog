import { FETCH_USERS, FETCH_POSTS } from './index';

const usersReducer = (state, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;
