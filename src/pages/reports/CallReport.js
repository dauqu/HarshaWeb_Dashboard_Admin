import React from 'react'
import Base from '../../components/Base/Base'

const CallReport = () => {
  return (
    <Base>
            <div className='py-2 px-4 w-[100%] mt-5'>
                <div className="flex justify-between w-full">
                    <h2 className='text-3xl font-bold'>
                        Call Details Report
                    </h2>
                    <div>
                        <select className="bg-blue-400 cursor-pointer flex flex-row items-center rounded-lg px-5 py-3 outline-none text-white">
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
                    <select className='px-4 py-3 shadow-lg rounded-lg outline-none border-none'>
                      <option value="1254412">1254412 - Rishab</option>
                    </select>
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-lg text-black px-3 py-3'>Select Campaign</p>
                    <select className='px-4 py-3 shadow-lg rounded-lg outline-none border-none'>
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
                                <th className='px-3 py-2 border'>Call Start Time</th>
                                <th className='px-3 py-2 border'>Caller ID</th>
                                <th className='px-3 py-2 border'>Telephone</th>
                                <th className='px-3 py-2 border'>Duration</th>
                                <th className='px-3 py-2 border'>Disposition</th>
                                <th className='px-3 py-2 border'>Dial Status</th>
                                <th className='px-3 py-2 border'>Digit Response</th>
                                <th className='px-3 py-2 border'>Digit Action</th>
                                <th className='px-3 py-2 border'>Call ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border px-4 py-2'>01/02/2022 10:35:54</td>
                                <td className='border px-4 py-2'>Rishab_123</td>
                                <td className='border px-4 py-2'>46543431321</td>
                                <td className='border px-4 py-2'>5 Min</td>
                                <td className='border px-4 py-2'>Answered</td>
                                <td className='border px-4 py-2'>Not Answered</td>
                                <td className='border px-4 py-2'>N/A</td>
                                <td className='border px-4 py-2'>N/A</td>
                                <td className='border px-4 py-2'>5411254</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Base>
  )
}

export default CallReport