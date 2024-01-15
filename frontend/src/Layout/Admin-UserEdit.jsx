import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';

function AdminUserEdit() {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const authorizationToken = useAuth()
    const params = useParams()
    console.log(params.id);

    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
                method: 'GET',
                headers: {
                    Authorization: authorizationToken,
                }
            })
            console.log(response.data);
            const users = await response.json()
            console.log("user data Edit", users);
            setData(users)

            if (response.ok) {
                getSingleUserData()
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleUserData()
    }, []);

    const handleChange = () => {

    }

    return (
        <div className='h-full w-full flex justify-start mx-10'>
            <div className="registration-form">
                <h1 className="text-4xl font-extrabold mb-6">User Details Update</h1>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-600 font-medium mb-2"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={data.username}
                            onChange={handleChange}
                            required
                            autoComplete="on"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="phone"
                            className="block text-gray-600 font-medium mb-2"
                        >
                            Phone
                        </label>
                        <input
                            type="phone"
                            name="phone"
                            autoComplete="on"
                            value={data.phone}
                            onChange={handleChange}
                            required
                            placeholder="phone"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-600 font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            autoComplete="on"
                            value={data.email}
                            onChange={handleChange}
                            required
                            placeholder="Email"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdminUserEdit