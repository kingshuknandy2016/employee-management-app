import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth_slice';
import { postSlice } from './posts_slice';

const rootReducerSlice = combineReducers({
  auth: authSlice.reducer,
  posts: postSlice.reducer,
});
export default rootReducerSlice;
