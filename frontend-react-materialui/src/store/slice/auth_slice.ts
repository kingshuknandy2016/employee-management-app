import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface LoggedUser {
  id: number;
  username: string;
  role: string | undefined;
}
export interface AuthInterface {
  isAuthenticated: boolean;
  user: LoggedUser;
}
const initialState: AuthInterface = {
  isAuthenticated: false,
  user: { id: 0, username: '', role: undefined },
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<LoggedUser>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.user = { id: 0, username: '', role: '' };
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

//Other state access: Not used Anywhere
export const isAuthenticated = (state: RootState) => state.auth.isAuthenticated;
