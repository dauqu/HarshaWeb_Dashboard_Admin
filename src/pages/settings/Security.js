import React, { useEffect, useState } from 'react'
import Base from '../../components/Base/Base'
import Switcher from '../../components/utils/Switcher'

const Security = () => {
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    console.log(checked);
  }, [checked])
  return (
    <Base>
      <div className='py-2 px-6 w-[100%] flex justify-center items-center mt-5'>
        <div className="my-4 md:w-[70%] sm:w-[80%] w-[90%] bg-white shadow-lg">
          <div className="py-2 w-full flex justify-between px-2 bg-gray-200 border-l-8 border-gray-400 ">
            <h2 className='text-xl font-bold text-gray-700 font-sans'>2 Step Verification</h2>
            <Switcher checked={checked} onChange={e => setChecked(e)} />
          </div>

          <div className={`${checked && "hidden"} delay-[170] py-10 flex flex-row justify-center items-center gap-x-7"`}>
            <h2 className='text-red-600 text-lg '>2 Step Verification is Disabled!</h2>
          </div>

          <div className={`${!checked && "hidden"} delay-[170] flex flex-col gap-x-7 p-5`} >
              <p className='text-base mb-3'>
                when you enable 2-Step Verification, you add an extra layer of security to your account. You sign in with something you know (your password) and something you have (a code sent to your phone).
              </p>
              <p className='text-base mb-3'>How to set it up:</p>
              <p className='text-base mb-3'>
                Choose a method to receive codes through your phone.
                Verify the method you chose works when we send you a code.
              </p>
              <button className='bg-blue-600 p-2 text-white w-[50%] self-center mt-4 rounded-md'>Add Verification</button>
          </div>

        </div>
      </div>
    </Base>
  )
}

export default Security