import { useEffect, useState } from "react";
import "./App.css";
import LeftBar from "./components/LeftBar";
import { Messages } from "./components/Messages";
import MiddleBar from "./components/MiddleBar";
import RightBar from "./components/RightBar";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const navigate = useNavigate();
  const loginStatus = useSelector(state => state.loginStatus.value)

  useEffect(() => {
    if (!loginStatus) {
      alert("Önce login olmalısın!");
      navigate("/login");
    }
  }, [loginStatus]);

  return (
    <>
      {loginStatus ? (
        <>
          <main className="max-[600px]:hidden flex container mx-auto">
            <header>
              <LeftBar></LeftBar>
            </header>
            <main className="flex justify-end">
              <MiddleBar></MiddleBar>
              <RightBar></RightBar>
            </main>
            <footer>
              <Messages />
            </footer>
          </main>

          <main className="hidden max-[600px]:flex flex-col container mx-auto">
            <header>
              <LeftBar ></LeftBar>
            </header>
            <main className="flex justify-center">
              <MiddleBar></MiddleBar>
            </main>
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
}

export default App;
