import { configureStore } from '@reduxjs/toolkit'
import loginStatusReducer from './reducers/loginStatus'
import userInfo from './reducers/user'

export default configureStore({
  reducer: {
    loginStatus:loginStatusReducer,
    userInfo:userInfo,
  }
})