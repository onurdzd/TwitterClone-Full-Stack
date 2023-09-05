import { createSlice } from '@reduxjs/toolkit'

export const localIdSlice = createSlice({
  name: 'localId',
  initialState: {
    value: localStorage.getItem("localId")
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