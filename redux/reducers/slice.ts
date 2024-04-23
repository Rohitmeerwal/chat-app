import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Profile {
  fullName: string;
  userName: string;
  profilePic: string;
  gender: string;
}

const initialState: Profile = {
  fullName: "",
  userName: "",
  profilePic: "",
  gender: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.fullName = action.payload.fullName;
      state.userName = action.payload.userName;
      state.profilePic = action.payload.profilePic;
      state.gender = action.payload.gender;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
