import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts';
import { FETCH_POSTS } from '../reducers';
import Post from './Post';

const UserCard = props => {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/${props.match.params.id}/post`)
      .then(res => {
        dispatch({
          type: FETCH_POSTS,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  }, []);
  console.log(state.posts);
  return (
    <div>
      {state.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
      <button onClick={() => props.history.push('/')}>GO BACK</button>
    </div>
  );
};

export default UserCard;
