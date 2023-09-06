import { createSlice } from '@reduxjs/toolkit'

export const loginStatusSlice = createSlice({
  name: 'loginStatus',
  initialState: {
    value: {
      "loginStatus": localStorage.getItem("jwtToken") ? true : false,
      "localId": localStorage.getItem("localId"),
      "localToken":localStorage.getItem("jwtToken")
    }
  },
  reducers: {
    logOut:state=>{
      state.value.loginStatus=false;
      state.value.localId=localStorage.removeItem("localId");
      state.value.localToken=localStorage.removeItem("jwtToken");
    },
    logIn:(state,action)=>{
      state.value.loginStatus=true;
      state.value.localId=localStorage.setItem("localId",action.payload.id);
      state.value.localToken=localStorage.setItem("jwtToken",action.payload.token);
      state.value.localId=localStorage.getItem("localId");
      state.value.localToken=localStorage.getItem("jwtToken");
    },
    setLocalId:(state,action)=>{
      state.value.localId=localStorage.setItem("localId",action.payload)
    },
    removeLocalId:state=>{
      state.value.localId==localStorage.removeItem("localId");
    },
    setLocalToken:(state,action)=>{
      state.value.localToken=localStorage.setItem("jwtToken",action.payload)
    },
    removeLocalToken:state=>{
      state.value.localToken=localStorage.removeItem("jwtToken")
    }
  }
})

export const { logOut ,logIn,setLocalId,removeLocalId,setLocalToken,removeLocalToken} = loginStatusSlice.actions

export default loginStatusSlice.reducer