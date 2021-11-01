import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Post from './Post/Post';
import PostDialog from './PostDialog/PostDialog';

const Posts = ({ postId, setPostId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <>
      <PostDialog />
      {posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            postId={postId}
            setPostId={setPostId}
          />
        ))}
    </>
  );
};

export default Posts;
