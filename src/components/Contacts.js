import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "./Constant";
import Navbar from "./Nav/Navbar";
import Sidebar from "./Nav/Sidebar";
import Axios from "axios";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Base = ({ children }) => {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [user, setUser] = useState([]);

  const [contacts, setContacts] = useState([]);
  
  const toggleSidebar = () => {
    setSidebarStatus(!sidebarStatus);
  };

  // code to get user data
//   const getuserdata = async () => {
//     try {
//       const res = await axios
//         .get(`${API}/profile`, {
//           withCredentials: true,
//         })
//         .then((res) => {
//           if (res.data.status == "success") {
//             setUser(res.data);
//             // console.log("profile data from base Page  " + res.data);
//           } else {
//             window.location.href = "/login";
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//           window.location.href = "/login";
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };
  


const getContacts = () => {
    axios.get(`${API}/contact`).then((response) => {
      // console.log(response);
      setContacts(response.data);
    });
  };
  


  useEffect(() => {
    // getuserdata();
    getContacts();
  }, []);
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex w-full h-full overflow-hidden flex-row">
        <Sidebar status={sidebarStatus} />
        <div className={`lg:w-[82%] w-[100%]  bg-[#F7FAFC] overflow-y-auto pb-6`}>
            <div className="xl:w-[1000px] lg:w-[700px] md:w-[500px] sm:w-[500px] w-full mx-auto my-10 contacts">
              <h1 className="text-center my-6 text-[30px] font-semibold">Contacts</h1>
              <div className="overflow-x-scroll">
                <table className="w-full">
                  <thead className="w-full h-[50px]">
                    <tr className="w-full text-left text-[#464A53]">
                      <th className="px-4 py-2 border">First Name</th>
                      <th className="px-4 py-2 border">Last Name</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Phone</th>
                      <th className="px-4 py-2 border">Service</th>
                      <th className="px-4 py-2 border">Subject</th>
                      <th className="px-4 py-2 border">Message</th>
                      <th className="px-4 py-2 border">Date-Time</th>
                      {/* <th className="px-4 py-2 border">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.length > 0 && contacts.map((val, key) => {
                      return (
                        <>
                          <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                            <td className="px-4 py-2 border text-[#008eff]">
                              {val.fname}
                            </td>
                            <td className="px-4 py-2 border">{val.lname}</td>
                            <td className="px-4 py-2 border">{val.email}</td>
                            <td className="px-4 py-2 border">{val.phone}</td>
                            <td className="px-4 py-2 border">{val.service}</td>
                            <td className="px-4 py-2 border">{val.subject}</td>
                            <td className="px-4 py-2 border">{val.message}</td>
                            <td className="px-4 py-2 border">{val.datetime}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
