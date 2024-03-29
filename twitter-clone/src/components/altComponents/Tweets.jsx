import { tr } from "date-fns/locale";
import mercedes from "./../../assets/mercedes.jpeg";
import owebp from "./../../assets/O.webp";
import { formatDistanceToNowStrict } from "date-fns";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Tweets = ({ tweet, handleGetTweet, setTweets,tweets }) => {
  const inputDateString = tweet?.tweetCreatedAt;
  const inputDate = new Date(inputDateString);
  const deleteTweetToastify = () => toast("Tweet silindi!");
  const deleteTweetErrorToastify = () =>
    toast("Tweet sana ait değil silemezsin!");
  const [deleteMenuOn, setDeleteMenuOn] = useState(false);
  const username = useSelector((item) => item.loginStatus.value.username);
  const loginStatus = useSelector((state) => state.loginStatus.value);

  const [userWithTweets, setUserWithTweets] = useState([]);
  const getUserWithTweets = async () => {
    await axios
      .get(`${import.meta.env.VITE_API_URL}tweet/tweetsWithUser`)
      .then((res) => setUserWithTweets(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUserWithTweets();
  }, []);

  const deleteTweet = () => {
    const params = {
      tweetUsername: username,
    };
    if (loginStatus.mockStatus != "true") {
      axios
        .delete(`${import.meta.env.VITE_API_URL}tweet/${tweet.tweetId}`, {
          params,
        })
        .then((res) => {
          if (res.status == 200) {
            setDeleteMenuOn(false);
            deleteTweetToastify();
            handleGetTweet();
          }
        })
        .catch((err) => {
          err;
          deleteTweetErrorToastify();
        });
    } else {
      setTweets(() => tweets.filter(item => item.id != tweet.id));
      deleteTweetToastify();

      // axios
      //   .delete(`${import.meta.env.VITE_API_MOCK_URL}tweets/${tweet.id}`)
      //   .then((res) => {
      //     if (res.status == 200) {
      //       setDeleteMenuOn(false);
      //       deleteTweetToastify();
      //       setTweets(res.data);
      //     }
      //   })
      //   .catch((err) => {
      //     err;
      //     deleteTweetErrorToastify();
      //   });
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      !event.target.closest("#deleteMenu-container") && setDeleteMenuOn(false);
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [deleteMenuOn]);

  return (
    <>
      <main className="h-full flex flex-col w-full max-[600px]:px-2">
        <section className="border-b-slate-100 border-b-[1px] pt-3 w-full">
          <div className="sm:px-4 px-1 max-[600px]:px-0 w-full">
            <div className="flex w-full pb-2">
              <div className="rounded-full min-w-[40px] pt-2">
                <img src={owebp} className="rounded-full"></img>
              </div>
              <div className="w-full">
                <div className="flex flex-col pl-2 max-[600px]:pl-0">
                  <div className="flex items-center w-full">
                    <div className="font-bold flex text-base items-center min-w-fit">
                      {tweet.name
                        ? tweet.name
                        : userWithTweets.find(
                            (item) => item.username == tweet.tweetUsername
                          )?.name}
                      <span className="max-[600px]:scale-75 scale-90 max-[600px]:p-0 hover:bg-slate-200 rounded-full p-1 cursor-pointer px-1">
                        <svg width="20" height="25" fill="#1d9bf0">
                          <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="font-light text-sm max-[600px]:text-xs text-slate-500">
                      {tweet.tweetUsername}
                    </div>
                    <div className="font-light text-sm max-[600px]:text-xs text-slate-500 ml-3 min-w-[50px]">
                      <span className="mr-1 font-bold">·</span>
                      {formatDistanceToNowStrict(inputDate, {
                        locale: tr,
                      }).substring(0, 6)}
                    </div>
                    <div className="scale-75 w-full flex justify-end">
                      {!deleteMenuOn ? (
                        <div
                          onClick={() => setDeleteMenuOn(true)}
                          className="hover:bg-slate-100 rounded-full p-1 cursor-pointer relative z-10"
                        >
                          <svg
                            id="deleteMenu-container"
                            width="22"
                            height="25"
                            className="hover:rounded-full relative z-0"
                          >
                            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                          </svg>
                        </div>
                      ) : (
                        <div
                          className="font-bold text-red-500 rounded-full p-1 hover:bg-slate-200 cursor-pointer"
                          onClick={deleteTweet}
                        >
                          Kaldır
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="max-h-[568px]">{tweet.tweetText}</div>
                  <div className="flex  py-2 w-full max-[600px]:justify-start max-[600px]:gap-2 justify-between sm:justify-start sm:gap-5">
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

        {/* <section className="border-b-slate-100 border-b-[1px] pt-3 ">
          <div className="sm:px-4 px-1 max-[600px]:px-0">
            <div className="flex w-full pb-2">
              <div className="rounded-full min-w-[40px] max-[600px]:pt-2">
                <img src={owebp} className="rounded-full"></img>
              </div>
              <div>
                <div className="flex flex-col pl-2">
                  <div className="flex items-center">
                    <div className="font-bold flex text-base items-center">
                      Onur
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
        </section> */}
      </main>
    </>
  );
};
