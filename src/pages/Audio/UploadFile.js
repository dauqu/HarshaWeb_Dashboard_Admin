import React from 'react'
import Base from '../../components/Base/Base'
import { BsUpload } from 'react-icons/bs'
import { AiFillSound } from 'react-icons/ai'
import { RiUploadCloud2Line } from 'react-icons/ri'
import './style.css'

const UploadFile = () => {
  return (
    <Base>
        <div className='py-2 px-4 w-[100%] mt-5'>
            <div className="flex w-full">
                <h2 className='text-3xl font-bold'>
                    Upload Audio Files
                </h2>
            </div>
            <hr className='my-5 border-gray-500' />
            <div className='flex flex-col w-full justify-center items-center'>
                <div className='flex flex-col justify-center items-center sm:w-[75%] sm:px-5 sm:py-8 p-3 w-full uploadarea bg-white'> 
                    <div className='flex flex-col sm:w-[80%] w-[90%] mt-3'>
                        <label htmlFor="username">User Name</label>
                        <input type="text" placeholder='User Name' id='username' className='text-base border-none outline-none' />
                    </div>
                    <div className='flex flex-col sm:w-[80%] w-[90%] mt-3'>
                        <label htmlFor="audiofilename">Audio File Name</label>
                        <input type="text" placeholder='Audio File Name' id='audiofilename' className='text-base border-none outline-none' />
                    </div>
                    <div className='uploadFileBtn sm:w-[80%] w-[90%]'>
                        <div>
                            <div className='sm:p-7 p-4'>
                                <BsUpload size={40} color={"white"} />
                            </div>
                            <p className='sm:text-lg text-base'>Upload Voice File</p>
                        </div>
                        <div>
                            <div className='sm:p-7 p-4'>
                                <AiFillSound size={40} color={"white"} />
                            </div>
                            <p className='sm:text-lg text-base'>Add To Speech</p>
                        </div>
                    </div>
                    <div className='sm:w-[80%] w-[90%]'>
                        <button className='w-full flex justify-center 
                        bg-teal-600 text-white items-center py-2 px-4 rounded-md mt-5'>    
                            <RiUploadCloud2Line size={20} color={"white"} className="mx-3" />
                            <span>
                                Upload
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </Base>
  )
}

export default UploadFile