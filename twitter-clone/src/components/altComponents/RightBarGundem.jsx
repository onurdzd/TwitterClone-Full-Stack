const RightBarGundem = () => {
  return (
    <>
      <main className="flex flex-col h-[700px] bg-slate-100 w-[350px] mt-5 rounded-xl ">
        <div className=" font-bold text-xl pt-2 pb-5 pl-4">
          İlgini çekebilecek gündemler
        </div>
        <section className="flex flex-col justify-between h-full pl-4">
          <div className="flex flex-col gap-6">
            <div className="flex items-start justify-between pr-5">
              <div>
                <div className="font-light text-sm">
                  Türkiye tarihinde gündemde
                </div>
                <div className="font-bold">#dolar</div>
                <div className="font-light text-sm">14,9 B posts</div>
              </div>
              <div>
                <svg width="20" height="25">
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-start justify-between pr-5">
              <div>
                <div className="font-light text-sm">
                  Türkiye tarihinde gündemde
                </div>
                <div className="font-bold">#dolar</div>
                <div className="font-light text-sm">14,9 B posts</div>
              </div>
              <div>
                {" "}
                <svg width="20" height="25">
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-start justify-between pr-5">
              <div>
                <div className="font-light text-sm">
                  Türkiye tarihinde gündemde
                </div>
                <div className="font-bold">#dolar</div>
                <div className="font-light text-sm">14,9 B posts</div>
              </div>
              <div>
                {" "}
                <svg width="20" height="25">
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <div className="py-3 text-blue-400 cursor-pointer hover:bg-slate-200 pl-4 rounded-b-lg">
          Daha fazla göster
        </div>
      </main>
    </>
  );
};

export default RightBarGundem;
