import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkMenu() {
  return (
    <div className='flex mt-12 justify-center flex-col items-center text-accent'>
        <div>
            <Link className='m-6 hover:underline' to="/dashboard/user">User Dashboard</Link>

        </div>
        <div>
            <Link className='m-6 hover:underline' to="/dashboard/fi">Bank Dashboard</Link>

        </div>
        <div>
            <Link className='m-6 hover:underline' to="/dashboard/admin">Admin</Link>

        </div>
    </div>
  )
}
