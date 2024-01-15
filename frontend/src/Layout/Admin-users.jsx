import React, { useState, useEffect } from 'react'
import { useAuth } from '../store/auth'
import { Link } from 'react-router-dom';

function Adminusers() {
    const [users, setUsers] = useState([]);
    const { authorizationToken } = useAuth()

    const getAllUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: 'GET',
                headers: {
                    Authorization: authorizationToken,
                }
            })

            if (response.ok) {
                const data = await response.json()
                setUsers(data)
            }
        } catch (error) {
            console.log("error: admin users " + error);
        }
    }

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: authorizationToken,
                }
            })

            const data = await response.json()
            console.log("user deleted", data);

            if (response.ok) {
                getAllUsers()
            }

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getAllUsers()
    }, [users]);


    return (
        <div className='h-full w-full flex justify-center'>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">


                    {
                        users.map((user, index) => {
                            return <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{user._id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.isAdmin == true ? "Admin" : "User"}</td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link to={`/admin/users/${user._id}/edit`} className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</Link>
                                    <button onClick={() => deleteUser(user._id)} className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Adminusers


//  {
//                         users.map((user, index) => {
//                             <tr key={index}>
//                                 <td className="px-6 py-4 whitespace-nowrap">{user._id}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap">{user.isAdmin}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap">
//                                     <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap">
//                                     <Link to={`/admin/users/${user._id}/edit`} className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</Link>
//                                     <button onClick={() => deleteUser(user._id)} className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
//                                 </td>
//                             </tr>
//                         })
//                     }
