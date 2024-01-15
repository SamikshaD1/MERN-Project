import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function AdminLayout() {


    return (
        <>
            <nav className='h-full w-full text-xl flex justify-center gap-4'>
                <NavLink to="/admin/users">Users</NavLink>
                <NavLink to="/admin/contacts">Contacts</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default AdminLayout