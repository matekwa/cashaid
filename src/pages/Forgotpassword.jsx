import React from 'react'

const Forgotpassword = () => {
    return (
        <section className='w-full h-screen'>
            <div className='absolute flex flex-col items-center justify-center  text-white top-0 left-0 w-full h-full p-4'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h3 className='text-center font-bold'>Reset My Password</h3>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Email</label>
                        <input className='text-gray-100 rounded-lg mt-2 p-2 focus:outline-none bg-gray-700 focus:bg-gray-800 focus:border-blue-500 ' type="text" value='kashaid@gmail.com' />
                    </div>
                    <div>
                        <button className='bg-yellow-600 font-semi bold w-full py-2 mt-2 rounded-lg text-white'>Verify</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Forgotpassword