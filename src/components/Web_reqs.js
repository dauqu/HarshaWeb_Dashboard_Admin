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

  const [webRequest, setWebRequest] = useState([]);
  
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
  


const getWebRequest = () => {
    axios.get(`${API}/website_request`).then((response) => {
      // console.log(response);header
      setWebRequest(response.data.all_files);
    });
  };
  const deleteWebRequest = (id) => {
    // console.log(id);
    Axios.delete(`${API}/website_request/${id}`).then(
      (response) => {
        setWebRequest(
          webRequest.filter((val) => {
            return val.id !== id;
          })
        );
      }
    );
  };



  useEffect(() => {
    // getuserdata();
    getWebRequest();
  }, []);
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex w-full h-full overflow-hidden flex-row">
        <Sidebar status={sidebarStatus} />
        <div className={`lg:w-[82%] w-[100%]  bg-[#F7FAFC] overflow-x-hidden pb-6`}>
            <div className="xl:w-[1000px] lg:w-[700px] md:w-[500px] sm:w-[500px] w-full mx-auto my-10 website_request">
              <h1 className="text-center my-6 text-[30px] font-semibold">Website Request</h1>
              <div className="overflow-x-scroll">
                <table className="w-full">
                  <thead className="w-full h-[50px]">
                    <tr className="w-full text-left text-[#464A53]">
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Phone No.</th>
                      <th className="px-4 py-2 border">Message</th>
                      <th className="px-4 py-2 border">Frontend</th>
                      <th className="px-4 py-2 border">Backend</th>
                      <th className="px-4 py-2 border">Database</th>
                      <th className="px-4 py-2 border">Type</th>
                      <th className="px-4 py-2 border">Pages</th>
                      <th className="px-4 py-2 border">Est. Cost</th>
                      <th className="px-4 py-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {webRequest.length>0 && webRequest.map((val, key) => {
                      return (
                        <>
                          <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                            <td className="px-4 py-2 border text-[#008eff]">{val.name}</td>
                            <td className="px-4 py-2 border">{val.email}</td>
                            <td className="px-4 py-2 border">{val.phoneNumber}</td>
                            <td className="px-4 py-2 border">{val.message}</td>
                            <td className="px-4 py-2 border">{val.frontend}</td>
                            <td className="px-4 py-2 border">{val.backend}</td>
                            <td className="px-4 py-2 border">{val.database}</td>
                            <td className="px-4 py-2 border">{val.webType}</td>
                            <td className="px-4 py-2 border">{val.numberOfPages}</td>
                            <td className="px-4 py-2 border">{val.totalEstimate}</td>
                            <td className="px-4 py-2 border">
                              <div className="flex items-center justify-center">
                                {/* <FiEdit className="text-[17px] mr-1 cursor-pointer" /> */}
                                <MdOutlineDeleteOutline
                                  className="text-[19px] cursor-pointer"
                                  onClick={() => {
                                    deleteWebRequest(val._id);
                                  }}
                                />
                              </div>
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
  );
};

export default Base;
