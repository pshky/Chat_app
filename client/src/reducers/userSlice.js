import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: '',
  token: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
     const {name, token} = actions.payload
        state.name = name
        state.token = token
    },
    resetDetails: (state, actions) => {
         state.name =''
         state.token =''
     },
  }
});

export const { setUserDetails, resetDetails } = userSlice.actions;
export default userSlice.reducer;


