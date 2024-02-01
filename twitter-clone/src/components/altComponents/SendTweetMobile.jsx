import { useNavigate } from "react-router-dom";
import owebp from "./../../assets/O.webp";

const SendTweetMobile = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="pt-1">
        <div className="flex justify-between">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer hover:bg-slate-50 max-w-fit rounded p-1"
          >
            <svg width="20" height="25">
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
            </svg>
          </div>
          <div className="flex text-center justify-center">
            <div className="pr-2 text-sm">
              <button className="text-[#1d9bf0] rounded-full px-4 py-2 lg:min-w-[50px] font-semibold disabled:bg-blue-300">
                Taslaklar
              </button>
            </div>
            <div className="pr-2 text-sm">
              <button className="bg-[#1d9bf0] rounded-full px-3 py-2 lg:min-w-[50px] text-white font-semibold disabled:bg-blue-300">
                Gönder
              </button>
            </div>
          </div>
        </div>
        <section className="pt-4">
          <div className="flex items-center">
            <div className="pl-2 py-5 ">
              <img className="rounded-full" src={owebp}></img>
            </div>
            <input
              placeholder="Neler oluyor?"
              className={`h-[100px] pl-2 py-5 text-xl ease-in-out duration-300 font-light w-full focus:outline-none`}
            ></input>
          </div>
          <div className="w-full border-t-2 border-slate-100 mt-10">
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
                    <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path>
                  </svg>
                </div>
                <div className="scale-90 hover:bg-blue-100 cursor-pointer rounded-full p-[7px]">
                  <svg width="22" height="21.7" fill="#1d9bf0">
                    <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SendTweetMobile;
