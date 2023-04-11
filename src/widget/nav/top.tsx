import { Link } from 'react-router-dom'
import React from "react"

const TopNavigation = () => {

    return(
        <nav className="flex top-0 sticky w-screen bg-green-100">
            <div className="flex flex-1 z-10 p-2 shadow-md">
                <Link className='p-2 font-bold text-black ' to={'/'}>
                    <p>메인</p>
                </Link>
                <Link className='p-2 font-bold text-black ' to={'/cards'}>
                    <p>카드목록</p>
                </Link>

            </div>
        </nav>
    )
}

export default TopNavigation