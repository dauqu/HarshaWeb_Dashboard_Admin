import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../Constant";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("age", age);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("password", password);
    formData.append("picture", image);
    formData.append("role", role);

    setLoading(true);
    const resp = axios
      .post(`${API}/signup`, formData)
      .then((res) => {
        console.log(res);
        alert("User Created Successfully");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Credentials");
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="bg-[#ececec]">
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container md:max-w-lg max-w-sm mx-auto flex-1 flex flex-col items-center justify-center  ">
            <div className="bg-white px-4 py-8 rounded shadow-md text-black w-full">
              {/* <span className="block w-full text-xl uppercase font-serif font-semibold mb-8 underline text-center">
                                Angler 360
                            </span> */}
              <span className=" px-4 block text-center w-full text-xl  font-bold mb-4">
                SignUp
              </span>
              <form encType="multipart/form-data">
                <div className="grid md:grid-cols-2 grid-cols-1">
                  <div className="px-4 py-2 flex flex-col">
                    <p className="text-base font-semibold">Name</p>
                    <input
                      type="text"
                      name={name}
                      onChange={(e) => setName(e.target.value)}
                      className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="px-4 py-2 flex flex-col">
                    <p className="text-base font-semibold">Username</p>
                    <input
                      type="text"
                      name={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none"
                      placeholder="Enter Username"
                    />
                  </div>

                  <div className="px-4 py-2 flex flex-col">
                    <p className="text-base font-semibold">Email</p>
                    <input
                      type="email"
                      name={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="px-4 py-2 flex flex-col">
                    <p className="text-base font-semibold">Phone Number</p>
                    <input
                      type="number"
                      name={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none"
                      placeholder="Enter Number"
                    />
                  </div>
                  <div className="px-4 py-2 flex flex-col">
                    <p className="text-base font-semibold">Password</p>
                    <input
                      type="password"
                      name={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="px-4 py-2 flex flex-col">
                    <p className="text-base font-semibold">Role</p>
                    <input
                      type="text"
                      name={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="px-4 py-2 flex flex-col">
                    <p className="text-base font-semibold">Age</p>
                    <input
                      type="number"
                      name={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none"
                      placeholder="Enter Age"
                    />
                  </div>
                  <div className="px-4 py-2 flex flex-col">
                    <p className="text-base font-semibold">Image</p>
                    <input
                      type="file"
                      name="picture"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none"
                    />
                  </div>
                </div>

                <div className="px-4 py-2 flex flex-col">
                  <p className="text-base font-semibold">Address</p>
                  <textarea
                    type="text"
                    name={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="py-1 w-full  resize-none px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none"
                    placeholder="Enter Address"
                    rows={4}
                  />
                </div>

                {loading ? (
                  <div className="px-4 mt-2 py-2 flex items-center justify-center">
                    <button
                      type="button"
                      className="bg-green-500 hover:bg-green-700 text-white uppercase   text-sm font-semibold px-4   flex items-center justify-center focus:outline-none  sm:text-base rounded py-2 w-full transition duration-150 ease-in cursor-not-allowed"
                    >
                      <svg
                        className="w-5 h-5 mr-3 -ml-1 text-black font-bold animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Loading...
                    </button>
                  </div>
                ) : (
                  <div className="px-4 mt-2 py-2 flex flex-col">
                    <button
                      type="submit"
                      onClick={() => handleSubmit()}
                      className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                    >
                      SignUp
                    </button>
                  </div>
                )}
              </form>

              <div className="flex items-center mt-2 text-center justify-center">
                <p className="text-[15px] text-[black]   font-sans font-bold mb-2 pt-2">
                  If you have an account then ?
                </p>
                <span className="ml-2 hover:text-[red] cursor-pointer font-semibold">
                  <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
