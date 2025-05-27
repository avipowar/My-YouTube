import React from "react";

const Head = () => {
  return (
    <div className="flex">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aVFA-EWfWnnDG7eH15S0ksrMsnw_lW3ook_b4Pu5mVOsaPvRhdYLNaGENys-1r8RUkU&usqp=CAU"
          alt="hamBurger-icon"
          className="w-14 cursor-pointer mt-2"
        />
      </div>
      <div>
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
          alt="YouTube-logo"
          className="w-32  ml-2 cursor-pointer"
        />
      </div>
      <div>
        <input className="w-100 h-10" type="text" />
      </div>
    </div>
  );
};

export default Head;
