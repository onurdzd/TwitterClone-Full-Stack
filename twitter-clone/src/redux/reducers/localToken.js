import { createSlice } from '@reduxjs/toolkit'

export const localTokenSlice = createSlice({
  name: 'localToken',
  initialState: {
    value: localStorage.getItem("jwtToken")
  },
  reducers: {
    setLocalToken:(state,action)=>{
      state.value=action.payload;
    },
    removeLocalToken:state=>{
      state.value="";
    }
  }
})

export const { setLocalToken ,removeLocalToken} = localTokenSlice.actions

export default localTokenSlice.reducer