import React from 'react'
import Base from '../../components/Base/Base'
import { VscDebugStart } from 'react-icons/vsc'
import { AiOutlinePause } from 'react-icons/ai'
import { BsStop } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'


const DNCReport = () => {
  return (
    <Base>
      <div className='py-2 px-4 w-[100%] mt-5'>
        <div className="flex justify-between w-full">
          <h2 className='text-3xl font-bold'>
            Do Not Call Report
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

        <div className='grid grid-cols-2 gap-x-3'>
          <div className='flex flex-col'>
            <p className='text-lg text-black px-3 py-3'>Select User</p>
            <select className='px-4 py-3 shadow-md shadow-stone-300 rounded-lg outline-none border-none'>
              <option value="1254412">1254412 - Rishab</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <p className='text-lg text-black px-3 py-3'>Select Campaign</p>
            <select className='px-4 py-3 shadow-md shadow-stone-300 rounded-lg outline-none border-none'>
              <option value="all">All - Campaign</option>
            </select>
          </div>
        </div>


        <div className='flex justify-between rounded-lg items-center px-5 py-3 my-4 w-full bg-gray-600'>
          <div className='text-white'>
            <span>Show</span>
            <input value={10} class="rounded-md py-[7px] border-none outline-none mx-3 w-[70px] text-black text-center" type="text" />
            <span>Entries</span>
          </div>
          <div className='flex items-center'>
            <span className='text-white mr-3'>Search: </span>
            <input type="search" className='px-3 py-[7px] rounded-md outline-none border-none' placeholder='Search..' />
          </div>
        </div>

        <div className='max-width-[90%] campaigntable overflow-x-auto shadow-lg'>
          <table className='bg-white w-[100%]'>
            <thead>
              <tr>
                <th className='px-3 py-2 border'>S.No.</th>
                <th className='px-3 py-2 border'>Phone</th>
                <th className='px-3 py-2 border'>Call ID</th>
                <th className='px-3 py-2 border'>Added Date</th>
                <th className='px-3 py-2 border'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border px-4 py-2'>1</td>
                <td className='border px-4 py-1 text-center'>6543532132</td>
                <td className='border px-4 py-1 text-center'>65412</td>
                <td className='border px-4 py-1 text-center'>5th Dec. 2022</td>
                <td className='border px-4 py-1 text-center'>
                <div className='flex items-center justify-center'>
                    <VscDebugStart size={25} className="mx-2 cursor-pointer" />
                    <AiOutlinePause size={25} className="mx-2 cursor-pointer" />
                    <BsStop size={25} className="mx-2 cursor-pointer" />
                    <CiSettings size={25} className="mx-2 cursor-pointer" />
                    <MdDeleteOutline size={25} className="mx-2 cursor-pointer" />
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Base>
  )
}

export default DNCReport