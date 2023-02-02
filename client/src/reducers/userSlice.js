import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: '',
  email:'',
  token: '',
  _id:'',
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
     const {name, email, token, _id} = actions.payload
        state.name = name
        state.email= email 
        state.token = token
        state._id= _id
    },
    resetDetails: (state, actions) => {
         state.name =''
         state.email=''
         state.token =''
         state._id=''
     },
  }
});

export const { setUserDetails, resetDetails } = userSlice.actions;
export default userSlice.reducer;


