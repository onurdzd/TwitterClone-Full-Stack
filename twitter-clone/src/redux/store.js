import { configureStore } from '@reduxjs/toolkit'
import loginStatusReducer from './reducers/loginStatus'
import tweetReducer from './reducers/tweetSlice'

export default configureStore({
  reducer: {
    loginStatus:loginStatusReducer,
    tweets: tweetReducer,
  }
})