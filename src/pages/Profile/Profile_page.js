import axios from "axios";
import React, { useEffect, useState } from "react";
import Base from "../../components/Base/Base";
import { API } from "../../Constant";
import { FiLogOut } from "react-icons/fi";
import { BsImage } from "react-icons/bs";
function Profile_page() {
  const [profile_user, setProfile_user] = useState([]);
  const [logout, setLogout] = useState();
  // code to get user data
  const getuserdata = async () => {
    try {
      const res = await axios
        .get(`${API}/profile`, { withCredentials: true })
        .then((res) => {
          if (res.data.status == "success") {
            setProfile_user(res.data.data);
            console.log(res.data.data.password);
            // console.log("profile page data " + res.data);
          } else {
            window.location.href = "/login";
          }
        })
        .catch((err) => {
          console.log(err);
          window.location.href = "/login";
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getuserdata();
  }, []);

  // logout function
  const handlelogout = async () => {
    try {
      const res = await axios
        .get(`${API}/logout`, { withCredentials: true })
        .then((res) => {
          if (res.data.status == "success") {
            setLogout(res.data.data);
            window.location.href = "/login";
          } else {
            // window.location.href = "/login";
            console.log("logout error");
          }
        })
        .catch((err) => {
          console.log(err);
          window.location.href = "/login";
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Base>
        <div className="bg-gray-100">
          <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap md:-mx-2 ">
              {/* Left Side */}
              <div className="w-full md:w-3/12 md:mx-2  bg-white   border-t-4 border-gray-300">
                {/* Friends card */}
                <div className="bg-white p-3 hover:shadow">
                  <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                    <span className="text-green-500">
                      <BsImage />
                    </span>
                    <span>Profile Pic</span>
                  </div>
                  <div className="p-2 justify-center items-center flex">
                    <div className="flex flex-wrap">
                      <img
                        className="align-middle border-none rounded-full w-[100%]  object-cover"
                        src={profile_user.image}
                        alt="profile"
                      />
                    </div>
                  </div>
                </div>
                {/* End of friends card */}
                {/* Profile Card */}
                <div className="bg-white p-3 border-t-4  ">
                  <div className="image overflow-hidden">
                    <img
                      className="h-auto w-full mx-auto"
                      src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                      alt=""
                    />
                  </div>
                  <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    {profile_user.name}
                  </h1>
                  <h3 className="text-gray-600 font-lg text-semibold leading-6">
                    Owner at Her Company Inc.
                  </h3>
                  <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eligendi dolorum sequi illum qui unde
                    aspernatur non deserunt
                  </p>
                  <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li className="flex items-center py-3">
                      <span>Role</span>
                      <span className="ml-auto">
                        <span className="bg-gray-300  p-2 rounded text-black font-semibold text-[15px]">
                          {profile_user.role}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center py-3">
                      <span>Logout</span>
                      <span className="ml-auto">
                        <button
                          onClick={() => handlelogout()}
                          className="bg-gray-300 flex items-center hover:bg-red-700 p-2 rounded text-black font-semibold hover:text-white text-[15px]"
                        >
                          Logout <FiLogOut className="ml-2" />
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
                {/* End of profile card */}
                <div className="my-4" />
              </div>
              {/* Right Side */}
              <div className="w-full md:w-9/12 mx-2 h-64">
                {/* Profile tab */}
                {/* About Section */}
                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">About</span>
                  </div>
                  <div className="text-gray-700">
                    <div className="p-2   text-sm">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Name</div>
                        <div className="px-4 py-2">{profile_user.name}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email</div>
                        <div className="px-4 py-2">{profile_user.email}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Age</div>
                        <div className="px-4 py-2">{profile_user.age}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Contact No.
                        </div>
                        <div className="px-4 py-2">{profile_user.phone}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Address</div>
                        <div className="px-4 py-2">{profile_user.address}</div>
                      </div>
                    </div>
                  </div>
                  {/* <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-200 hover:shadow-xs p-3 my-4">
                    Edit Profile
                  </button> */}
                </div>
                {/* End of about section */}
                <div className="my-4" />
                {/* Experience and education */}
                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span clas="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Experience</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span clas="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Education</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-teal-600">
                            Masters Degree in Oxford
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Bachelors Degreen in LPU
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End of Experience and education grid */}
                </div>
                {/* End of profile tab */}
              </div>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}

export default Profile_page;
