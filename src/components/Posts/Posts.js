import React from 'react';
import Post from './Post/Post';
import PostDialog from './PostDialog/PostDialog';
const Posts = () => {
  return (
    <>
      <PostDialog />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
