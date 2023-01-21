import React from 'react'
import Base from '../../components/Base/Base'
import './style.css'
import { VscDebugStart } from 'react-icons/vsc'
import { AiOutlinePause } from 'react-icons/ai'
import { BsStop } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import { GrAdd } from 'react-icons/gr'

const Campaign = () => {
    return (
        <Base>
            <div className='py-2 px-4 w-[100%] mt-5'>
                <div className="flex justify-between w-full">
                    <h2 className='sm:text-3xl text-xl font-bold'>
                        Campaign
                    </h2>
                    <div className="bg-green-300 cursor-pointer flex flex-row items-center rounded-lg sm:px-3 sm:py-2 p-2">
                        <GrAdd size={20} className="mr-2" />
                        <button className='border-none sm:text-lg text-base font-bold p-0 m-0'>Add New Campaign</button>
                    </div>
                </div>

                <hr className='my-5 border-gray-500' />

                {/* search box  */}
                <div className='flex justify-between rounded-lg sm:items-center items-start px-5 py-3 my-4 w-full bg-gray-600'>
                    <div className='text-white flex sm:flex-row flex-col sm:items-center items-start'>
                        <span>Show</span>
                        <input value={10} class="rounded-md py-[7px] border-none outline-none sm:mx-3 mx-1 sm:w-[70px] w-[50px] text-black text-center" type="text" />
                        <span>Entries</span>
                    </div>
                    <div className='flex sm:flex-row flex-col sm:items-center items-start'>
                        <span className='text-white sm:mr-3 max-sm:mb-2'>Search: </span>
                        <input type="search" className='px-3 py-[7px] rounded-md outline-none border-none' placeholder='Search..' />
                    </div>
                </div>

                <div className='max-width-[90%] campaigntable overflow-x-auto shadow-lg'>
                    <table className='bg-white w-[100%]'>
                        <thead>
                            <tr>
                                <th className='px-3 py-2 border'>ID</th>
                                <th className='px-3 py-2 border'>Campaign Name</th>
                                <th className='px-3 py-2 border'>Campaign Type</th>
                                <th className='px-3 py-2 border'>Username</th>
                                <th className='px-3 py-2 border'>Created Date</th>
                                <th className='px-3 py-2 border'>Updated Date</th>
                                <th className='px-3 py-2 border'>Pacing</th>
                                <th className='px-3 py-2 border'>Status</th>
                                <th className='px-3 py-2 border'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>Voice_Broadcast_Demo20_USA</td>
                                <td className='border px-4 py-2'>Voice Survey</td>
                                <td className='border px-4 py-2'>demo20</td>
                                <td className='border px-4 py-2'>17-10-2022 13:15</td>
                                <td className='border px-4 py-2'>22-11-2022 11:59</td>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>Stop</td>
                                <td className='border px-4 py-2'>
                                    <div className='flex items-center'>
                                        <VscDebugStart size={25} className="mx-2 cursor-pointer" />
                                        <AiOutlinePause size={25} className="mx-2 cursor-pointer" />
                                        <BsStop size={25} className="mx-2 cursor-pointer" />
                                        <CiSettings size={25} className="mx-2 cursor-pointer" />
                                        <MdDeleteOutline size={25} className="mx-2 cursor-pointer" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>Voice_Broadcast_Demo20_USA</td>
                                <td className='border px-4 py-2'>Voice Survey</td>
                                <td className='border px-4 py-2'>demo20</td>
                                <td className='border px-4 py-2'>17-10-2022 13:15</td>
                                <td className='border px-4 py-2'>22-11-2022 11:59</td>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>Stop</td>
                                <td className='border px-4 py-2'>
                                    <div className='flex items-center'>
                                        <VscDebugStart size={25} className="mx-2 cursor-pointer" />
                                        <AiOutlinePause size={25} className="mx-2 cursor-pointer" />
                                        <BsStop size={25} className="mx-2 cursor-pointer" />
                                        <CiSettings size={25} className="mx-2 cursor-pointer" />
                                        <MdDeleteOutline size={25} className="mx-2 cursor-pointer" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>Voice_Broadcast_Demo20_USA</td>
                                <td className='border px-4 py-2'>Voice Survey</td>
                                <td className='border px-4 py-2'>demo20</td>
                                <td className='border px-4 py-2'>17-10-2022 13:15</td>
                                <td className='border px-4 py-2'>22-11-2022 11:59</td>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>Stop</td>
                                <td className='border px-4 py-2'>
                                    <div className='flex items-center'>
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

export default Campaign