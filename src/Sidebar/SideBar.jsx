import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { useNavigate } from "react-router";
export default function SideBar({ activePage }) {
  const navigate = useNavigate();
  const handleMenuClick = (title) => {
    console.log(`${title}`);
    navigate(`/${title}`);
    console.log("this is something");
  };
  console.log(`active page is ${activePage}`);
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Search", src: "Search" },
    { title: "Upload", src: "Chat", icon: "FaFileUpload" },
    { title: "Dashboard", src: "Chart_fill" },
    // { title: "Settings", src: "Setting" },
  ];
  return (
    <div
      className={` ${
        open ? "w-56" : "w-20 "
      } bg-sky-600 h-full p-5  relative duration-300`}
    >
      
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-blue-950
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      {/* <div className="flex gap-x-4 items-center">          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >            Designer
          </h1>        </div> */}
      <ul>
        
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              Menu.title === activePage && "bg-light-white"
            } `}
            onClick={() => {
              handleMenuClick(Menu.title);
            }}
          >
            
            <img src={`./src/assets/${Menu.src}.png`} />
            <span className={`${!open && "hidden"} origin-left`}>
              
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
