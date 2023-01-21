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

  const [quotes, setQuotes] = useState([]);
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
  


const getQuotes = () => {
    axios.get(`${API}/request_quote`).then((response) => {
      // console.log(response);
      setQuotes(response.data);
    });
  };
  


  useEffect(() => {
    // getuserdata();
    getQuotes();
  }, []);
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex w-full h-full overflow-hidden flex-row">
        <Sidebar status={sidebarStatus} />
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="flex w-full">
              <h2 className="md:text-2xl text-[18px] font-semibold">View Quotes</h2>
            </div>
            <hr className="my-5 border-gray-400" />

            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">First Name</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Last Name</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Phone</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Service</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Subject</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Message</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">DateTime</th>
                    </tr>
                  </thead>
                  <tbody>
                  {contacts.length > 0 && contacts.map((val, key) => {
                      return (
                        <>
                        <tr key={item._id}>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <div className="ml-3">
                                <p className="text-gray-900 text-[16px]    whitespace-no-wrap">
                                {val.fname}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                            {val.lname}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px] whitespace-no-wrap">
                            {val.email}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                            {val.phone}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                            {val.service}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                            {val.subject}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                            {val.message}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                            {val.datetime}
                            </p>
                          </td>
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
    </div>
  );
};

export default Base;
