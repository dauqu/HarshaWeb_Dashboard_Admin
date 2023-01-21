import { Snackbar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Base from "../../components/Base/Base";
import { API } from "../../Constant";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ChangePassword = () => {
  const [userid, setUserid] = useState([]);
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [fillallFields, setFillallFields] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [geterror, setGeterror] = useState(false);
  const [pswnotmatch, setPswnotmatch] = useState(false);

  // code to get user profile data
  useEffect(() => {
    axios
      .get(`${API}/profile`)
      .then((res) => {
        // console.log(res.data);
        setUserid(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // code to match new password with confirm password

  const handleUpdate = (e) => {
    if (
      newpassword === "" ||
      confirmpassword === "" ||
      newpassword === null ||
      confirmpassword === null ||
      newpassword === undefined ||
      confirmpassword === undefined
    ) {
      setFillallFields(true);
      return;
    }
    if (newpassword !== confirmpassword) {
      setPswnotmatch(true);
    } else {
      axios
        .patch(`${API}/getuser/update/password/${userid._id}`, {
          password: newpassword,
        })
        .then((res) => {
          console.log(res.data);
          setOpen(true);
        })
        .catch((err) => {
          console.log(err);
          setGeterror(true);
        });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setGeterror(false);
  };

  const handlePswNotMatchClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    pswnotmatch(false);
  };

  const handleFillAllFieldsClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setFillallFields(false);
  };

  return (
    <Base>
      <div className="py-2 px-4 w-[100%] mt-5">
        <div className="flex w-full">
          <h2 className="md:text-2xl text-[18px] font-semibold">
            Change Password ({userid.email})
          </h2>
        </div>
        <hr className="my-5 border-gray-400" />
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex flex-col justify-center items-center sm:w-[75%] w-[90%] sm:p-8 px-5 py-3 uploadarea bg-white">
            <div className="flex flex-row justify-between items-center w-full mt-3">
              <label htmlFor="list_description">New Password</label>
              <input
                name={newpassword}
                onChange={(e) => setNewpassword(e.target.value)}
                type="text"
                placeholder="New Password"
                id="list_description"
                className="style_input  text-base border-2 outline-none"
                required
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full mt-3">
              <label htmlFor="list_name">Confirm Password</label>
              {/* input field validation to check field is empty or not */}

              <input
                name={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                type="text"
                placeholder="Confirm Password"
                id="list_name"
                className="style_input  text-base border-2 outline-none"
                required
              />
            </div>

            <div className="mt-6 w-full">
              <button
                onClick={() => handleUpdate()}
                className="w-full flex justify-center 
                    bg-teal-600 text-white items-center py-2 px-4 rounded-md mt-5"
              >
                {/* <AiOutlinePlus size={20} color={"white"} className="mx-3" /> */}
                <span>Change Password</span>
              </button>
            </div>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Password changed Successfully!
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={geterror}
          autoHideDuration={2000}
          onClose={() => setGeterror(false)}
        >
          <Alert
            onClose={() => setGeterror(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            Error in changing password!
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={pswnotmatch}
          autoHideDuration={1000}
          onClose={() => setPswnotmatch(false)}
        >
          <Alert
            onClose={() => setPswnotmatch(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            Password does not match!
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={fillallFields}
          autoHideDuration={1000}
          onClose={() => setFillallFields(false)}
        >
          <Alert
            onClose={() => setFillallFields(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            Please fill all fields !
          </Alert>
        </Snackbar>
      </div>
    </Base>
  );
};

export default ChangePassword;
