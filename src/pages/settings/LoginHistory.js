import React from 'react'
import Base from '../../components/Base/Base'

const LoginHistory = () => {
  return (
    <Base>
      <div className='py-2 px-4 w-[100%] mt-5'>
        <div className="flex justify-between w-full">
          <h2 className='text-3xl font-bold'>
            Login History
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
                <th className='px-3 py-2 border'>ID</th>
                <th className='px-3 py-2 border'>User ID</th>
                <th className='px-3 py-2 border'>Login IP Address</th>
                <th className='px-3 py-2 border'>Login Time</th>
                <th className='px-3 py-2 border'>Logout Time</th>
                <th className='px-3 py-2 border'>Logout By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border px-4 py-2'>074</td>
                <td className='border px-4 py-1 text-center'>454</td>
                <td className='border px-4 py-1 text-center'>155.252.154.54</td>
                <td className='border px-4 py-1 text-center'>10:05:12</td>
                <td className='border px-4 py-1 text-center'>05:10:50</td>
                <td className='border px-4 py-1 text-center'>Rishab</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Base>
  )
}

export default LoginHistory