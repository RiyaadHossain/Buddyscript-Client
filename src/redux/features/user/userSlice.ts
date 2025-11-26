import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserProfile {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface IUserState {
  [x: string]: any;
  profile: IUserProfile | null;
}

const initialState: IUserState = {
  profile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<IUserProfile>) => {
      state.profile = action.payload;
    },
    clearUserProfile: (state) => {
      state.profile = null;
    },
  },
});

export const { setUserProfile, clearUserProfile } = userSlice.actions;
export default userSlice.reducer;
