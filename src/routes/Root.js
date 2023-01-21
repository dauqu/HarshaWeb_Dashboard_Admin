import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Campaign from "../pages/Campaign/Campaign";
import Caller from "../pages/Caller/Caller";

import AllAudio from "../pages/Audio/AllAudio";
import CelebrityRecording from "../pages/Audio/CelebrityRecording";
import UploadFile from "../pages/Audio/UploadFile";

import AllContacts from "../pages/Contacts/AllContacts";
import AddNewContact from "../pages/Contacts/AddNewContact";
import UploadNewContact from "../pages/Contacts/UploadNewContact";
import AllDNC from "../pages/Contacts/AllDNC";

import CallReport from "../pages/reports/CallReport";
import BatchReport from "../pages/reports/BatchReport";
import DialedReport from "../pages/reports/DialedReport";
import DNCReport from "../pages/reports/DNCReport";
import Payment from "../pages/reports/Payment";

import Analytics from "../pages/statistics/Analytics";

import GeneralSetting from "../pages/settings/GeneralSetting";
import ProfileSetting from "../pages/settings/ProfileSetting";
import ChangePassword from "../pages/settings/ChangePassword";
import LoginHistory from "../pages/settings/LoginHistory";
import Notification from "../pages/settings/Notification";
import Security from "../pages/settings/Security";
import Login from "../pages/Authenticate/Login";
import Signup from "../pages/Authenticate/Signup";
import Add_Category from "../components/Category/Add_Category";
import View_Category from "../components/Category/View_Category";
import AddProduct from "../components/Product/AddProduct";
import ViewProduct from "../components/Product/ViewProduct";
import ViewUsers from "../components/users/ViewUsers";
import ViewOrders from "../components/Orders/ViewOrders";
import ViewImages from "../components/Media/ViewImages";
import axios from "axios";
import Profile_page from "../pages/Profile/Profile_page";
import Edit_product from "../components/Product/Edit_product";
import Cancelled_order from "../components/Orders/Cancelled_order";
import Product_details from "../components/Product/Product_details";
import Add_user from "../components/users/Add_user";
axios.defaults.withCredentials = true;

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addcategory" element={<Add_Category />} />
        <Route path="/viewcategory" element={<View_Category />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/viewproduct" element={<ViewProduct />} />
        <Route path="/viewusers" element={<ViewUsers />} />
        <Route path="/adduser" element={<Add_user />} />
        <Route path="/vieworders" element={<ViewOrders />} />
        <Route path="/viewimages" element={<ViewImages />} />
        <Route path="/profile" element={<Profile_page />} />
        <Route path="/editproduct/:slug" element={<Edit_product />} />
        <Route path="/cancelled_order" element={<Cancelled_order />} />
        <Route path="/product_detail/:_id" element={<Product_details />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/caller" element={<Caller />} />

        <Route path="/all-audio" element={<AllAudio />} />
        <Route path="/upload-audio" element={<UploadFile />} />
        <Route path="/celebrity-recording" element={<CelebrityRecording />} />

        <Route path="/all-contacts" element={<AllContacts />} />
        <Route path="/add-new-contact" element={<AddNewContact />} />
        <Route path="/upload-new-contact" element={<UploadNewContact />} />
        <Route path="/all-dnc" element={<AllDNC />} />

        <Route path="/call-report" element={<CallReport />} />
        <Route path="/batch-report" element={<BatchReport />} />
        <Route path="/dialed-report" element={<DialedReport />} />
        <Route path="/dnc-report" element={<DNCReport />} />
        <Route path="/payments" element={<Payment />} />

        <Route path="/ananlytics" element={<Analytics />} />

        <Route path="/setting" element={<GeneralSetting />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/security" element={<Security />} />
        <Route path="/login-history" element={<LoginHistory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
