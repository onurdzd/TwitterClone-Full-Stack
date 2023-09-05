import { createSlice } from '@reduxjs/toolkit'

export const localIdSlice = createSlice({
  name: 'localToken',
  initialState: {
    value: ""
  },
  reducers: {
    setLocalId:(state,action)=>{
      state.value=action.payload;
    },
    removeLocalId:state=>{
      state.value="";
    }
  }
})

export const { setLocalId ,removeLocalId} = localIdSlice.actions

export default localIdSlice.reducer