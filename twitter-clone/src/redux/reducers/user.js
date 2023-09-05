import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
    value: {
        "userId":localStorage.getItem("localId"),
        "username":"",
        "tweets":[]
    }
  },
  reducers: {
    setUserId:(state,action)=>{
      state.value=localStorage.setItem("localId",action.payload)
    }
  }
})

export const { setUserId } = userSlice.actions

export default userSlice.reducer