import { configureStore } from '@reduxjs/toolkit'
import loginStatusReducer from './reducers/loginStatus'
import localToken from './reducers/localToken'
import localId from './reducers/localId'

export default configureStore({
  reducer: {
    loginStatus:loginStatusReducer,
    localToken:localToken,
    localId:localId,
  }
})