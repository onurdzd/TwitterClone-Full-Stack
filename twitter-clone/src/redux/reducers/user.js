import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
    value: {
        "userId":localStorage.getItem("localId"),
        "username":localStorage.getItem("username"),
        "tweets":[]
    }
  },
  reducers: {
    setUserId:(state,action)=>{
      state.value=localStorage.setItem("localId",action.payload)
    },
    setUserName:(state,action)=>{
      state.value=localStorage.setItem("localId",action.payload)
    }
  }
})

export const { setUserId,setUserName } = userSlice.actions

export default userSlice.reducer