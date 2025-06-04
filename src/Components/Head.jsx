import React from "react";

const Head = () => {
  return (
    <div className="flex">
      <div className="flex">
        <button class="cursor-pointer">
          <svg
            class="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div>
          <img
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
            alt="YouTube-logo"
            className="w-25  ml-5 cursor-pointer"
          />
        </div>
      </div>
      <div className="ml-40 flex items-center order border-gray-300 ">
        <input
          placeholder="Search..."
          className="w-150 h-11 text-lg font-normal font-Roboto  px-4 py-2  border-1 border-gray-500 rounded-l-full focus:outline-none focus:border-blue-300"
          type="text"
        />
        <button className="h-11 w-18 border-1 border-gray-500 rounded-r-full hover:bg-gray-100 cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png"
            alt="search-icon"
            className="w-7 ml-5"
          />
        </button>
      </div>
      <div className="mt-2 ml-auto">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
          alt=""
          className="w-10"
        />
      </div>
    </div>
  );
};

export default Head;
