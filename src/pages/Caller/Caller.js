import React from 'react'
import Base from '../../components/Base/Base'
import { GrAdd } from 'react-icons/gr'
import { VscDebugStart } from 'react-icons/vsc'
import { AiOutlinePause } from 'react-icons/ai'
import { BsStop } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'



const Caller = () => {
  return (
    <Base>
            <div className='py-2 px-4 w-[100%] mt-5'>
                <div className="flex justify-between w-full">
                    <h2 className='text-3xl font-bold'>
                        Caller Id List
                    </h2>
                    <div className="bg-green-300 cursor-pointer flex flex-row items-center rounded-lg px-3 py-2">
                        <GrAdd size={20} className="mr-2 border-r-2" />
                        <button className='border-none text-lg font-bold p-0 m-0'>Add Caller ID</button>
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
                                <th className='px-3 py-2 border'>User Name</th>
                                <th className='px-3 py-2 border'>Caller ID</th>
                                <th className='px-3 py-2 border'>Status</th>
                                <th className='px-3 py-2 border'>Verified Date</th>
                                <th className='px-3 py-2 border'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>Rishab_123</td>
                                <td className='border px-4 py-2'>645U7H8545UDF</td>
                                <td className='border px-4 py-2'>active</td>
                                <td className='border px-4 py-2'>6/3/22 15:34</td>
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

export default Caller