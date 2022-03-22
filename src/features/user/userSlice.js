//import React from "react";
import { createSlice } from "@reduxjs/toolkit";

/**(alias) function createSlice
 * <State, CaseReducers extends SliceCaseReducers<State>,
 *  Name extends string = string>(options: CreateSliceOptions<State, CaseReducers, Name>)
 * : Slice<State, CaseReducers, Name>
import createSlice
   ==>A function that accepts an initial state,
    an object full of reducer functions, and a "slice name",
     and automatically generates action creators and action types
      that correspond to the reducers and state.
The reducer argument is passed to createReducer().*/

const initialState = {
  name: "",
  email: "",
  photo: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
