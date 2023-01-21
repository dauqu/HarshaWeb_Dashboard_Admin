import React from 'react'
import Base from '../../components/Base/Base'


const Payment = () => {
   return (
      <Base>
         <div className='py-2 px-4 w-[100%] mt-5'>
            <div className="flex justify-between w-full">
               <h2 className='text-3xl font-bold'>
                  Do Payments
               </h2>
               <div>
                  <select className="bg-blue-600 cursor-pointer flex flex-row items-center rounded-lg px-5 py-3 outline-none text-white">
                     <option value="volvo">Today</option>
                     <option value="volvo">Yesterday</option>
                     <option value="volvo">Last 7 Days</option>
                     <option value="volvo">Last 30 Days</option>
                     <option value="volvo">This Month</option>
                     <option value="volvo">Last Month</option>
                     <option value="volvo">Custom Range</option>
                  </select>
               </div>
            </div>
            <hr className='my-5 border-gray-500' />
         </div>
      </Base>
   )
}

export default Payment