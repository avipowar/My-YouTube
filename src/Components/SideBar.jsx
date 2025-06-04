import React from "react";
const SideBar = () => {
  return (
    <div className="w-48 border-b border-gray-300 mb-100">
      <ul>
        <li className="flex items-center gap-5 w-44 hover:bg-gray-100 p-2 rounded hover:font-medium mb-1">
          <img
            src="https://cdn-icons-png.flaticon.com/128/263/263115.png"
            alt="Home-Icon"
            className="w-6"
          />
          <span>Home</span>
        </li>
        <li className="flex items-center gap-5 w-44 hover:bg-gray-100 py-2 rounded hover:font-medium mb-1">
          <img
            src="https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg"
            alt="Shorts-Icon"
            className="w-8"
          />
          <span>Shorts</span>
        </li>
        <li className="flex items-center  gap-5 w-44 hover:bg-gray-100 p-1 rounded hover:font-medium mb-5">
          <img
            src="https://images.icon-icons.com/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
            alt="subscription-Icon"
            className="w-7"
          />
          <span>Subscription</span>
        </li>

        <hr className="border-t border-gray-300 my-4 w-44" />

        <h1 className="text-xl font-medium mb-2">Explore</h1>

        <li className="flex items-center gap-5 w-44 hover:bg-gray-100 py-2 rounded hover:font-medium mb-1">
          <img
            src="https://cdn1.iconfinder.com/data/icons/youtube-23/31/Subtract-14-512.png"
            alt="Shorts-Icon"
            className="w-7 "
          />
          <span>Trending</span>
        </li>
        <li className="flex items-center gap-5 w-44 hover:bg-gray-100 py-2 rounded hover:font-medium mb-1">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-bag-268-724699.png"
            alt="shopping-Icon"
            className="w-7"
          />
          <span>Shopping</span>
        </li>
        <li className="flex items-center gap-5 w-44 hover:bg-gray-100 py-2 rounded hover:font-medium mb-1">
          <img
            src="https://c8.alamy.com/comp/2DHX73W/music-hits-icon-element-of-music-icon-for-mobile-concept-and-web-apps-thin-line-music-hits-icon-can-be-used-for-web-and-mobile-premium-icon-on-white-2DHX73W.jpg"
            alt="music-Icon"
            className="w-7"
          />
          <span>Music</span>
        </li>
        <li className="flex items-center gap-6 w-44 hover:bg-gray-100 py-2 rounded hover:font-medium mb-1">
          <img
            src="https://img.icons8.com/ios7/600/youtube-live.png"
            alt="Live-Icon"
            className="w-6"
          />
          <span>Live</span>
        </li>
        <li className="flex items-center gap-6 w-44 hover:bg-gray-100 py-2 rounded hover:font-medium mb-1">
          <img
            src="https://assets.streamlinehq.com/image/private/w_240,h_240,ar_1/f_auto/v1/icons/gaming/youtube-gaming-kbrba2fokdf61s2d2z0cny.png/youtube-gaming-9i2w0sv8n9hob9k5jk998r.png?_a=DATAdtAAZAA0"
            alt="Gaming-Icon"
            className="w-6"
          />
          <span>Gaming</span>
        </li>
        <li className="flex items-center gap-5 w-44 hover:bg-gray-100 py-2 rounded hover:font-medium mb-1">
          <img
            src="https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg"
            alt="Shorts-Icon"
            className="w-8"
          />
          <span>Shorts</span>
        </li>
        <li className="flex items-center gap-5 w-44 hover:bg-gray-100 p-1 rounded hover:font-medium mb-5">
          <img
            src="https://images.icon-icons.com/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
            alt="subscription-Icon"
            className="w-7"
          />
          <span>Subscription</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
