import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../Constant";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // code for snackbar
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // code for login
  const handleSubmit = (e) => {
    setLoading(true);

    const resp = axios
      .post(
        `${API}/login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.status == "success") {
          console.log(res);
          setLoading(false);
          window.location.href = "/";
        } else {
          // alert("Invalid Credentials");
          setOpen(true);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setOpen(true);

        setLoading(false);
      });
  };

  return (
    <div className="bg-[#fafafa]">
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-4 m-4 md:max-w-sm md:mx-auto">
          {/* <span className="block w-full text-xl uppercase font-serif font-semibold mb-8 underline text-center">
            Angler 360
          </span> */}
          <span className=" px-4  block text-center w-full text-xl uppercase font-bold mb-4">
            Login
          </span>
          <form className="mb-4">
            <div className="px-4 py-2 flex flex-col">
              <p className="text-base font-semibold">Email</p>
              <input
                name={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none"
                placeholder="Enter email"
                required
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
                required
              />
            </div>
          </form>

          {loading ? (
            <div className="px-4 mt-2 py-2 flex items-center justify-center">
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white uppercase   text-sm font-semibold px-4   flex items-center justify-center focus:outline-none   sm:text-base     rounded py-2 w-full transition duration-150 ease-in cursor-not-allowed"
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
                Login
              </button>
            </div>
          )}

          <div className="mt-2 md:w-full text-center">
            <p className="text-[15px] text-[black] font-semibold  font-sans   pt-2">
              Don't Have Account ?
            </p>
            <div className="flex items-center text-center justify-center">
              <Link to="/signup">
                <p className="text-[14px]  hover:text-[red] text-[black] font-semibold font-sans  mb-2 pt-2">
                  Click Here To Signup
                </p>
              </Link>
            </div>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Invalid Credentials
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default Login;
