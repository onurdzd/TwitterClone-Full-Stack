const MiddleBar = () => {
  return (
    <>
      <section className="w-[40%] flex flex-col items-center border-[1px]">
        <div className="flex flex-col w-full h-[100px] border-[1px]">
          <header className="font-bold text-xl tracking-wide pl-5">Anasayfa</header>
          <div className="flex pt-5 gap-3">
            <div className="w-full text-center font-medium"><div className={`pb-2 border-b-[5px] border-b-blue-500 max-w-fit`}>Sana Özel</div></div>
            <div className="w-full text-center font-medium">Takip edilenler</div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[100px] border-[1px]">
          Neler oluyor?
        </div>
        <div className="h-full">Tweets</div>
      </section>
    </>
  );
};

export default MiddleBar;
