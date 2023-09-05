import { createSlice } from '@reduxjs/toolkit'

export const tweetSlice = createSlice({
  name: 'tweetButton',
  initialState: {
    value: false
  },
  reducers: {
    tweetButtonActive:(state)=>{
      state.value=true
    },
    tweetButtonPassive:(state)=>{
      state.value=false
    },
  }
})

export const { tweetButtonActive,tweetButtonPassive,sendTweetAction } = tweetSlice.actions

export default tweetSlice.reducer