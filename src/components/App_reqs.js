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

  const [appRequest, setAppRequest] = useState([]);
  
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
  


  const getAppRequest = () => {
    axios.get(`${API}/app_request`).then((response) => {
      // console.log(response);
      setAppRequest(response.data.all_files);
    });
  };
  const deleteAppRequest = (id) => {
    Axios.delete(`${API}/app_request/${id}`).then(
      (response) => {
        setAppRequest(
          appRequest.filter((val) => {
            return val.id !== id;
          })
        );
      }
    );
  };


  useEffect(() => {
    // getuserdata();
    getAppRequest();
  }, []);
  return (
    <>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="flex w-full">
              <h2 className="md:text-2xl text-[18px] font-semibold">View Application Requests</h2>
            </div>
            <hr className="my-5 border-gray-400" />

            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Phone Number</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Message</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Application Technology</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Application Type</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Pages</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Est. Cost</th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appRequest.length > 0 && appRequest.map((val, key) => {
                      return (
                        <>
                        <tr key={item._id}>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <div className="ml-3">
                                <p className="text-gray-900 text-[16px]    whitespace-no-wrap">
                                  {val.name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                            {val.email}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px] whitespace-no-wrap">
                            {val.phoneNumber}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                            {val.message}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                            {val.appTech}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                            {val.appType}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                            {val.numberOfPages}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                            {val.totalEstimate}
                            </p>
                          </td>
                          
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <IconButton
                              aria-label="delete"
                              onClick={() => deleteAppRequest(item._id)}
                            >
                              <DeleteIcon sx={{ color: "red" }} />
                            </IconButton>
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
    </>
  );
};

export default Base;
