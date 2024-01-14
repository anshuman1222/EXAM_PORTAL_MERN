import React from 'react'
import { Link } from "react-router-dom";
const Landing_Navbar = () => {
    return (
        <div className='p-4 h-[40px] text-[#F5FEFD] m-3'>
            <Link to='/' className='text-3xl font-bold'>Exam Portal</Link>
        </div>
    )
}

export default Landing_Navbar
