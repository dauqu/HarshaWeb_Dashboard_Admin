import React from 'react'
import Base from '../../components/Base/Base'

import { GiSwapBag } from 'react-icons/gi'
import { BiPhoneOutgoing } from 'react-icons/bi'
import { TbPhoneCalling } from 'react-icons/tb'
import { FcEndCall } from 'react-icons/fc'

const Analytics = () => {
  return (
    <Base>
    <div className='py-2 px-4 w-[100%] mt-5'>
      <div className="flex justify-between w-full">
        <h2 className='text-3xl font-bold'>
          Statistics
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


      {/* search and filter area  */}
      <div className='flex md:flex-row md:items-center md:justify-between flex-col rounded-lg  px-5 py-3 my-4 w-full bg-gray-600'>
        <div className='text-white'>
          <span>Show</span>
          <input value={10} class="rounded-md py-[7px] border-none outline-none mx-3 w-[70px] text-black text-center" type="text" />
          <span>Entries</span>
        </div>
        <div className='max-md:my-3'>
          <button className='mx-2 px-5 py-2 bg-blue-600 font-bold rounded-md text-white'>Copy</button>
          <button className='mx-2 px-5 py-2 bg-blue-600 font-bold rounded-md text-white'>Excel</button>
          <button className='mx-2 px-5 py-2 bg-blue-600 font-bold rounded-md text-white'>CSV</button>
        </div>
        <div className='flex items-center max-md:w-full'>
          <span className='text-white mr-3'>Search: </span>
          <input type="search" className='max-md:w-full px-3 py-[7px] rounded-md outline-none border-none' placeholder='Search..' />
        </div>
      </div>

      <div className='max-width-[90%] campaigntable overflow-x-auto shadow-lg'>
        <table className='bg-white w-[100%]'>
          <thead>
            <tr>
              <th className='px-3 py-2 border'>Campaign</th>
              <th className='px-3 py-2 border'>Processed</th>
              <th className='px-3 py-2 border'>Completed</th>
              <th className='px-3 py-2 border'>Failed</th>
              <th className='px-3 py-2 border'>ACD</th>
              <th className='px-3 py-2 border'>ASR</th>
              <th className='px-3 py-2 border'>COST</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border px-4 py-2'>Voice_Broadcast_USATEST</td>
              <td className='border px-4 py-1 text-center'>50</td>
              <td className='border px-4 py-1 text-center'>10</td>
              <td className='border px-4 py-1 text-center'>0</td>
              <td className='border px-4 py-1 text-center'>0</td>
              <td className='border px-4 py-1 text-center'>0</td>
              <td className='border px-4 py-2 flex'>0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='max-width-[90%] grid md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5 mt-8'>
        <div className="w-full bg-white flex justify-between items-center px-5 py-3 shadow-lg">
          <p className='text-[17px] text-gray-700 font-bold'>
            Total Cost (USD)
          </p>
          <div className="flex flex-row">
              <GiSwapBag size={25} className={"text-amber-600 mr-3"} />
              <span className="text-[18px] font-bold">25</span>
          </div>
        </div>
        <div className="w-full bg-white flex justify-between items-center px-5 py-3 shadow-lg">
          <p className='text-[17px] text-gray-700 font-bold'>
            Total Proceed Calls :
          </p>
          <div className="flex flex-row">
            <BiPhoneOutgoing size={25} className={"text-green-600 mr-3"} />
            <span className="text-[18px] font-bold">25</span>
          </div>
        </div>
        <div className="w-full bg-white flex justify-between items-center px-5 py-3 shadow-lg">
          <p className='text-[17px] text-gray-700 font-bold'>
            Total Answered Calls
          </p>
          <div className="flex flex-row">
            <TbPhoneCalling size={25} className={"text-blue-600 mr-3"} />
            <span className="text-[18px] font-bold">25</span>
          </div>
        </div>
        <div className="w-full bg-white flex justify-between items-center px-5 py-3 shadow-lg">
          <p className='text-[17px] text-gray-700 font-bold'>
            Total Unanswered Call
          </p>
          <div className="flex flex-row">
            <FcEndCall size={25} className={"text-red-600 mr-3"} />
            <span className="text-[18px] font-bold">25</span>
          </div>
        </div>
      </div>

    </div>
  </Base>
  )
}

export default Analytics