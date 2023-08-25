import { useState } from "react";
import RightBarGundem from "./altComponents/RightBarGundem";
import RightBarTakipOneri from "./altComponents/RightBarTakipOneri";

const RightBar = () => {
  const [bordered, setBordered] = useState(false);
  return (
    <>
      <section className="w-[30%] max-w-[500px] flex flex-col items-center min-h-[100%]">
        <div className="flex flex-col items-left sm:w-[350px]">
          <div
            className={`flex items-center px-4 py-1 ${
              bordered == true &&
              "border-[1px] border-blue-300 py-[3px] px-[15px]"
            }  bg-slate-100 rounded-full mb-4 mt-1`}
          >
            <svg width="30px" height="25px" className="scale-75">
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
            </svg>
            <input
              onClick={() => setBordered(true)}
              onMouseLeave={() => setBordered(false)}
              className="p-2 bg-slate-100 w-full focus:outline-none"
              placeholder="Ara"
            ></input>
          </div>
          <div className="bg-slate-100 rounded-xl p-4">
            <h2 className="font-bold text-xl">Premium'a Abone Ol</h2>
            <p className="pt-2 font-semibold leading-5">
              Yeni özellikleri açmak için abone ol ve uygun olman durumunda
              reklam geliri payı kazan.
            </p>
            <button className="bg-black rounded-full py-[6px] px-2 mt-3 text-white font-bold sm:w-[100px]">
              Abone Ol
            </button>
          </div>
        </div>
          <RightBarGundem></RightBarGundem>
      <RightBarTakipOneri/>
      </section>
    </>
  );
};

export default RightBar;
