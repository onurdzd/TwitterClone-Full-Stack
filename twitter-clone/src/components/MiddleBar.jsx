import { useEffect, useState } from "react";
import owebp from "../assets/O.webp";
import { Tweets } from "./altComponents/Tweets";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import mercedes from "../assets/mercedes.jpeg";

const MiddleBar = (props) => {
  const {
    tweets,
    getTweets,
    textedTweet,
    setTextedTweet,
    gonderButtonRef,
    profilMenuOn,
    setprofilMenuOn,
  } = props;
  const tweetSendToastify = () => toast("Tweet Gönderildi!");
  const loginStatus = useSelector((state) => state.loginStatus.value);
  const username = useSelector((item) => item.loginStatus.value.username);
  const navigate = useNavigate();
  const [bordered, setBordered] = useState(false);

  const sendTweet = () => {
    setTextedTweet("");
    if (loginStatus.mockStatus != "true") {
    axios
      .post(`${import.meta.env.VITE_API_URL}tweet`, {
        userId: loginStatus.localId,
        tweetText: textedTweet,
        tweetUsername: username,
      })
      .then((response) => {
        tweetSendToastify();
        getTweets();
      })
      .catch((err) => console.log(err.response.data.errors));
  }else{
    axios
    .post(`${import.meta.env.VITE_API_MOCK_URL}tweets`, {
      tweetId:tweets?.length-1,
      userId: loginStatus.localId,
      tweetUsername: username,
      tweetText: textedTweet,
      tweetCreatedAt:Date.now(),
      name:localStorage.getItem("name"),
    })
    .then((response) => {
      tweetSendToastify();
      getTweets();
    })
    .catch((err) => console.log(err.response.data.errors));
  }}

  return (
    <>
      <section className="max-[600px]:w-full lg:w-[45%] max-[1025px]:w-[85%] flex flex-col items-center border-[1px] min-h-[100%] max-w-[600px]">
        <div className=" w-full">
          <div className="flex flex-col w-full h-[100px] border-b-[1px] max-[600px]:px-2">
            <section className="hidden max-[600px]:flex items-center gap-2 text-xl justify-between pt-2">
              <div className="flex items-center w-full ">
                <div
                  id="menu-container"
                  onClick={() => setprofilMenuOn(true)}
                  className="rounded-full cursor-pointer absolute"
                >
                  <img src={owebp} className="rounded-full"></img>
                </div>
                <div
                  onClick={() => navigate("/")}
                  className="max-w-fit hover:bg-slate-100 rounded-full p-1 scale-125 mx-auto cursor-pointer"
                >
                  <svg width="25" height="25">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </div>
              </div>
            </section>
            <header className="max-[600px]:hidden font-bold text-xl tracking-wide pl-5 pt-2">
              Anasayfa
            </header>
            <div className="flex pt-5 gap-3">
              <div
                onClick={() => setBordered(false)}
                className="cursor-pointer w-full flex justify-center font-medium text-slate-400"
              >
                <div
                  className={`max-[600px]:pb-3 pb-2  ${
                    !bordered &&
                    "border-b-[5px] border-b-blue-500 font-bold text-black"
                  }  max-w-fit`}
                >
                  Sana Özel
                </div>
              </div>
              <div
                onClick={() => setBordered(true)}
                className="cursor-pointer w-full flex justify-center font-medium text-slate-400"
              >
                <div
                  className={`pb-2  ${
                    bordered &&
                    "max-[600px]:pb-3 border-b-[5px] border-b-blue-500 font-bold text-black"
                  }  max-w-fit`}
                >
                  Takip edilenler
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-b-[1px] max-[600px]:hidden ">
            <div className="flex px-3">
              <div className="rounded-full min-w-[40px] pt-4">
                <img
                  onClick={() => navigate("/profile")}
                  src={owebp}
                  className="rounded-full mx-auto cursor-pointer"
                ></img>
              </div>
              <div className="w-full">
                <input
                  value={textedTweet}
                  onChange={(e) => {
                    setTextedTweet(e.target.value);
                  }}
                  ref={gonderButtonRef}
                  placeholder="Neler oluyor?"
                  className={`pl-2 py-5 text-xl ease-in-out duration-300 font-light h-[60px] w-full focus:outline-none focus:h-[100px]`}
                ></input>
                <div className="flex items-center justify-between py-2">
                  <div className="flex gap-1">
                    <div className="scale-90 hover:bg-blue-100 cursor-pointer rounded-full p-[7px]">
                      <svg width="22" height="21.7" fill="#1d9bf0">
                        <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                      </svg>
                    </div>
                    <div className="scale-90 hover:bg-blue-100 cursor-pointer rounded-full p-[7px]">
                      <svg width="22" height="21.7" fill="#1d9bf0">
                        <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
                      </svg>
                    </div>
                    <div className="scale-90 hover:bg-blue-100 cursor-pointer rounded-full p-[7px]">
                      <svg width="22" height="21.7" fill="#1d9bf0">
                        <path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path>
                      </svg>
                    </div>
                    <div className="scale-90 hover:bg-blue-100 cursor-pointer rounded-full p-[7px]">
                      <svg width="22" height="21.7" fill="#1d9bf0">
                        <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
                      </svg>
                    </div>
                    <div className="scale-90 hover:bg-blue-100 cursor-pointer rounded-full p-[7px]">
                      <svg width="22" height="21.7" fill="#1d9bf0">
                        <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path>
                      </svg>
                    </div>
                    <div className="scale-90 hover:bg-blue-100 cursor-pointer rounded-full p-[7px]">
                      <svg width="22" height="21.7" fill="#1d9bf0">
                        <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="pr-2">
                    <button
                      disabled={textedTweet == ""}
                      onClick={sendTweet}
                      className="bg-[#1d9bf0] rounded-full px-4 py-2 lg:min-w-[50px] text-white font-bold disabled:bg-blue-300"
                    >
                      Gönder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {tweets?.length > 0 ? (
            [...tweets]
              .sort((a, b) => {
                return new Date(b.tweetCreatedAt) - new Date(a.tweetCreatedAt);
              })
              .map((tweet, index) => (
                <div key={index}>
                  <Tweets tweet={tweet} getTweets={getTweets}></Tweets>
                </div>
              ))
          ) : (localStorage.getItem("username")!="testUser" ?
          <div className="w-full text-center mt-10">Yükleniyor...</div>:
          <section className="border-b-slate-100 border-b-[1px] pt-3 ">
          <div className="sm:px-4 px-1 max-[600px]:px-0">
            <div className="flex w-full pb-2">
              <div className="rounded-full min-w-[40px] max-[600px]:pt-2">
                <img src={owebp} className="rounded-full"></img>
              </div>
              <div>
                <div className="flex flex-col pl-2">
                  <div className="flex items-center">
                    <div className="font-bold flex text-base items-center">
                      Test User
                      <span className="max-[600px]:scale-75 scale-90 max-[600px]:p-0 hover:bg-slate-200 rounded-full p-1 cursor-pointer px-1">
                        <svg width="20" height="25" fill="#1d9bf0">
                          <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="font-light text-sm max-[600px]:text-xs text-slate-500">
                      @o_tw
                    </div>
                  </div>
                  <div className="max-h-[568px]">
                    <div className="pt-1">
                      ⚡️560 km menzile sahip yeni Mercedes EQA tanıtıldı!
                      <p> 🔋70,5 kWh batarya!</p> <p>🟢560 km menzil</p>
                      <p> 🟢190 HP motor (140 kW)</p>
                      <p> 🟢110 kW DC, 11 kW AC şarj!</p>
                      <p>🟢Standart ısı pompası!</p>
                    </div>
                    <div className="w-full overflow-hidden rounded-2xl pt-2">
                      <img src={mercedes} className="w-full"></img>
                    </div>
                  </div>
                  <div className="flex justify-between py-2 ">
                    <div className="flex max-[600px]:gap-0 lg:gap-2 gap-1 sm:items-end max-[600px]:items-center">
                      <div className="max-[600px]:scale-75 scale-90 max-[600px]:p-0 hover:bg-slate-200 rounded-full p-1 cursor-pointer">
                        <svg width="22" height="21.7" fill="grey">
                          <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                        </svg>
                      </div>
                      <div className="text-sm max-[600px]:text-xs text-slate-500">
                        17
                      </div>
                    </div>
                    <div className="flex  max-[600px]:gap-0 lg:gap-2 gap-1 sm:items-end max-[600px]:items-center hover:text-blue-300">
                      <div className="max-[600px]:scale-75 scale-90 max-[600px]:p-0 hover:bg-slate-200 rounded-full p-1 cursor-pointer">
                        <svg width="22" height="21.7" fill="grey">
                          <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                        </svg>
                      </div>
                      <div className="text-sm max-[600px]:text-xs text-slate-500">
                        17
                      </div>
                    </div>
                    <div className="flex  max-[600px]:gap-0 lg:gap-2 gap-1 sm:items-end max-[600px]:items-center">
                      <div className="max-[600px]:scale-75 scale-90 max-[600px]:p-0 hover:bg-slate-200 rounded-full p-1 cursor-pointer">
                        <svg width="22" height="21.7" fill="grey">
                          <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                        </svg>
                      </div>
                      <div className="text-sm max-[600px]:text-xs text-slate-500">
                        17
                      </div>
                    </div>
                    <div className="flex  max-[600px]:gap-0 lg:gap-2 gap-1 sm:items-end max-[600px]:items-center">
                      <div className="max-[600px]:scale-75 scale-90 max-[600px]:p-0 hover:bg-slate-200 rounded-full p-1 cursor-pointer">
                        <svg width="22" height="21.7" fill="grey">
                          <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                        </svg>
                      </div>
                      <div className="text-sm max-[600px]:text-xs text-slate-500">
                        45,3 B
                      </div>
                    </div>
                    <div className="flex  max-[600px]:gap-0 lg:gap-2 gap-1 sm:items-end max-[600px]:items-center pl-5 max-[600px]:pl-2">
                      <div className="max-[600px]:scale-75 scale-90 max-[600px]:p-0 hover:bg-slate-200 rounded-full p-1 cursor-pointer">
                        <svg width="22" height="21.7" fill="grey">
                          <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          )}
        </div>
      </section>
    </>
  );
};

export default MiddleBar;
