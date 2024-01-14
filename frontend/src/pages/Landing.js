import React from 'react'
import login from "../assets/images/login-bg1.png"
import { Link } from 'react-router-dom/dist'

const Landing = () => {
    return (
        <>
        <div className='p-4 h-[40px] text-[#F5FEFD] m-3'>
            <Link to='/' className='text-3xl font-bold'>Exam Portal</Link>
        </div>
        <div className='px-3 mx-3 '>
            <div className='md:grid grid-cols-3 items-center justify-items-end'>
                <div className=''>
                    <h1 className='text-[#c60fa2] text-3xl md:text-5xl font-bold mb-2'>
                        Online Exam <br />Portal
                    </h1>
                    <div className='text-white mx-1 text-pretty font-semibold'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </div>
                    <div className='text-white my-4 mx-2 font-bold'>
                        <button className='rounded border border-[#c60fa2]  hover:bg-[#c60fa2] py-1 px-2 hover:scale-125 duration-300 text-xl'><Link to='/register'>Get Started</Link></button>
                        {/* <button className='rounded border border-[#c60fa2] w-[100px] mx-2 hover:bg-[#c60fa2] py-1 hover:scale-125 duration-300'><Link to='/signup'>Signup</Link></button> */}
                    </div>
                </div>
                <div className='hidden md:block w-[90%] col-span-2 mt-[-10%]'>
                    <img src={login} alt="img" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Landing;