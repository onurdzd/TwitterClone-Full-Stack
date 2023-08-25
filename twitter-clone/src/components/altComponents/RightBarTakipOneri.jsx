import owebp from "./../../assets/O.webp";

const RightBarTakipOneri = () => {
  return (
    <>
      <main className="flex flex-col h-[300px] bg-slate-100 xl:w-[300px] mt-5 rounded-xl justify-between">
        <div>
          <div className="font-bold text-xl pt-2 pb-5 pl-3">
            Kimi takip etmeli
          </div>
            {/* takip etmeli map edilecek */}
          <section className="flex items-center justify-between px-4 pb-4">
            <div className="flex items-center gap-2">
              <div className="rounded-full">
                <img src={owebp} className="rounded-full"></img>
              </div>
              <div>
                <div className="font-bold flex text-base items-center">
                  Onur Dizdar
                </div>
                <div className="font-light text-sm">@o_diz</div>
              </div>
            </div>
            <button className="bg-black rounded-full py-[5px]  text-white font-bold lg:w-[100px]">
              Takip et
            </button>
          </section>
          <section className="flex items-center justify-between px-4">
            {/* takip etmeli map edilecek */}
            <div className="flex items-center gap-2">
              <div className="rounded-full">
                <img src={owebp} className="rounded-full"></img>
              </div>
              <div>
                <div className="font-bold flex text-base items-center">
                  Onur Dizdar
                </div>
                <div className="font-light text-sm">@o_diz</div>
              </div>
            </div>
            <button className="bg-black rounded-full py-[5px]  text-white font-bold lg:w-[100px]">
              Takip et
            </button>
          </section>
        </div>
        <div className="py-3 text-blue-400 cursor-pointer hover:bg-slate-200 pl-4 rounded-b-lg">
          Daha fazla göster
        </div>
      </main>
    </>
  );
};

export default RightBarTakipOneri;
