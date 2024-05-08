"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Profile {
  _id: any;
  user: any;
  fullName: string;
  userName: string;
  profilePic: string;
  gender: string;
}

const initialState: Profile = {
  _id:"",
  fullName: "",
  userName: "",
  profilePic: "",
  gender: "",
  user: undefined
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state._id = action.payload.user._id;
      state.fullName = action.payload.user.fullName;
      state.userName = action.payload.user.userName;
      state.profilePic = action.payload.user.profilePic;
      state.gender = action.payload.user.gender;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
