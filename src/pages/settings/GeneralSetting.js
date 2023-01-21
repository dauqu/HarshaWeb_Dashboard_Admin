import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Base from "../../components/Base/Base";

const GeneralSetting = () => {
  return (
    <Base>
      <div className="py-2 px-4 w-[100%] mt-5">
        <div className="flex w-full">
          <h2 className="md:text-2xl text-[18px] font-semibold">
            Edit Product
          </h2>
        </div>
        <hr className="my-2 border-gray-400" />

        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex flex-col justify-center items-center sm:w-[100%] w-[100%] sm:p-6  px-5 py-3 uploadarea bg-white">
            <form
              action="#"
              className="w-[100%]"
              encType="multipart/form-data"
              //   onSubmit={(e) => handleSubmit(e)}
            >
              <div className="flex flex-row justify-between items-center w-full mt-2">
                <label htmlFor="list_name">Name</label>
                <input
                  // value={product_name}
                  // onChange={(e) => setProduct_name(e.target.value)}
                  type="text"
                  id="list_name"
                  className="style_input  text-base border-2 outline-none"
                />
              </div>
              <div className="flex flex-row justify-between items-center w-full mt-2">
                <label htmlFor="list_name">Username</label>
                <input
                  // value={product_name}
                  // onChange={(e) => setProduct_name(e.target.value)}
                  type="text"
                  id="list_name"
                  className="style_input  text-base border-2 outline-none"
                />
              </div>
              <div className="flex flex-row justify-between items-center w-full mt-2">
                <label htmlFor="list_name">Age</label>
                <input
                  // value={product_title}
                  // onChange={(e) => setProduct_title(e.target.value)}
                  type="text"
                  id="list_name"
                  className="style_input  text-base border-2 outline-none"
                />
              </div>
              <div className="flex flex-row justify-between items-center w-full mt-2">
                <label htmlFor="list_name">Address</label>
                <textarea
                  // value={product_description}
                  // onChange={(e) => setProduct_description(e.target.value)}
                  type="text"
                  id="list_name"
                  className="style_input  text-base border-2 outline-none"
                />
              </div>

              <div className="flex flex-row justify-between items-center w-full mt-3">
                <label htmlFor="anc_status">Role</label>
                <select
                  // value={product_type}
                  id="anc_status"
                  // onChange={(e) => setProduct_type(e.target.value)}
                  className="style_input text-base border-2 outline-none"
                >
                  {/* {category.map((item, key) => {
                    return (
                      <>
                        <option value={item.category_name} key={key}>
                          {item.category_name}
                        </option>
                      </>
                    );
                  })} */}
                </select>
              </div>
              <div className="flex flex-row justify-between items-center w-full mt-2">
                <label htmlFor="list_name">Contact</label>
                <input
                  // value={product_price}
                  // onChange={(e) => setProduct_price(e.target.value)}
                  type="number"
                  id="list_name"
                  className="style_input  text-base border-2 outline-none"
                />
              </div>

              <div className="flex flex-row justify-between items-center w-full mt-3">
                <label htmlFor="anc_status">Status</label>
                <select
                  // value={status}
                  // onChange={(e) => setStatus(e.target.selectedOptions[0].value)}
                  id="anc_status"
                  className="style_input text-base border-2 outline-none"
                >
                  <option>Select Option --</option>
                  <option value="active">Active</option>
                  <option value="Inactive">InActive</option>
                </select>
              </div>
              {/* <div className="flex flex-row justify-between items-center w-full mt-2">
                  <label htmlFor="list_name">Product Image</label>
                  <input
                    type="file"
                    name="banner"
                    placeholder="Product Title"
                    id="list_name"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="style_input  text-base border-2 outline-none"
                  />
                </div> */}
              <div className="w-full">
                <button
                  type="submit"
                  // onSubmit={(e) => handleSubmit(e)}
                  className="w-full flex justify-center 
                  bg-teal-600 text-white items-center py-2 px-4 rounded-md mt-5"
                >
                  <AiOutlinePlus size={20} color={"white"} className="mx-3" />
                  <span>Update Product</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default GeneralSetting;
