import { configureStore } from '@reduxjs/toolkit'
import loginStatusReducer from './reducers/loginStatus'
import localToken from './reducers/localToken'
import localId from './reducers/localId'
import userInfo from './reducers/user'
import tweetButton from './reducers/tweetButton'

export default configureStore({
  reducer: {
    loginStatus:loginStatusReducer,
    localToken:localToken,
    localId:localId,
    userInfo:userInfo,
    tweetButton:tweetButton
  }
})