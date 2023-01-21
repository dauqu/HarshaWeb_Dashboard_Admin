import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../Constant";
import Navbar from "../Nav/Navbar";
import Sidebar from "../Nav/Sidebar";

const Base = ({ children }) => {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [user, setUser] = useState([]);
  
  const toggleSidebar = () => {
    setSidebarStatus(!sidebarStatus);
  };

  // code to get user data
  // const getuserdata = async () => {
  //   try {
  //     const res = await axios
  //       .get(`${API}/profile`, {
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         if (res.data.status == "success") {
  //           setUser(res.data);
  //           // console.log("profile data from base Page  " + res.data);
  //         } else {
  //           window.location.href = "/login";
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         window.location.href = "/login";
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
    // getuserdata();
  // }, []);

  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex w-full h-full overflow-hidden flex-row">
        <Sidebar status={sidebarStatus} />
        <div className={`lg:w-[82%] w-[100%]  bg-[#F7FAFC] overflow-y-auto pb-6`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Base;
