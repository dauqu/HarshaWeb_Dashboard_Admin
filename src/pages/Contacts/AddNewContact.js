import React from 'react'
import './style.css'

import Base from '../../components/Base/Base'
import { AiOutlinePlus } from 'react-icons/ai'


const AddNewContact = () => {
    return (
        <Base>
            <div className='py-2 px-4 w-[100%] mt-5'>
                <div className="flex w-full">
                    <h2 className='text-3xl font-bold'>
                        Add New Contact
                    </h2>
                </div>
                <hr className='my-5 border-gray-500' />
                <div className='flex flex-col w-full justify-center items-center'>
                    <div className='flex flex-col justify-center items-center sm:w-[75%] w-[90%] sm:p-8 px-5 py-3 uploadarea bg-white'>
                        <div className='flex flex-row w-full justify-between items-center mt-3'>
                            <label htmlFor="select_campaign_name">Campaign Name</label>
                            <select id='select_campaign_name' className='style_select after:text-base border-none outline-none'>
                                <option value="">Campaign 1</option>
                                <option value="">Campaign 2</option>
                                <option value="">Campaign 3</option>
                            </select>
                        </div>
                        <div className='flex flex-row justify-between items-center w-full mt-3'>
                            <label htmlFor="country_to_dial">Country To Dial</label>
                            <select id='country_to_dial' className='style_select text-base border-none outline-none'>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                                <option value="china">China</option>
                            </select>
                        </div>
                        <div className='flex flex-row justify-between items-center w-full mt-3'>
                            <label htmlFor="list_name">Country To Dial</label>
                            <input type="text" placeholder='List Name' id='list_name' className='style_input text-base border-none outline-none' />
                        </div>
                        <div className='flex flex-row justify-between items-center w-full mt-3'>
                            <label htmlFor="list_description">List Description</label>
                            <input type="text" placeholder='List Name' id='list_description' className='style_input  text-base border-none outline-none' />
                        </div>

                        <div className='flex flex-row justify-between items-center w-full mt-3'>
                            <label htmlFor="anc_status">Status</label>
                            <select id='anc_status' className='style_input text-base border-none outline-none'>
                                <option value="active">Active</option>
                                <option value="inactive">inActive</option>
                            </select>
                        </div>

                        <div className='w-full'>
                            <button className='w-full flex justify-center 
                    bg-teal-600 text-white items-center py-2 px-4 rounded-md mt-5'>
                                <AiOutlinePlus size={20} color={"white"} className="mx-3" />
                                <span>
                                    Add List
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </Base>
    )
}

export default AddNewContact