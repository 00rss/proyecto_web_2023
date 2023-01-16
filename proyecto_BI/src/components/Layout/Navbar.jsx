import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import kmbIcon from "../../assets/icons/kmb.png";
import lupeIcon from "../../assets/icons/lupe2.png";
import messageIcon from "../../assets/icons/message.svg";
import arrowIcon from "../../assets/icons/arrow.svg";
import notificationIcon from "../../assets/icons/notification.svg";
import userIcon from "../../assets/icons/user.png";
import infoIcon from "../../assets/icons/info.svg";
import settingsIcon from "../../assets/icons/navbar/settings2.png";
import helpIcon from "../../assets/icons/navbar/help.png";
import logOutIcon from "../../assets/icons/navbar/logOut.svg";
import { validateToken } from "../../services/token";
import { logOut } from "../../functions/general";
import { useSelector, useDispatch } from "react-redux";
import { setInitialValueUser } from "../../redux/sliders/user/userSlider";
const Navbar = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.value);
  console.log(userData);
  const navigate = useNavigate();
  function handleSave(data) {}
  function handleFinish(data) {}
  function handleLogOut() {}
  useEffect(() => {}, []);

  function handleClick(target) {
    navigate(`/${target}`);
  }
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      validateToken(token).then((data) => {
        if (data && "success" in data && data.success && "payload" in data) {
          // setDataUsuario(data.payload);
          // console.log(data.payload);
          dispatch(setInitialValueUser({ userData: data.payload }));
        }
      });
    }
  }, []);
  // useEffect(() => console.log(dataUsuario), [dataUsuario]);

  return (
    <nav className="w-full sticky z-[1050] top-0 text-slate-600 navbarColor bg-[#3cb9b94f] font-medium px-2 py-2 text-[13px] shadow-[5px_5px_10px_-4px_#00000040]">
      <span id="animated-bar-navbar"></span>
      <ul className="flex flex-row items-center justify-between">
        <li className="w-16">
          <img
            className="filter contrast-[90%] grayscale-0 drop-shadow-[1px_1px_2px_#000000aa]"
            src={kmbIcon}
            alt="kmb_icon"
          />
        </li>
        <li className="w-3/5 flex justify-center items-center">
          <div className="flex flex-row items-center gap-2 bg-slate-200 shadow-[5px_5px_10px_-4px_#0000005e] rounded-xl w-[max(200px,90%)] px-2 py-1">
            <img
              className="filter contrast-[30%] h-4 w-4"
              src={lupeIcon}
              alt="kmb_icon"
            />
            <input
              className="bg-transparent outline-none w-full"
              type="text"
              placeholder="Search..."
            />
          </div>
        </li>
        <li>
          <div className="flex flex-row items-center gap-4">
            <button>
              <img
                className="h-4 w-4 filter contrast-[30%]"
                src={messageIcon}
                alt="message icon"
              />
            </button>
            <button>
              <img
                className="h-4 w-4 filter contrast-[30%]"
                src={notificationIcon}
                alt="notification icon"
              />
            </button>
            <button className="group flex flex-row justify-center items-center cursor-pointer relative w-[130px]">
              <section
                // className="bg-slate-800/20 outline-none focus:outline-none w-full py-1 rounded-xl flex flex-row justify-between px-2 items-center gap-2"
                className="z-20 bg-slate-200 shadow-[2px_2px_2px_1px_#00000044] group-hover:shadow-[2px_2px_2px_1px_#00000022] duration-300 ease-in-out outline-none focus:outline-none w-full py-1 rounded-full flex flex-row px-2 items-center gap-2"
                // className=" shadow-[2px_2px_2px_1px_#00000088] outline-none focus:outline-none w-full py-1 rounded-xl flex flex-row justify-between px-2 items-center gap-2"
                // className="bg-slate-800/20 border-[2px] outline-none focus:outline-none w-full py-1 rounded-xl flex flex-row justify-between px-2 items-center gap-2"
                // className="bg-slate-800/20 border-[2px] border-cyan-900 outline-none focus:outline-none w-full py-1 rounded-xl flex flex-row justify-center items-center gap-2"
              >
                <img className="h-6 w-6" src={userIcon} alt="user icon" />
                <h1>
                  {userData?.username?.length > 11
                    ? userData.username.slice(0, 11) + "..."
                    : userData.username}
                </h1>
              </section>
              <section className="p-1 group-hover:block duration-300 ease-in-out hidden w-[calc(100%-3px)] pt-5  bg-gradient-to-tr from-sky-300 to-cyan-200 absolute top-[12px] rounded-b-lg shadow-[inset_1px_1px_8px_1px_#000000aa,0px_1px_5px_-1px_#00000044]">
                <div className="outline-none last:border-none  py-1 px-2 hover:bg-slate-100/30 border-b-[1px] border-dashed border-slate-900/30 rounded-b-md focus:outline-none w-full flex flex-row items-center gap-1">
                  <img
                    className="h-4 w-4 filter invert-[0.4] duration-300 ease-in-out"
                    src={settingsIcon}
                    alt="setting icon"
                  />
                  <div className=" duration-300 capitalize">configuración</div>
                </div>
                <div className="outline-none last:border-none  py-1 px-2 hover:bg-slate-100/30 border-b-[1px] border-dashed border-slate-900/30 rounded-b-md focus:outline-none w-full flex flex-row items-center gap-1">
                  <img
                    className="h-4 w-4 filter invert-[0.4] duration-300 ease-in-out"
                    src={helpIcon}
                    alt="setting icon"
                  />
                  <div className=" duration-300 capitalize">ayuda</div>
                </div>
                <div
                  onClick={() => logOut()}
                  className="flex flex-row outline-none last:border-none  py-1 px-1 hover:bg-slate-100/30 border-b-[1px] border-dashed border-slate-900/30 rounded-b-md focus:outline-none w-full justify-center items-center gap-1"
                >
                  <img
                    className="h-4 w-4 filter invert-[0.4] duration-300 ease-in-out"
                    src={logOutIcon}
                    alt="setting icon"
                  />
                  <div className="duration-300 capitalize">cerrar sesión</div>
                </div>
              </section>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
