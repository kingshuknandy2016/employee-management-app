import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PostInterface } from '../../pages/PostPage';

export const fetchPostAsync = createAsyncThunk('posts/fetchPost', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const posts = response.data as any as PostInterface[];
  // console.log(posts);
  return posts;
});
