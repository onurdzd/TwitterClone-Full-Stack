import { configureStore } from '@reduxjs/toolkit'
import loginStatusReducer from './reducers/loginStatus'

export default configureStore({
  reducer: {
    loginStatus:loginStatusReducer,
  }
})