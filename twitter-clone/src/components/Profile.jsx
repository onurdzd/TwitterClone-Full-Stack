import { useEffect, useRef, useState } from "react";
import "../App.css";
import LeftBar from "./LeftBar";
import { Messages } from "./Messages";
import { Tweets } from "./altComponents/Tweets";
import RightBar from "./RightBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import owebp from "../assets/O.webp";
import axios from "axios";

export const Profile = () => {
  const [tweets, setTweets] = useState([]);
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.loginStatus.value);
  const user = useSelector((item) => item.loginStatus.value);
  const [profilMenuOn, setprofilMenuOn] = useState(false);
  const [bordered, setBordered] = useState(0);

  const gonderButtonRef = useRef(null);
  const focusGonderButton = () => {
    if (gonderButtonRef.current) {
      gonderButtonRef.current.focus();
    }
  };

  useEffect(() => {
    if (!loginStatus.loginStatus) {
      alert("Önce login olmalısın!");
      navigate("/login");
    }
  }, [loginStatus]);

  const getTweets = async () => {
    await axios
      .get(`${import.meta.env.VITE_API_URL}tweet`)
      .then((res) => {
        const userTweets = res.data?.filter(
          (item) => item.tweetUsername == user.username
        );
        setTweets(userTweets);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTweets();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      !event.target.closest("#menu-container") && setprofilMenuOn(false);
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [profilMenuOn]);

  return (
    <>
      {loginStatus.loginStatus ? (
        <>
          <main className="container mx-auto w-full max-w-[1250px] max-lg:max-w-[750px]">
            <header>
              <LeftBar
                focusGonderButton={focusGonderButton}
                profilMenuOn={profilMenuOn}
                setprofilMenuOn={setprofilMenuOn}
              ></LeftBar>
            </header>
            <main className="flex justify-end ">
              <div className="max-[600px]:w-full lg:w-[45%] max-[1025px]:w-[85%]">
                <div className="px-4 py-4 items-center cursor-pointer">
                  <div className="flex mb-2">
                  <div className="hover:bg-slate-100 rounded-full p-1 ">
                    <svg width="20" height="25">
                      <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
                    </svg>
                  </div>
                  <div className="ml-5">
                    <div className="font-bold flex text-base items-center">
                      {user.name}
                      <span className="scale-90">
                        <svg width="20" height="25">
                          <path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="font-light text-sm">180 gönderi</div>
                  </div>
                  </div>
                  <div className="w-full px-2">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full w-[110px] ">
                        <img src={owebp} className="rounded-full w-full"></img>
                      </div>
                      <button className="p-2 rounded-full bg-slate-500 hover:bg-slate-200 hover:text-black text-white font-bold">
                        Profili düzenle
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-4">
                  <div className="font-bold flex text-base items-center">
                    {user.name}
                    <span className="scale-90">
                      <svg width="20" height="25">
                        <path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="font-light text-sm">@{user.username}</div>
                  <div className="flex items-center py-2 ">
                    <svg width="25" height="25">
                      <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
                    </svg>
                    <span className="font-light">Temmuz 2015'de katıldı</span>
                  </div>
                  <div className="flex">
                    <div className="font-light">
                      <span className="font-bold">500</span> Takip Edilen
                    </div>
                    <div className="ml-5 font-light">
                      <span className="font-bold">450</span> Takipçi
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div
                    onClick={() => setBordered(0)}
                    className="cursor-pointer w-full flex justify-center font-medium text-slate-400"
                  >
                    <div
                      className={`max-[600px]:pb-3 pb-2  ${
                        bordered == 0 &&
                        "border-b-[5px] border-b-blue-500 font-bold text-black"
                      }  max-w-fit`}
                    >
                      Gönderiler
                    </div>
                  </div>
                  <div
                    onClick={() => setBordered(1)}
                    className="cursor-pointer w-full flex justify-center font-medium text-slate-400"
                  >
                    <div
                      className={`pb-2  ${
                        bordered == 1 &&
                        "max-[600px]:pb-3 border-b-[5px] border-b-blue-500 font-bold text-black"
                      }  max-w-fit`}
                    >
                      Yanıtlar
                    </div>
                  </div>
                  <div
                    onClick={() => setBordered(2)}
                    className="cursor-pointer w-full flex justify-center font-medium text-slate-400"
                  >
                    <div
                      className={`pb-2  ${
                        bordered == 2 &&
                        "max-[600px]:pb-3 border-b-[5px] border-b-blue-500 font-bold text-black"
                      }  max-w-fit`}
                    >
                      Öne Çıkanlar
                    </div>
                  </div>
                  <div
                    onClick={() => setBordered(3)}
                    className="cursor-pointer w-full flex justify-center font-medium text-slate-400"
                  >
                    <div
                      className={`pb-2  ${
                        bordered == 3 &&
                        "max-[600px]:pb-3 border-b-[5px] border-b-blue-500 font-bold text-black"
                      }  max-w-fit`}
                    >
                      Medya
                    </div>
                  </div>
                  <div
                    onClick={() => setBordered(4)}
                    className="cursor-pointer w-full flex justify-center font-medium text-slate-400"
                  >
                    <div
                      className={`pb-2  ${
                        bordered == 4 &&
                        "max-[600px]:pb-3 border-b-[5px] border-b-blue-500 font-bold text-black"
                      }  max-w-fit`}
                    >
                      Beğeni
                    </div>
                  </div>
                </div>
                {tweets?.length > 0 ? (
                  [...tweets]
                    .sort((a, b) => {
                      return (
                        new Date(b.tweetCreatedAt) - new Date(a.tweetCreatedAt)
                      );
                    })
                    .map((tweet, index) => (
                      <div key={index}>
                        <Tweets tweet={tweet} getTweets={getTweets}></Tweets>
                      </div>
                    ))
                ) : (
                  <div className="w-full text-center mt-10">Yükleniyor...</div>
                )}
              </div>
              <RightBar></RightBar>
            </main>
            <footer>
              <Messages />
            </footer>
          </main>

          <main className="hidden max-[600px]:flex flex-col container mx-auto">
            <footer className="w-full fixed bottom-0 bg-white">
              <nav className="flex gap-5 h-[70%] cursor-pointer border-t-[1px] pt-1">
                <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center mx-auto px-4 py-2 ">
                  <svg width="25" height="25">
                    <path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path>
                  </svg>
                </div>
                <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center mx-auto px-3 py-2">
                  <svg width="25" height="25">
                    <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                  </svg>
                </div>
                <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center mx-auto px-3 py-2">
                  <svg width="25" height="25">
                    <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
                  </svg>
                </div>
                <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center mx-auto px-3 py-2">
                  <svg width="25" height="25">
                    <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                  </svg>
                </div>
              </nav>
            </footer>
            <div className="fixed right-10 bottom-14 bg-[#1d9bf0] cursor-pointer rounded-full w-fit p-2 mt-3 scale-110 hover:bg-blue-500 mx-auto">
              <svg width="25" height="25" fill="white">
                <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
              </svg>
            </div>
          </main>
        </>
      ) : (
        <div className="flex justify-center font-bold flex-col w-full h-[500px] items-center">
          <div>Önce Login olmalısın</div>
        </div>
      )}
    </>
  );
};
