import { createSlice } from '@reduxjs/toolkit'

export const localTokenSlice = createSlice({
  name: 'localToken',
  initialState: {
    value:true
  },
  reducers: {
    setLocalToken:(state,action)=>{
      state.value=localStorage.setItem("jwtToken",action.payload)
    },
    removeLocalToken:state=>{
      state.value=localStorage.removeItem("jwtToken")
    }
  }
})

export const { setLocalToken ,removeLocalToken} = localTokenSlice.actions

export default localTokenSlice.reducer