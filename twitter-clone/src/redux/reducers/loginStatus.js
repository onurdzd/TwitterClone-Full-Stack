import { createSlice } from '@reduxjs/toolkit'

export const loginStatusSlice = createSlice({
  name: 'loginStatus',
  initialState: {
    value: localStorage.getItem("jwtToken") ? true : false 
  },
  reducers: {
    logOut:state=>{
      state.value=false;
    },
    logIn:state=>{
      state.value=true;
    },
    checkLoginStatus:(state,action)=>
      state.value=action.payload
  }
})

export const { logOut ,logIn,checkLoginStatus} = loginStatusSlice.actions

export default loginStatusSlice.reducer