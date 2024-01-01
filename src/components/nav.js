function Nav() {
  return (
    <div className="bg-[#0025FF] h-[90px] p-3 flex flex-row font-ULTRA font-extrabold w-full">
      <div className="h-full flex flex-col">
        <img src="Pepsi Logo.png" alt="logo" className="h-full" />
      </div>
      <div className="flex flex-row gap-16 ml-10 text-[12px]">
        <div className="flex flex-row">
          <p className="my-auto text-white  uppercase">
            View Products
          </p>
        </div>
        <div className="flex flex-row">
          <p className="my-auto text-white   ">
        PEPSI125
          </p>
        </div>
        <div className="flex flex-row">
          <p className="my-auto text-white  ">
        CONTACT US
          </p>
        </div>
      </div>
      <div className="flex flex-row text-[12px] ml-auto p-1 h-min my-auto rounded-full px-5 text-white border-white border-2">
        <p>BUY PEPSI PRODUCTS</p>
      </div>
    </div>
  );
}

export default Nav;
