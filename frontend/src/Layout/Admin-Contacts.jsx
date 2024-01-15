import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';

function AdminContacts() {
    const [contacts, setContacts] = useState([]);
    const authorizationToken = useAuth()

    const getAllContacts = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: 'GET',
                headers: {
                    Authorization: authorizationToken,
                }
            })
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                setContacts(data)
            }
        } catch (error) {
            console.log("error: admin contact " + error);
        }
    }

    useEffect(() => {
        getAllContacts();
    }, [])

    console.log(contacts);
    return (
        <div>Admin-Contacts</div>
    )
}

export default AdminContacts