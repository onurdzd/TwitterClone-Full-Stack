import { createSlice } from '@reduxjs/toolkit'

export const localIdSlice = createSlice({
  name: 'localId',
  initialState: {
    value: localStorage.getItem("localId")
  },
  reducers: {
    setLocalId:(state,action)=>{
      state.value=localStorage.setItem("localId",action.payload)

    },
    removeLocalId:state=>{
      state.value=localStorage.removeItem("localId");
    }
  }
})

export const { setLocalId ,removeLocalId} = localIdSlice.actions

export default localIdSlice.reducer