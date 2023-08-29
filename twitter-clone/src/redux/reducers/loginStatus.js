import { createSlice } from '@reduxjs/toolkit'

export const loginStatusSlice = createSlice({
  name: 'loginStatus',
  //backend yapılınca burası false başlayabilir
  initialState: {
    value: true
  },
  reducers: {
    logOut:state=>{
      state.value=false;
    },
    logIn:state=>{
      state.value=true;
    }
  }
})

export const { logOut ,logIn} = loginStatusSlice.actions

export default loginStatusSlice.reducer