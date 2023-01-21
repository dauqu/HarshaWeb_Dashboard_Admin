import React from 'react'
import Base from '../../components/Base/Base'

const DialedReport = () => {
  return (
    <Base>
      <div className='py-2 px-4 w-[100%] mt-5'>
        <div className="flex justify-between w-full">
          <h2 className='text-3xl font-bold'>
            All Batch Report


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
            <p className='text-lg text-black px-3 py-3'>Select User ID</p>
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
                <th className='px-3 py-2 border'>Campaign Name</th>
                <th className='px-3 py-2 border'>Total Calls</th>
                <th className='px-3 py-2 border'>Answered Calls</th>
                <th className='px-3 py-2 border'>Unanswered Calls</th>
                <th className='px-3 py-2 border'>Machine Calls</th>
                <th className='px-3 py-2 border'>Live Transfer</th>
                <th className='px-3 py-2 border'>DNC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border px-4 py-2'>First Campaign</td>
                <td className='border px-4 py-1 text-center'>
                    54
                </td>
                <td className='border px-4 py-1 text-center'>
                    15
                </td>
                <td className='border px-4 py-1 text-center'>
                    5
                </td>
                <td className='border px-4 py-1 text-center'>
                    1
                </td>
                <td className='border px-4 py-1 text-center'>
                    2
                </td>
                <td className='border px-4 py-2 flex'>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Base>
  )
}

export default DialedReport