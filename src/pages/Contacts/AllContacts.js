import React from 'react'

import Base from '../../components/Base/Base'
import { GrAdd } from 'react-icons/gr'

import { AiOutlineSearch, AiOutlineEye, AiOutlineDelete,  AiOutlineCloudDownload } from 'react-icons/ai'
import { IoMdAddCircleOutline} from 'react-icons/io'
import { CiEdit } from 'react-icons/ci'




const AllContacts = () => {
    return (
        <Base>
            <div className='py-2 px-4 w-[100%] mt-5'>
                <div className="flex justify-between w-full">
                    <h2 className='text-3xl font-bold'>
                        All Contacts
                    </h2>
                    <div className="bg-green-300 cursor-pointer flex flex-row items-center rounded-lg px-3 py-2">
                        <GrAdd size={20} className="mr-2 border-r-2" />
                        <button className='border-none text-lg font-bold p-0 m-0'>
                            Add New Contact
                        </button>
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
                                <th className='px-3 py-2 border'>Sr</th>
                                <th className='px-3 py-2 border'>List ID</th>
                                <th className='px-3 py-2 border'>List Name</th>
                                <th className='px-3 py-2 border'>Contacts</th>
                                <th className='px-3 py-2 border'>Campaign Name</th>
                                <th className='px-3 py-2 border'>Created Date</th>
                                <th className='px-3 py-2 border'>Status</th>
                                <th className='px-3 py-2 border'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>15454</td>
                                <td className='border px-4 py-2'>test lits 4</td>
                                <td className='border px-4 py-2'>544124</td>
                                <td className='border px-4 py-2'>Bradcasting_campaign</td>
                                <td className='border px-4 py-2'>6/3/22 15:34</td>
                                <td className='border px-4 py-2'>Active</td>
                                <td className='border px-4 py-2'>
                                    <div className='flex items-center'>
                                        <IoMdAddCircleOutline size={25} className="mx-1 cursor-pointer" />
                                        <AiOutlineSearch size={25} className="mx-1 cursor-pointer" />
                                        <AiOutlineEye size={25} className="mx-1 cursor-pointer" />
                                        <AiOutlineCloudDownload size={25} className="mx-1 cursor-pointer" />
                                        <CiEdit size={25} className="mx-1 cursor-pointer" />
                                        <AiOutlineDelete size={25} className="mx-1 cursor-pointer" />
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

export default AllContacts