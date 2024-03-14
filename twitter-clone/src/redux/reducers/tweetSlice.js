// tweetSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const tweetSendToastify = () => toast("Tweet Gönderildi!");

export const fetchTweets = createAsyncThunk(
    "tweets/fetchTweets",
    async (tweetData) => {
        const { loginStatus} = tweetData;
  
      if (loginStatus.mockStatus !== "true") {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}tweet`);
        return response.data;
      } else {
        const response = await axios.get(`${import.meta.env.VITE_API_MOCK_URL}tweets`);
        return response.data;
      }
    }
  );

export const sendTweet = createAsyncThunk(
  "tweets/sendTweet",
  async (tweetData) => {
    const { textedTweet, username, loginStatus,handleGetTweet,tweetsLength} = tweetData;
    //useState değeri burada güncellenemiyor
    // Önce login kontrolü yap
    if (loginStatus.mockStatus !== "true") {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}tweet`,
          {
            userId: loginStatus.localId,
            tweetText: textedTweet,
            tweetUsername: username,
          }
        );
        tweetSendToastify();
        handleGetTweet();
        return response.data;
      } catch (error) {
        throw error.response.data.errors;
      }
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_MOCK_URL}tweets`,
          {
            id:
              tweetsLength === 2
                ? 4
                : tweetsLength === 1
                ? 5
                : tweetsLength === 0
                ? 6
                : tweetsLength + 1,
            userId: loginStatus.localId,
            tweetUsername: username,
            tweetText: textedTweet,
            tweetCreatedAt: Date.now(),
            name: localStorage.getItem("name"),
          }
        );
        tweetSendToastify();
        return response.data;
      } catch (error) {
        throw error.response.data.errors;
      }
    }
  }
);


const tweetSlice = createSlice({
    name: "tweets",
    initialState: {
      tweets: [],
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchTweets.fulfilled, (state, action) => {
          state.tweets = action.payload;
        })
        .addCase(sendTweet.fulfilled, (state, action) => {
          state.tweets = [...state.tweets, action.payload];
        });
    },
  });

export default tweetSlice.reducer;
