import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { CiDesktop } from "react-icons/ci";
import { MdOutlineImageSearch } from "react-icons/md";

const Menu = () => {
  return (
    <div className="bg-white shadow-md full-h-screen w-64 p-6 flex flex-col items-center">
      
  
      <section className="mb-8">
        <img 
          src="https://s3-alpha-sig.figma.com/img/0996/ab83/16c447b5c9b902c14889d917f4e93550?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DcWpkvJlgVsrngvWevtvWo4j1HapeM5GYR6Mv4poc3zND28pDnobbviZ-fAdhmjID-mIxuqwA54Nk1xqVg01GRA8Aj23u7hpJZYIhe1P7Rf9~MxeZTe0IkTF8bVryc8zpJKZIgqxI~V4X~EMSFWHGboneZgzLySF5uQRSLmEYWrZH9EOKJHQ0Fyn7fvCu84avMW1SLSoTF2z-LFnXxeTKS9aBqCiTQ9sr7P4ucgT1ONopt3gVHMLV1Ppb3YlIopt2hiAiTGyOaWf9~QBqw8kdxSMzF8C0BpQrcr~6rwx~J21KO8~RsBTB9BvxFYTLjjm-6CJHbGxDf3Gc2VlWk4mng__" 
          alt="Proviz Logo" 
          className="w-32 h-auto object-contain"
        />
      </section>

     
      <section className="w-full">
        <nav>
          <ul className="space-y-4">
           
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
              <RxDashboard size={22} />
              <p className="text-lg font-medium">Dashboard</p>
            </li>

           
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
              <CiDesktop size={22} />
              <p className="text-lg font-medium">Camera View</p>
            </li>

            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
              <MdOutlineImageSearch size={22} />
              <p className="text-lg font-medium">Event Log</p>
            </li>
          </ul>
        </nav>
      </section>

    </div>
  );
};

export default Menu;
