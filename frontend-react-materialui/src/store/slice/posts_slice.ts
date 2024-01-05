import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PostInterface } from '../../pages/PostPage';
import { fetchPostAsync } from '../thunk/PostThunk';
import { RootState } from '../store';

interface PostData {
  loading: boolean;
  error: null | string;
  data?: PostInterface[];
}
export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    error: null,
    data: [] as PostInterface[],
  } as PostData,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchPostAsync.fulfilled,
        (state, action: PayloadAction<PostInterface[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchPostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'something went wrong';
      });
  },
});

export const posts = (state: RootState) => state.posts;
export default postSlice.reducer;
