import { useEffect, useState } from "react";
import owebp from "../assets/O.webp";
import { useDispatch, useSelector} from 'react-redux'
import { logOut } from '../redux/reducers/loginStatus'
import { useNavigate } from "react-router-dom";

const LeftBar = (props) => {
  const{focusGonderButton,profilMenuOn,setprofilMenuOn}=props
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const user=useSelector(item=> item.loginStatus.value)

  return (
    <>
      <section className="max-[600px]:hidden lg:hidden flex flex-col items-center gap-2 h-screen text-xl justify-between fixed min-w-[90px]">
        <nav className="flex flex-col gap-2 h-[70%] cursor-pointer">
          <div onClick={()=>navigate("/")} className="max-w-fit hover:bg-slate-100 rounded-full pt-3 p-2 scale-125 mx-auto">
            <svg width="25" height="25">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </div>
          <div onClick={()=>navigate("/")} className="max-w-fit hover:bg-slate-100 rounded-full flex items-center mx-auto px-4 py-2 font-bold">
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
          <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center mx-auto px-3 py-2">
            <svg width="25" height="25">
              <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>
            </svg>
          </div>
          <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center mx-auto px-3 py-2">
            <svg width="25" height="25">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </div>
          <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center mx-auto px-3 py-2">
            <svg width="25" height="25">
              <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
            </svg>
          </div>
          <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center mx-auto px-3 py-2">
            <svg width="25" height="25">
              <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
            </svg>
          </div>
          <div onClick={focusGonderButton} className="bg-[#1d9bf0] rounded-full w-fit p-2 mt-3 scale-110 hover:bg-blue-500 mx-auto">
            <svg width="25" height="25" fill="white">
              <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
            </svg>
          </div>
        </nav>
        <div id="menu-container" onClick={() => setprofilMenuOn(true)} className="pb-8 flex items-center gap-2 scale-110 cursor-pointer">
          <div className="rounded-full p-1  hover:bg-slate-200">
            <img src={owebp} className="rounded-full"></img>
          </div>
        </div>
      </section>

      <section 
        className="hidden lg:w-[25%] max-w-[260px] lg:flex flex-col items-center gap-2 h-screen text-xl justify-between fixed "
      >
        <nav className="flex flex-col gap-2 h-[70%]">
          <div className="max-w-fit hover:bg-slate-100 rounded-full px-4 py-2 scale-125  cursor-pointer">
            <svg width="25" height="25">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </div>
          <div onClick={()=>navigate("/")} className="max-w-fit hover:bg-slate-100 rounded-full flex items-center px-4 py-2 font-bold  cursor-pointer">
            <svg width="40" height="25">
              <path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path>
            </svg>
            Anasayfa
          </div>
          <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center px-3 py-2  cursor-pointer">
            <svg width="40" height="25">
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
            </svg>
            Keşfet
          </div>
          <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center px-3 py-2  cursor-pointer">
            <svg width="40" height="25">
              <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
            </svg>
            Bildirimler
          </div>
          <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center px-3 py-2  cursor-pointer">
            <svg width="40" height="25">
              <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
            </svg>
            Mesajlar
          </div>
          <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center px-3 py-2  cursor-pointer">
            <svg width="40" height="25">
              <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>
            </svg>
            Listeler
          </div>
          <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center px-3 py-2  cursor-pointer">
            <svg width="40" height="25">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
            Onaylanmış
          </div>
          <div onClick={()=>navigate("/profile")} className="max-w-fit hover:bg-slate-100 rounded-full flex items-center px-3 py-2  cursor-pointer">
            <svg width="40" height="25">
              <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
            </svg>
            Profil
          </div>
          <div className="max-w-fit hover:bg-slate-100 rounded-full flex items-center px-3 py-2  cursor-pointer">
            <svg width="40" height="25">
              <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
            </svg>
            Daha Fazla
          </div>
          <button onClick={focusGonderButton} className={`bg-[#1d9bf0] rounded-full p-3 lg:min-w-[200px] text-white font-bold mt-4 $`}>
            Gönder
          </button>
        </nav>
        <div
          id="menu-container"
          className="mb-2 flex items-center py-3 px-5 rounded-full gap-2 hover:bg-slate-200 cursor-pointer"
          onClick={() => setprofilMenuOn(true)}
        >
          <div className="rounded-full w-[35px] ">
            <img src={owebp} className="rounded-full"></img>
          </div>
          <div className="flex justify-between w-[125px] items-center">
            <div>
              <div className="font-bold flex text-base items-center">
                {user.name}
                <span className="scale-90">
                  <svg width="20" height="25">
                    <path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path>
                  </svg>
                </span>
              </div>
              <div className="font-light text-sm">@{user.username}</div>
            </div>
            <div className="scale-75 ">
              <svg width="20" height="25">
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      {profilMenuOn && (
        <div className="w-[300px] py-3 fixed z-10 bg-white shadow-[15px_25px_90px_10px_rgba(0,0,0,0.2)] bottom-[90px] rounded-2xl">
          <div className="flex flex-col ">
            <div className="border-b-[1px]">
              <div className="mb-2 flex items-center gap-2 p-3 ">
                <div className="rounded-full w-[35px]">
                  <img onClick={()=>navigate("/profile")} src={owebp} className="rounded-full cursor-pointer"></img>
                </div>
                <div className="flex justify-between w-full items-center">
                  <div>
                    <div className="font-bold flex text-base items-center ">
                      {user.name}
                      <span className="scale-90">
                        <svg width="20" height="25">
                          <path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="font-light text-sm">@{user.username}</div>
                  </div>
                  <div className="scale-75 cursor-pointer pr-2">
                    <svg width="22" height="25" fill="#00ba7c">
                      <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-bold mt-5 py-2 pl-3 hover:bg-slate-100 cursor-pointer">
              Var olan bir hesap ekle
            </div>
            <div className="font-bold py-2 pl-3 hover:bg-slate-100 cursor-pointer">
              Hesapları yönet
            </div>
            <div
              onClick={() => {dispatch(logOut())}}
              className="font-bold py-2 pl-3 mb-5 hover:bg-slate-100 cursor-pointer"
            >
              @{user.username} hesabından çıkış yap
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftBar;
