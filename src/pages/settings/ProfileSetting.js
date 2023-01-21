import React from 'react'
import Base from '../../components/Base/Base'


const ProfileSetting = () => {
   return (
      <Base>
         <div className='py-2 px-6 w-[100%] mt-5'>

            {/* first table  */}
            <div className="my-4 w-full bg-white shadow-lg">
               {/* header  */}
               <div className="py-2 px-2 w-full bg-gray-200 border-l-8 border-gray-400 ">
                  <h2 className='text-xl font-bold text-gray-700 font-sans'>Basic Information</h2>
               </div>
               {/* table body  */}
               <div className="grid sm:grid-cols-2 grid-col-1 sm:gap-x-7 py-2">
                  <div className="">
                     <div className='px-4 py-2 flex flex-col' >
                        <p className="text-base font-semibold">Acount Status</p>
                        <input type={'text'} className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none" placeholder="account status" />
                     </div>
                     <div className='px-4 py-2 flex flex-col' >
                        <p className="text-base font-semibold">First Name</p>
                        <input type={'text'} className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none" placeholder="first name" />
                     </div>
                     <div className='px-4 py-2 flex flex-col' >
                        <p className="text-base font-semibold">Email</p>
                        <input type={'text'} className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none" placeholder="email" />
                     </div>
                     <div className='px-4 py-2 flex flex-col' >
                        <p className="text-base font-semibold">Notification</p>
                        <div className='grid grid-cols-3 my-2'>
                           <div className='flex justify-start items-center'>
                              <input type="checkbox" name="" id="" />
                              <p className='ml-1'>Email</p>
                           </div>
                           <div className='flex justify-start items-center'>
                              <input type="checkbox" name="" id="" />
                              <p className='ml-1'>Phone</p>
                           </div>
                           <div className='flex justify-start items-center'>
                              <input type="checkbox" name="" id="" />
                              <p className='ml-1'>SMS</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="">
                     <div className='px-4 py-2 flex flex-col' >
                        <p className="text-base font-semibold">Company Name</p>
                        <input type={'text'} className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none" placeholder="company name" />
                     </div>
                     <div className='px-4 py-2 flex flex-col' >
                        <p className="text-base font-semibold">Last Name</p>
                        <input type={'text'} className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none" placeholder="last name" />
                     </div>
                     <div className='px-4 py-2 flex flex-col' >
                        <p className="text-base font-semibold">Phone No.</p>
                        <input type={'text'} className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none"
                           placeholder="745 4544 454" />
                     </div>
                  </div>
               </div>
            </div>

            {/* second table */}
            <div className="mt-6 w-full bg-white shadow-lg">
               {/* header  */}
               <div className="py-2 px-2 w-full bg-gray-200 border-l-8 border-gray-400 ">
                  <h2 className='text-xl font-bold text-[#525252] font-sans'>Service Details</h2>
               </div>
               {/* table body  */}
               <div className="grid sm:grid-cols-2 grid-col-1 sm:gap-x-7 pb-3 py-2 rounded-sm">
                  <div>
                     <div className='px-4 py-2 flex flex-col' >
                        <p className="text-base font-semibold">Address</p>
                        <input type={'text'} className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none" placeholder="address" />
                     </div>
                     <div className='px-4 py-2 flex flex-col' >
                        <p className="text-base font-semibold">State</p>
                        <input type={'text'} className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none" placeholder="state" />
                     </div>
                     <div className='px-4 py-2 flex flex-col' >
                        <p className="text-base font-semibold">Postal Code</p>
                        <input type={'text'} className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none" placeholder="postal code" />
                     </div>

                  </div>
                  <div>
                     <div className='px-4 py-2 flex flex-col' >
                        <p className="text-base font-semibold">Country</p>
                        <input type={'text'} className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none" placeholder="account status" />
                     </div>
                     <div className='px-4 py-2 flex flex-col' >
                        <p className="text-base font-semibold">City</p>
                        <input type={'text'} className="py-1 px-3 border-[1px] border-gray-400 mt-2 rounded-sm outline-none" placeholder="first name" />
                     </div>
                  </div>
               </div>
            </div>

            <div className='sm:mt-5 mt-5 flex justify-end w-full' >      
               <input type={'submit'} className="py-2 cursor-pointer rounded-md sm:w-[50%] w-full border-[1px] text-white text-[18px] bg-blue-400 mt-2 outline-none"
               value={"Update"} />
            </div>
         </div>
      </Base>
   )
}

export default ProfileSetting