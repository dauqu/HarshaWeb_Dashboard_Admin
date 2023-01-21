import React from 'react'
import Base from '../../components/Base/Base'
import styles from './settings.module.css'
import { AiOutlineWarning, AiOutlineStop, AiOutlineInfoCircle } from 'react-icons/ai'
import { BsCheckAll } from 'react-icons/bs'

const Notification = () => {
  return (
    <Base>
      <div className='py-2 px-4 w-[100%] mt-5'>
        <div className="flex justify-between w-full">
          <h2 className='text-3xl font-bold'>
            Notification
          </  h2>
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

        <div className={`width-[90%] campaigntable overflow-x-auto shadow-lg ${styles.notification_area}`}>
          <div className={`${styles.notification} sm:w-[90%] w-[100%] ${styles.warning}`}>
            <AiOutlineWarning className='max-sm:hidden ml-2' size={23} />
            <p className='text-inherit text-base'>ERROR : No free channel for campaign: Voice_Broadcast_Demo20_USA!</p>
            <p className='text-inherit'>2022-12-09 06:47:28</p>
          </div>
          <div className={`${styles.notification} sm:w-[90%] w-[100%] ${styles.success}`}>
            <BsCheckAll className='max-sm:hidden ml-2' size={23} />
            <p className='text-inherit text-base'>WARN : Campaign Pause - No pending contacts!</p>
            <p className='text-inherit'>2022-11-22 09:41:06</p>
          </div>
          <div className={`${styles.notification} sm:w-[90%] w-[100%] ${styles.error}`}>
            <AiOutlineStop className='max-sm:hidden ml-2' size={23} />
            <p className='text-inherit text-base'>ERROR : Server down maintainance issue.</p>
            <p className='text-inherit'>2022-11-16 12:50:10</p>
          </div>
          <div className={`${styles.notification} sm:w-[90%] w-[100%] ${styles.info}`}>
            <AiOutlineInfoCircle className='max-sm:hidden ml-2' size={23} />
            <p className='text-inherit text-base'>INFO : Contact added successfully!</p>
            <p className='text-inherit'>2022-11-16 12:50:10</p>
          </div>
        </div>
      </div>
    </Base>
  )
}

export default Notification