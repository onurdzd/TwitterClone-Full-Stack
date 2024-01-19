import { createSlice } from '@reduxjs/toolkit'

export const loginStatusSlice = createSlice({
  name: 'loginStatus',
  initialState: {
    value: {
      "loginStatus": localStorage.getItem("jwtToken") ? true : false,
      "localId": localStorage.getItem("localId"),
      "localToken":localStorage.getItem("jwtToken"),
      "username":localStorage.getItem("username"),
      "name":localStorage.getItem("name"),
      "mockStatus": localStorage.getItem("mockStatus") ? localStorage.getItem("mockStatus") : false,
    }
  },
  reducers: {
    logOut:state=>{
      state.value.loginStatus=false;
      localStorage.removeItem("localId");
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("username");
      localStorage.removeItem("name");
      localStorage.removeItem("mockStatus");
    },
    logIn:(state,action)=>{
      state.value.loginStatus=true;
      localStorage.setItem("localId",action.payload.id);
      state.value.localId=localStorage.getItem("localId");
      localStorage.setItem("jwtToken",action.payload.token);
      state.value.localToken=localStorage.getItem("jwtToken");
      localStorage.setItem("username",action.payload.username);
      state.value.username=localStorage.getItem("username");
      localStorage.setItem("name",action.payload.name);
      state.value.name=localStorage.getItem("name");
      localStorage.setItem("mockStatus",action.payload.mockStatus);
      state.value.mockStatus=localStorage.getItem("mockStatus");
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
    },
    setLocalUsername:(state,action)=>{
      state.value.username=localStorage.setItem("username",action.payload)
    },
    removeLocalUsername:state=>{
      state.value.username=localStorage.removeItem("username")
    },
    setLocalName:(state,action)=>{
      state.value.name=localStorage.setItem("name",action.payload)
    },
    removeLocalName:state=>{
      state.value.name=localStorage.removeItem("name")
    },
    setMockStatus:(state,action)=>{
      state.value.mockStatus=localStorage.setItem("mockStatus",action.payload)
    },
    removeMockStatus:state=>{
      state.value.mockStatus=localStorage.removeItem("mockStatus")
    }
  }
})

export const { logOut ,logIn,setLocalId,removeLocalId,setLocalToken,removeLocalToken,setLocalUsername,removeLocalUsername,setLocalName,removeLocalName,setMockStatus,removeMockStatus} = loginStatusSlice.actions

export default loginStatusSlice.reducer