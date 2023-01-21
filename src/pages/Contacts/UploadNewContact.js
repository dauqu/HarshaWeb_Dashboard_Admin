import React from 'react'

import Base from '../../components/Base/Base'
import { AiOutlinePlus } from 'react-icons/ai'

const UploadNewContact = () => {
    return (
        <Base>
            <div className='py-2 px-4 w-[100%] mt-5'>

                {/* header  */}
                <div className="flex w-full">
                    <h2 className='text-3xl font-bold'>
                        Upload New Contact
                    </h2>
                </div>

                <hr className='my-5 border-gray-500' />


                <div className='w-full h-full flex md:flex-row flex-col md:justify-evenly md:items-start items-center gap-5'>
                    {/* left side  */}
                    <div className='flex flex-col justify-center items-center md:w-[60%] w-[95%] md:px-4 md:py-5 p-3 upload_new_contact bg-white'>
                        <div className='flex flex-row w-full justify-between items-center mt-3'>
                            <label htmlFor="select_campaign_name" >List ID Override</label>
                            <select id='select_campaign_name' className='style_select text-base border-none outline-none'>
                                <option value="">45214241- India</option>
                                <option value="">658741 - China</option>
                                <option value="">4352412 - USA</option>
                            </select>
                        </div>

                        <div className='flex flex-row justify-between items-center w-full mt-3'>
                            <label htmlFor="country_toDial">Country To Dial</label>
                            <input type="text" placeholder=' List Name' id='country_toDial' className='style_input text-base border-none outline-none' />
                        </div>

                        <div className='flex flex-row justify-between items-center w-full mt-3'>
                            <label htmlFor="country_to_dial">Remove Duplicate</label>
                            <select id='select_campaign_name' className='style_select text-base border-none outline-none'>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                        <div className='flex flex-row justify-between items-center w-full mt-3'>
                            <label htmlFor="csv_file">CSV File</label>
                            <input type="file" placeholder=' List Name' id='csv_file' className='style_input text-base border-none outline-none' />
                        </div>

                        <div className='flex flex-row justify-between items-center w-full mt-3'>
                            <label htmlFor="anc_status">Confirm Your Date</label>
                            <select id='anc_status' className='style_select text-base border-none outline-none'>
                                <option value="active">Yes</option>
                                <option value="inactive">No</option>
                            </select>
                        </div>

                        <div>
                            <button className='w-full flex justify-center 
                                bg-teal-600 text-white items-center py-2 px-4 rounded-md mt-5'>
                                <AiOutlinePlus size={20} color={"white"} className="mx-3" />
                                <span>
                                    Add List
                                </span>
                            </button>
                        </div>
                    </div>
                    
                    {/* right side  */}
                    <div className='md:w-[40%] w-[95%] md:px-4 md:py-5 p-3 shadow-lg rounded-lg bg-white h-full'>
                        <div className='unc_notice'>
                            <div className='flex items-center justify-between my-4'>
                                <p className='text-lg font-medium'>
                                    Upload Instructions :
                                </p>
                                <button className='bg-blue-500 px-3 py-1 text-white rounded-md'>
                                    Download Sample File
                                </button>
                            </div>

                            <p>
                                You can upload an CSV file up to 10MB. If your file exceeds 10MB (roughly 35000 contacts), you will need to upload multiple files as separate lists.
                            </p>
                            <p>
                                You have already uploaded 2 contacts in selected list, you can upload maximum 34998 contacts in selected list.
                            </p>
                            <p>
                                Please format the first row of your columns with the proper column names, i.e.: "Telephone," "First Name," "Last Name," "Address," "City," "State," "ZIP Code," "Gender," "DOB," "Email," and "Comments."
                            </p>
                            <p>
                                *Only the Phone Number field is required; all other fields are optional.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </Base>
    )
}

export default UploadNewContact