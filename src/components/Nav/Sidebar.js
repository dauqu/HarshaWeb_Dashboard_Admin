import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineUnlock
} from "react-icons/ai";

import { FiGrid } from "react-icons/fi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { MdAddBusiness, MdOutlineCategory } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";

const Sidebar = ({ status }) => {

  return (
    <div id="sideBar" className={`${status && "max-lg:hidden"} relative top-0 flex flex-col flex-wrap border-r border-gray-300 p-6 lg:w-[18%] h-[100%] animated faster overflow-y-scroll overflow-x-hidden
    max-lg:fixed max-lg:top-[74px] max-lg:pb-[74px] w-[300px] left-0 z-20 bg-white `}>
      <div className="flex flex-col">
        <Link to="/" className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center">
          <FiGrid size={20} color="#ff5c16" className={"mr-3 hover:text-inherit"} />
          Dashboard
        </Link>
        
        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">Category</p>
        <Link to="./../web-reqs" className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center">
          <MdOutlineCategory size={20} className={"mr-3 hover:text-inherit"} />
          Website Requests
        </Link>
        <Link
          to="./../app-reqs"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <BiCategory size={20} className={"mr-3 hover:text-inherit"} />
          Application Requests
        </Link>

        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">Product</p>
        <Link
          to="./../quotes"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <MdAddBusiness size={20} className={"mr-3 hover:text-inherit"} />
          Quotes
        </Link>
        <Link
          to="./../contacts"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <AiOutlineFundView size={20} className={"mr-3 hover:text-inherit"} />
          Contacts
        </Link>

        {/* Setting  */}
        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
          Settings
        </p>
        <Link
          to="/changepassword"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <AiOutlineUnlock size={20} className={"mr-3 hover:text-inherit"} />
          Change Password
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
